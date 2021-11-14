<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/login", function () {
    return view("auth.app");
});

Route::prefix('admin')->group(function () {
    Route::get('{url?}', function () {
        return view('admin.app');
    })->where("url", ".*");
});

Route::get("{url?}", function () {
    return view("developer.app");
})->where("url", ".*");
