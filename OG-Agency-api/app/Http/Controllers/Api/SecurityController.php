<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SecurityController extends Controller
{
    public function login(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validation->errors()
            ], 401);
        }

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response()->json([
                'status' => false,
                'message' => "L'email ou le mot de passe ne sont pas correct"
            ], 401);
        }

        $user = User::where("email", $request->email)->first();
        return response()->json([
            "status" => true,
            "message" => "User connecté",
            "user" => $user,
            "token" => $user->createToken("API TOKEN")->plainTextToken
        ], 200);
    }



    public function register(Request $request)
    {
        try {
            $validation = Validator::make($request->all(), [
                'name' => 'required|min:1|string|unique:users,name',
                'email' => 'required|min:1|string|unique:users,email',
                'password' => 'required|string|min:8',
            ]);

            if ($validation->fails()) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Validation error',
                    'errors' => $validation->errors(),
                ], 422);
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),

            ]);

            return  $this->successResponse('Merci pour votre inscription, vérifiez vos mails pour confirmer votre inscription', $user);
            response()->json([
                'status' => 'success',
                'message' => 'Merci pour votre inscription, vérifiez vos mails pour confirmer votre inscription',
                'user' => $user,
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 403);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Deconnexion']);
    }
}
