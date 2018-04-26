<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use checkrole;
use Auth;
use App\Imageupload;
use Session;
use Hash;

class UserAdminController extends Controller
{
    //perform all actions for user only
	public function __construct()
	{
        $this->middleware('auth');
		$this->middleware('checkrole:user');
	}

/*-------------dashboard main page section ----------------*/
    public function userbckendhomepage(){

    	return view('userbackend.index');
    }
/*-----------dashboard main page section ends ----------------*/

/*------------------------User profile controllers---------------------*/

//view user profile
	public function userbckendprofile(){

		return view('userbackend.userprofile');
	}

//edit user profile
	public function userbckendeditprofile(){

		return view('userbackend.userprofileedit');
	}

//user profile update users table for  current login user
    public function userbckendprofileupdate(Request $request){

        $user = Auth::user();
        $namecount = strlen($request->input('name'));

       request()->validate([

            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            
        ]);


	    if($request->input('name') == " "){
	        return redirect()->route('user.edit.profile')->with('usernamefailed' , 'Name Should not be empty'); 
	    }else{
	        $user->name = $request->input('name');

	        if(!empty($request->file('image'))){
	        $image = $request->file('image');
	        //image upload comes from Modal Imageupdate 
	        $save_image = Imageupload::imageupload($image, $user); 
	        }else{
				
				$image = $request->file('oldphoto');

	        }  
	    }

       	$user->save();
        Session::flash('success', 'Your profile updated');
       	return redirect()->route('user.profile.view');
    }

//user password edit section
    public function userbckendeditpassword(){

        return view('userbackend.userpasswordchange');
    }
//user profile password change or update section
    public function userbckendpasswordupdate(Request $request){
        $user = Auth::user();
        $workingpassword = $user->password;
        $currentpassword = Hash::make($request->input('currentpassword'));
        if (Hash::check($request->input('currentpassword'), $workingpassword))
        {
	        if(!empty($request->input('password')))
	        {
	            $currentpassword = $request->input('currentpassword');
	            if($currentpassword == $request->input('password') ){
	                return redirect()->route('user.edit.password')->with('samepassfailed' , 'Your cannot use current password as new ');
	            }
	            else{
	                if($request->input('password') == $request->input('confirmpassword'))
	                {                    
	                    $passcount = strlen($request->input('password'));
	                    if($passcount < "6" || $passcount >"10"){
	                        return redirect()->route('user.edit.password')->with('passsfailed' , 'password Should be more than "5" character and upto "10" characters');
	                    }else{
	                        $user->password = Hash::make($request->input('password'));
	                    }
	                }else{
	                 return redirect()->route('user.edit.password')->with('failed' , 'Your confirm password does not matched');   
	                }
	            }
	        }
	        $user->save();
	        
	        return redirect()->route('user.profile.view')->with("success" , "Your profile password updated");
    	}
    	else{
            return redirect()->route('user.edit.password')->with('passfailed' , 'Your current password does not matched'); 
        }
    }

/*-------------------User profile controllers ended-----------------------*/








}
