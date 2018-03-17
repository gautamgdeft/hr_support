<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Home;
use App\History;
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
    
    /*dashboard home page section */
        public function homesection(){

            $homesecdata = Home::all();
            //dd($homesecdata[0]['id']);
            if(!empty($homesecdata[0]['id'])){
                return view('backend.home.homeedit', compact('homesecdata'));
            } 
            else{
                return view('backend.home.homemain');
            }
        }
    /*dashboard home page save data query*/
        public function homeseccontent (Request $request){

            //dd($request->all());
                    $newuserdetail = new Home($request->all());
                    $newuserdetail->save();
                    Session::flash('success', 'Page Content updated.');
                    return redirect()->route('homesection'); 
        }

       /*dashbiard home page update data query*/ 

        public function homesecupdate(Request $request){

            $homesecdata  = Home::find($request->home_id);
            
          

            $homesecdata->update($request->all());


            return redirect()->route('homesection')->with('homesuccess' , 'update successfully'); 

        }


    /*dashboard home page section ends*/

/*-----------------------------------------------------------------------*/

    /*dashboard History page section */

        public function historysection(){

            $historydata = History::all();

            if(!empty($historydata[0]['id'])){
                return view('backend.history.historyedit', compact('historydata'));
            } 
            else{
                return view('backend.history.historymain');
            }
        }
    /*dashboard History page save data query*/
        public function historyseccontent (Request $request){

                    $historytext = new History($request->all());
                    $historytext->save();
                    Session::flash('success', 'Page Content updated.');
                    return redirect()->route('history.section'); 
        }

    /*dashbiard HIstory page update data query*/ 

        public function historysecupdate(Request $request){

            $historydata  = History::find($request->history_id);
            $historydata->update($request->all());
            return redirect()->route('history.section')->with('historysuccess' , 'update successfully'); 

        }


    /*dashboard History page section ends*/

/*-----------------------------------------------------------------------*/



}
