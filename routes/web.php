<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::resource('services', 'ServicesController');
Route::resource('users', 'UsersController');

Route::get('/testendpoint', function(){
  $data = ['staus' => 'ok',
           'id' => 10,
           'name'=>'something',
           'address'=>'something'
           ];
  return response()->json($data);
});

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
