<?php

namespace App\Http\Controllers;


abstract class Controller
{
    public function successResponse($message, $data = [])
    {
        return response()->json([
            'succès' => true,
            $data,
            'message' => $message
        ]);
    }
    public function errorResponse($message, $error)
    {
        return response()->json([
            'succès' => false,
            'error' => $error,
            'message' => $message
        ]);
    }

    public function succesResponseLogin($message, $user, $token)
    {
        return response()->json([
            'succès' => true,
            'user' => $user,
            'token' => $token,
            'message' => $message
        ]);
    }
}
