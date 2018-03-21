<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use checkrole;
use Auth;
use Session;
use Hash;
use App\Home;
use App\History;
use App\Quality;
use App\Life;
use App\Work;
use App\Employment;
use App\Workvslife;
use App\Growth;

class forntendController extends Controller
{
   
	public function __construct()
	{
		//$this->middleware('checkrole:user');
        $this->middleware('auth');
		$this->middleware('checkrole:user');
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

        $qualitytext = Quality::all();
		return view ('frontend.quality', compact('qualitytext'));

	}

	public function life (){

         $lifetext = Life::all();
		return view ('frontend.life', compact('lifetext'));

	}

	public function work (){

        $worktext = Work::all();
		return view ('frontend.work', compact('worktext'));

	}

	public function employment (){
        $employmenttext = Employment::all();
		return view ('frontend.employment', compact('employmenttext'));

	}

	public function workvslife (){
        $worklifetext = Workvslife::all();
		return view ('frontend.workvslife', compact('worklifetext'));

	}


	public function growth (){
        $growthtext = Growth::all();
		return view ('frontend.growth', compact('growthtext'));

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

        $namecount = strlen($request->input('name'));
        //dd($namecount);
    if($request->input('name') == " "){
        return redirect()->route('front.edit.user')->with('usernamefailed' , 'Name Should not be empty'); 

    }else{
        // if($namecount <= "15"){

            // if($namecount > "1"){ 
                $user->name = $request->input('name');
            // }else{

            //     return redirect()->route('front.edit.user')->with('usernamefailed' , 'Name should be  atleast "2" characters Long'); 
            //  }




            
        // }else{
        //     return redirect()->route('front.edit.user')->with('usernamefailed' , 'Name should be "15" characters only'); 
        // }
    }
            // if($user->email !== $request->input('email'))
            // {
            //     $user->email = $request->input('email');
            // }
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
                    $passcount = strlen($request->input('password'));
                    if($passcount < "6" || $passcount >"10"){
                        return redirect()->route('front.password.edit')->with('passsfailed' , 'password Should be more than "4" character and upto "10" characters');

                    }else{
                         $user->password = Hash::make($request->input('password'));

                    }

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
