<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;
use Hash;
use App\Home;
use App\History;

class forntendController extends Controller
{
   
	public function __construct()
	{
		//dd(Auth::user()->id);
		$this->middleware('auth');
		
	}

    public function homepage (){

        $home = Home::all();
        return view ('frontend.index', compact('home'));

	}

	public function history (){

        $historytext = History::all();
		return view ('frontend.history', compact('historytext'));

	}

	public function quality (){

		return view ('frontend.quality');

	}

	public function life (){

		return view ('frontend.life');

	}

	public function work (){

		return view ('frontend.work');

	}

	public function employment (){

		return view ('frontend.employment');

	}

	public function workvslife (){

		return view ('frontend.workvslife');

	}


	public function growth (){

		return view ('frontend.growth');

	}

	public function benifits (){

		return view ('frontend.benifits');

	}

	public function fun (){

		return view ('frontend.fun');

	}


	public function dialup (){

		return view ('frontend.dialup');

	}


/*------------------------User profile controllers---------------------*/

//view user profile
	public function viewuser(){

		return view('frontend.userprofile.viewuserprofile');
	}

//edit user profile
	public function edituser(){

		return view('frontend.userprofile.edituserprofile');
	}

//user profile update users table for  current login user
    public function updateuserprofile(Request $request){

        $user = Auth::user();
        $user->name = $request->input('name');
            if($user->email !== $request->input('email'))
            {
                $user->email = $request->input('email');
            }
       	$user->save();

        Session::flash('success', 'Your profile updated');
       return redirect()->route('front.view.user');
    }

//user password edit section
    public function edituserpassword(){

        return view('frontend.userprofile.edituserpassword');
    }
//user profile password change or update section
    public function updateuserpassword(Request $request){
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
                return redirect()->route('front.password.edit')->with('samepassfailed' , 'Your cannot use current password as new ');
            }else{

                if($request->input('password') == $request->input('confirmpassword'))
                {
                    $user->password = Hash::make($request->input('password'));
                }else{
                 //Session::flash('failed','Password not matched');
                 return redirect()->route('front.password.edit')->with('failed' , 'Your confirm password does not matched');   
                }
            }
        }
        $user->save();
        
        return redirect()->route('front.view.user')->with("success" , "Your profile password updated");
    }
                else{
 
                     return redirect()->route('front.password.edit')->with('passfailed' , 'Your current password does not matched'); 
                }
    }


/*-------------------User profile controllers ended-----------------------*/



}
