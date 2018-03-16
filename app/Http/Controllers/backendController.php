<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Home;
use Session;
use Auth;
use Hash;

class backendController extends Controller
{

/*dashboard main page section */
    public function adminhomepage(){

    	return view('backend.index');
    }
/*dashboard main page section ends */

/*-----------------------------------------------------------------------*/

/*dashboard home page section */
    public function homesection(){

    	return view('backend.homepage');
    }
/*dashboard home page save data query*/
    public function homeseccontent (Request $request){

    	//dd($request->all());
				$newuserdetail = new Home($request->all());
				$newuserdetail->save();
				Session::flash('success', 'Page Content updated.');
            	return redirect()->route('homesection');
    }
/*dashboard home page section ends*/

/*-----------------------------------------------------------------------*/

/*dasboard User profile section*/
    public function userprofile(){

        return view('backend.userprofile');
    }

/*user profile edit section*/
    public function userprofileedit(){

        return view('backend.userprofileedit');
    }
/*user profile update users table for  current login user*/
    public function userprofileupdate(Request $request){

        $user = Auth::user();
            $user->name = $request->input('name');
            if($user->email !== $request->input('email'))
            {
                $user->email = $request->input('email');
            }
            // if(!empty($request->input('password') ))
            // {
            //     $user->password  = Hash::make($request->input('password'));
            // }
            $user->save();

            Session::flash('success', 'Your profile updated');
            return redirect()->route('userprofile');
    }

/*user password edit section*/
    public function userpasswordchange(){

        return view('backend.userpasswordchange');
    }
/*user profile password change or update section*/
    public function userpasswordupdate(Request $request){
        $user = Auth::user();

        $workingpassword = $user->password;
        //dd($workingpassword);
        $currentpassword = Hash::make($request->input('currentpassword'));
        //dd($currentpassword);  

        if (Hash::check($request->input('currentpassword'), $workingpassword))
               {

        if(!empty($request->input('password')))
        {
            $currentpassword = $request->input('currentpassword');
            if($currentpassword == $request->input('password') ){
                return redirect()->route('user.password.change')->with('samepassfailed' , 'Your cannot use current password as new ');
            }else{

                if($request->input('password') == $request->input('confirmpassword'))
                {
                    $user->password = Hash::make($request->input('password'));
                }else{
                 //Session::flash('failed','Password not matched');
                 return redirect()->route('user.password.change')->with('failed' , 'Your confirm password does not matched');   
                }
            }
        }
        $user->save();
        
        return redirect()->route('userprofile')->with("success" , "Your profile password updated");
    }
                else{
 
                     return redirect()->route('user.password.change')->with('passfailed' , 'Your current password does not matched'); 
                }
    }

/*dasboard User profile section ends*/

/*-----------------------------------------------------------------------*/

}
