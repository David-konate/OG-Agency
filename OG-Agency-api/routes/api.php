<?php


use App\Http\Controllers\Api\SecurityController;
use Illuminate\Support\Facades\Route;

Route::prefix('/security')->group(function () {
    Route::post('/register', [SecurityController::class, 'register'])->middleware('auth:sanctum')->name('security.register');
    Route::post('/login', [SecurityController::class, 'login'])->middleware('guest')->name('security.login');
    Route::post('/google', [SecurityController::class, 'google'])->middleware('guest')->name('security.google');
    Route::post('/logout', [SecurityController::class, 'logout'])->middleware('auth:sanctum')->name('security.logout');
});
