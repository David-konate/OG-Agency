<?php

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\HttpException; // Ajout de cette ligne
use App\Exceptions\customException; // Assuming your custom exception class

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        // web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // ... existing middleware definitions (if any)
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function ($exception, Request $request) use ($exceptions) {
            $statusCode = 500; // Default status code
            $message = 'Erreur interne du serveur'; // Default message

            if ($exception instanceof ValidationException) {
                $statusCode = 422;
                $message = 'Validation error';
                $errors = $exception->errors();
            } elseif ($exception instanceof ModelNotFoundException) {
                $statusCode = 404;
                $message = 'Ressource non trouvée';
            } elseif ($exception instanceof AuthorizationException) {
                $statusCode = 403;
                $message = 'Accès non autorisé';
            } elseif ($exception instanceof HttpException) {
                $statusCode = $exception->getStatusCode();
                $message = $exception->getMessage() ?: 'An error occurred';
            } elseif ($exception instanceof AuthenticationException) {
                $statusCode = 401;
                $message = 'Non authentifié';
            }

            return response()->json([
                'success' => false,
                'message' => $message,
                'errors' => $errors ?? [], // Include errors if available
            ], $statusCode);
        });
    })
    ->create();
