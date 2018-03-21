<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Home;
use App\History;
use App\Quality;
use App\Life;
use App\Work;
use App\Employment;
use App\Workvslife;
use App\Growth;
use Session;
use Auth;
use Hash;

class backendController extends Controller
{
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('checkrole:admin');
        }
  
    // public function __construct()
    //     {
    //       //$this->middleware('checkrole:user');
    //         $this->middleware('checkrole:admin');
    //         //$this->middleware('Auth');
    //     }



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
            //dd($request);
            $imageName = time().'.'.request()->columncenter->getClientOriginalExtension();
            request()->columncenter->move(public_path('images'), $imageName);
            $homesecdata->update($request->all());

            if ($request->hasFile('columncenter')) {
            $homesecdata->columncenter = $imageName;
            $homesecdata->save();
            }

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



 /*dashboard Quality page section */

        public function qualitysection(){
            $qualitydata = Quality::all();
            if(!empty($qualitydata[0]['id'])){
                return view('backend.quality.qualityedit', compact('qualitydata'));
            } 
            else{
                return view('backend.quality.qualitymain');
            }
        }

    /*dashboard Quality page save data query*/

        public function qualityseccontent (Request $request){
                    $qualitytext = new Quality($request->all());
                    $qualitytext->save();
                    Session::flash('success', 'Page Content updated.');
                    return redirect()->route('quality.section'); 
        }

    /*dashbiard QUality page update data query*/ 

        public function qualitysecupdate(Request $request){
            $qualitydata  = Quality::find($request->quality_id);
            $qualitydata->update($request->all());
            return redirect()->route('quality.section')->with('qualitysuccess' , 'update successfully'); 

        }

    /*dashboard Quality page section ends*/

/*-----------------------------------------------------------------------*/

/*dashboard life page section */

        public function lifesection(){
            $lifedata = Life::all();
            if(!empty($lifedata[0]['id'])){
                return view('backend.life.lifeedit', compact('lifedata'));
            } 
            else{
                return view('backend.life.lifemain');
            }
        }

    /*dashboard life page save data query*/

        public function lifeseccontent (Request $request){
                    $lifetext = new Life($request->all());
                    $lifetext->save();
                    Session::flash('success', 'Page Content updated.');
                    return redirect()->route('life.section'); 
        }

    /*dashbiard life page update data query*/ 

        public function lifesecupdate(Request $request){
            $lifedata  = Life::find($request->life_id);
            $lifedata->update($request->all());
            return redirect()->route('life.section')->with('lifesuccess' , 'update successfully'); 

        }

    /*dashboard life page section ends*/

/*-----------------------------------------------------------------------*/

/*dashboard work page section */

        public function worksection(){
            $workdata = Work::all();
            if(!empty($workdata[0]['id'])){
                return view('backend.work.workedit', compact('workdata'));
            } 
            else{
                return view('backend.work.workmain');
            }
        }

    /*dashboard work page save data query*/

        public function workseccontent (Request $request){
                    $worktext = new Work($request->all());
                    $worktext->save();
                    Session::flash('success', 'Page Content updated.');
                    return redirect()->route('work.section'); 
        }

    /*dashbiard work page update data query*/ 

        public function worksecupdate(Request $request){
            $workdata  = Work::find($request->work_id);
            $workdata->update($request->all());
            return redirect()->route('work.section')->with('worksuccess' , 'update successfully'); 

        }

    /*dashboard work page section ends*/

/*-----------------------------------------------------------------------*/

/*dashboard employment page section */

        public function employmentsection(){
            $employmentdata = Employment::all();
            if(!empty($employmentdata[0]['id'])){
                return view('backend.employment.employmentedit', compact('employmentdata'));
            } 
            else{
                return view('backend.employment.employmentmain');
            }
        }

    /*dashboard employment page save data query*/

        public function employmentseccontent (Request $request){
                    $employmenttext = new Employment($request->all());
                    $employmenttext->save();
                    Session::flash('success', 'Page Content updated.');
                    return redirect()->route('employment.section'); 
        }

    /*dashbiard employment page update data query*/ 

        public function employmentsecupdate(Request $request){
            $employmentdata  = Employment::find($request->employment_id);
            $employmentdata->update($request->all());
            return redirect()->route('employment.section')->with('employmentsuccess' , 'update successfully'); 

        }

    /*dashboard employment page section ends*/

/*-----------------------------------------------------------------------*/

/*dashboard work vs life page section */

        public function worklifesection(){
            $workvslifedata = Workvslife::all();
            if(!empty($workvslifedata[0]['id'])){
                return view('backend.workvslife.workvslifeedit', compact('workvslifedata'));
            } 
            else{
                return view('backend.workvslife.workvslifemain');
            }
        }

    /*dashboard work vs life page save data query*/

        public function worklifeseccontent (Request $request){
                    $worklifetext = new Workvslife($request->all());
                    $worklifetext->save();
                    Session::flash('success', 'Page Content updated.');
                    return redirect()->route('worklife.section'); 
        }

    /*dashbiard work vs life page update data query*/ 

        public function worklifesecupdate(Request $request){
            $worklifedata  = Workvslife::find($request->workvslife_id);
            $worklifedata->update($request->all());
            return redirect()->route('worklife.section')->with('worklifesuccess' , 'update successfully'); 

        }

    /*dashboard work vs life page section ends*/

/*-----------------------------------------------------------------------*/

/*dashboard Growth page section */

        public function growthsection(){
            $growthdata = Growth::all();
            if(!empty($growthdata[0]['id'])){
                return view('backend.growth.growthedit', compact('growthdata'));
            } 
            else{
                return view('backend.growth.growthmain');
            }
        }

    /*dashboard work vs life page save data query*/

        public function growthseccontent (Request $request){
                    $growthtext = new Growth($request->all());
                    $growthtext->save();
                    Session::flash('success', 'Page Content updated.');
                    return redirect()->route('growth.section'); 
        }

    /*dashbiard work vs life page update data query*/ 

        public function growthsecupdate(Request $request){
            $growthdata  = Growth::find($request->growth_id);
            $growthdata->update($request->all());
            return redirect()->route('growth.section')->with('growth' , 'update successfully'); 
        }

    /*dashboard Growth page section ends*/

/*-----------------------------------------------------------------------*/

}
