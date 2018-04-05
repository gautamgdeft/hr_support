<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;
use Hash;
use App\User;


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
	//dd($string_version);

	$user = Auth::user();
	$auth='fc1d072201417a94e10dd52eadf189e8';
	$json = file_get_contents('https://people.zoho.com/people/api/forms/P_EmployeeView/records?authtoken='.$auth);

	//$json = file_get_contents('https://people.zoho.com/people/api/forms/P_EmployeeView/records?authtoken='.$auth.'&sIndex='.$value);
	$obj = json_decode($json);

	//dd($json);


	foreach($obj as $zohouser){
	//dd($zohouser);
	$var='Email ID';
	$firstnamevar = 'First Name';
	$email = $zohouser->$var;
	$name = $zohouser->ownerName;
	$password = $zohouser->$firstnamevar;
	$empid = $zohouser->EmployeeID;

	$newuserdetail = new User();
	$newuserdetail->name = $name;
	$newuserdetail->email = $email;
	$newuserdetail->password = Hash::make($password);
	$newuserdetail->employee_id = $empid;

	if (strpos($string_version, $empid) !== false) {
    	//dd('already having this value');
	}else{
		$newuserdetail->save();
	}



    

	}
}


}
