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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
/*--------------pages frontend------------*/
Route::get('/home', 'forntendController@homepage')->name('home');

Route:: get('/history','forntendController@history')->name('history');

Route:: get('/quality','forntendController@quality')->name('quality'); 

Route:: get('/life','forntendController@life')->name('life'); 

Route:: get('/work','forntendController@work')->name('work'); 

Route:: get('/employment','forntendController@employment')->name('employment'); 

Route:: get('/workvslife','forntendController@workvslife')->name('workvslife'); 

Route:: get('/growth','forntendController@growth')->name('growth'); 

Route:: get('/benifits','forntendController@benifits')->name('benifits'); 

Route:: get('/fun','forntendController@fun')->name('fun'); 

Route:: get('/dialup','forntendController@dialup')->name('dialup');
/*--------------pages frontend ended------------*/

/*----edit user profile frontend-------*/
Route:: get('/viewuser','forntendController@viewuser')->name('front.view.user');
Route:: get('/edituser','forntendController@edituser')->name('front.edit.user');
Route:: post('/edituser','forntendController@updateuserprofile')->name('front.update.user');
Route:: get('/editpassword','forntendController@edituserpassword')->name('front.password.edit');
Route:: post('/editpassword','forntendController@updateuserpassword')->name('front.password.update');

/*----edit user profile frontend ended------*/




/*
*
 Backend admin Section Routes 
*
*/


Route:: get('/LaraAdmin','backendController@adminhomepage')->name('adminhomepage');

Route:: get('/home-section','backendController@homesection')->name('homesection');
Route:: post('/home-section','backendController@homeseccontent')->name('homeseccontent');

/*---------------user profile related routes-------------------*/
Route:: get('/user-profile','backendController@userprofile')->name('userprofile');
//edit user profile
Route:: get('/edit-user-profile','backendController@userprofileedit')->name('user.profile.edit');
Route:: post('/edit-user-profile','backendController@userprofileupdate')->name('user.profile.update');
//update user password
Route:: get('/edit-user-password','backendController@userpasswordchange')->name('user.password.change');
Route:: post('/edit-user-password','backendController@userpasswordupdate')->name('user.password.update');
/*----------------user profile related routes ended---------------------*/