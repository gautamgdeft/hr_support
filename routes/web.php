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
    return view('auth/login');
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

/*---------------user profile related routes---------------------------------*/
Route:: get('/user-profile','backendController@userprofile')->name('userprofile');
//edit user profile
Route:: get('/edit-user-profile','backendController@userprofileedit')->name('user.profile.edit');
Route:: post('/edit-user-profile','backendController@userprofileupdate')->name('user.profile.update');
//update user password
Route:: get('/edit-user-password','backendController@userpasswordchange')->name('user.password.change');
Route:: post('/edit-user-password','backendController@userpasswordupdate')->name('user.password.update');
/*----------------user profile related routes ended--------------------------*/

/*---------------Home page related routes-------------------------------------*/
Route:: get('/home-section','backendController@homesection')->name('homesection');
//Save Homepage
Route:: post('/home-section','backendController@homeseccontent')->name('homeseccontent');
//Update Homepage
Route:: post('/home-section-update','backendController@homesecupdate')->name('homesecupdate');
/*----------------Home page related routes ended-------------------------------*/

/*---------------History page related routes-----------------------------------*/
Route:: get('/history-section','backendController@historysection')->name('history.section');
//Save historypage
Route:: post('/history-edit','backendController@historyseccontent')->name('history.edit');
//Update historypage
Route:: post('/history-update','backendController@historysecupdate')->name('history.update');
/*----------------History page related routes ended-----------------------------*/

/*---------------Qualtiy page related routes-----------------------------------*/
Route:: get('/quality-section','backendController@qualitysection')->name('quality.section');
//Save qualitypage
Route:: post('/quality-edit','backendController@qualityseccontent')->name('quality.edit');
//Update qualitypage
Route:: post('/quality-update','backendController@qualitysecupdate')->name('quality.update');
/*----------------Quality page related routes ended-----------------------------*/

/*---------------Life page related routes-----------------------------------*/
Route:: get('/life-section','backendController@lifesection')->name('life.section');
//Save lifepage
Route:: post('/life-edit','backendController@lifeseccontent')->name('life.edit');
//Update lifepage
Route:: post('/life-update','backendController@lifesecupdate')->name('life.update');
/*----------------Life page related routes ended-----------------------------*/

/*---------------Work page related routes-----------------------------------*/
Route:: get('/work-section','backendController@worksection')->name('work.section');
//Save workpage
Route:: post('/work-edit','backendController@workseccontent')->name('work.edit');
//Update workpage
Route:: post('/work-update','backendController@worksecupdate')->name('work.update');
/*----------------work page related routes ended-----------------------------*/

/*---------------Employment page related routes-----------------------------------*/
Route:: get('/employment-section','backendController@employmentsection')->name('employment.section');
//Save employmentpage
Route:: post('/employment-edit','backendController@employmentseccontent')->name('employment.edit');
//Update employmentpage
Route:: post('/employment-update','backendController@employmentsecupdate')->name('employment.update');
/*----------------Employment page related routes ended-----------------------------*/

/*---------------Work vs Life page related routes-----------------------------------*/
Route:: get('/worklife-section','backendController@worklifesection')->name('worklife.section');
//Save work vs life page
Route:: post('/worklife-edit','backendController@worklifeseccontent')->name('worklife.edit');
//Update work vs life page
Route:: post('/worklife-update','backendController@worklifesecupdate')->name('worklife.update');
/*----------------Work vs Life page related routes ended-----------------------------*/

/*---------------Growth page related routes-----------------------------------*/
Route:: get('/growth-section','backendController@growthsection')->name('growth.section');
//Save Growth page
Route:: post('/growth-edit','backendController@growthseccontent')->name('growth.edit');
//Update Growth page
Route:: post('/growth-update','backendController@growthsecupdate')->name('growth.update');
/*---------------Growth page related routes ended-----------------------------*/