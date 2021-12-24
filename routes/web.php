<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

// Route::get('{any}', function () {
//     return view('master');
// })->where('any','.*');

// Route::get('{any}',[HomeController::class, 'any'])->where('any', '.*');
Route::get('/',[HomeController::class, 'users']);
Route::get('/about',[HomeController::class, 'users']);
Route::get('/resume',[HomeController::class, 'users']);
Route::get('/skills',[HomeController::class, 'users']);
Route::get('/contact',[HomeController::class, 'users']);

Route::get('/admin',[AdminController::class, 'admin']);
Route::get('/dashboard',[AdminController::class, 'admin']);
Route::get('/admin-home',[AdminController::class, 'admin']);

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';
