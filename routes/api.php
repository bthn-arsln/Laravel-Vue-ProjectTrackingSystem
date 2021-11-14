<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DeveloperController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\PersonelController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SiteSettingController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("/login", [AuthController::class, "login"]);
Route::delete("/logout", [AuthController::class, "logout"]);

Route::middleware("auth:sanctum")->group(function () {
    Route::resource('users', PersonelController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('projects', ProjectController::class);
    Route::post('projects/{id}/status-change', [ProjectController::class, "statusChange"]);
    Route::get("/projects/appoint/{projectId}/{userId}", [ProjectController::class, "controlProjectUser"]);
    Route::post("/projects/appoint", [ProjectController::class, "addProjectUser"]);

    // To do Api
    Route::get("{slug}/todos", [TodoController::class, "index"]);
    Route::post("/todos/{slug}", [TodoController::class, "store"]);
    Route::get("/todos/{id}", [TodoController::class, "show"]);
    Route::put("/todos/{id}", [TodoController::class, "update"]);
    Route::delete("/todos/{id}", [TodoController::class, "destroy"]);
    Route::put("/todos/{id}/change-status", [TodoController::class, "changeStatus"]);

    // Note Api
    Route::get("{slug}/notes", [NoteController::class, "index"]);
    Route::post("/notes/{slug}", [NoteController::class, "store"]);
    Route::get("/notes/{id}", [NoteController::class, "show"]);
    Route::put("/notes/{id}", [NoteController::class, "update"]);
    Route::delete("/notes/{id}", [NoteController::class, "destroy"]);

    Route::get("/my-projects/{id}", [DeveloperController::class, "index"]);
    Route::get("/workflow/{id}", [DeveloperController::class, "workflow"]);

    Route::get("/settings", [SiteSettingController::class, "getSettings"]);
    Route::post("/settings", [SiteSettingController::class, "postSettings"]);
});
