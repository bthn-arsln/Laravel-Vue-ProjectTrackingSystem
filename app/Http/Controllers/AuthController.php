<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::with("role")->where('email', $request->email)->first();
        if ($user !== null && Hash::check($request->password, $user->password)) {
            $token = $user->createToken('login-token')->plainTextToken;

            $response = [
                "status" => true,
                'user' => $user,
                'token' => $token
            ];
            return response($response, 201);
        } else {
            $response = [
                "status" => false
            ];
            return response($response, 201);
        }
    }
}
