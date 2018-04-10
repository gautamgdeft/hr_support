<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;
use Hash;
use App\User;
use Mail;


class CronjobController extends Controller
{
    //
	public function cronhit(){

		$users_data = User::all();
		$sub = 0;	
		foreach($users_data as $existing_user){

			$gg[$sub] = $existing_user->employee_id;
			$sub++;
		}
		$value = $gg;
		$string_version = implode(',', $value);

		$user = Auth::user();
		$auth='fc1d072201417a94e10dd52eadf189e8';
		$json = file_get_contents('https://people.zoho.com/people/api/forms/P_EmployeeView/records?authtoken='.$auth);
		$obj = json_decode($json);

		foreach($obj as $zohouser){
			$var='Email ID';
			$firstnamevar = 'First Name';
			$email = $zohouser->$var;
			$name = $zohouser->ownerName;
			/*random string password generator function*/
			 $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+;:,.?";
		    $pass = substr( str_shuffle( $chars ), 0, 8 );
			/*password function ends*/
			$password = $pass;
			$empid = $zohouser->EmployeeID;
			$newuserdetail = new User();
			$newuserdetail->name = $name;
			$newuserdetail->email = $email;
			$newuserdetail->password = Hash::make($password);
			$newuserdetail->employee_id = $empid;
			
			if (strpos($string_version, $empid) !== false) {
		 
			}else{
				/*----Mail Function Start----*/
				Mail::send('emails.welcome', ["data"=>$password, "name"=>$name, "email"=>$email ], function ($message) use($email) {
				    $message->from('us@example.com', 'Flatworld');

				    $message->to($email);
				    $message->subject('Flatworld Account Details');
				});
				/*----Mail Function Ends----*/
				$newuserdetail->save();
			}

		}
	}
}
