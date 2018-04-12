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
use App\Benifits;
use App\Contact;
use App\Fun;
use App\Funimages;

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

/*--------------------------------------------------------------------*/

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
        $currentpassword = Hash::make($request->input('currentpassword'));
        if (Hash::check($request->input('currentpassword'), $workingpassword))
        {
            if(!empty($request->input('password')))
            {
                $currentpassword = $request->input('currentpassword');
                if($currentpassword == $request->input('password') )
                {
                    return redirect()->route('user.password.change')->with('samepassfailed' , 'Your cannot use current password as new ');
                }
                else
                {
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

/*---------------------------------------------------------------------*/
    
/*dashboard home page section */
    public function homesection(){
        $homesecdata = Home::all();
            if(!empty($homesecdata[0]['id'])){
            return view('backend.home.homeedit', compact('homesecdata'));
        } 
        else{
            return view('backend.home.homemain');
        }
    }
/*dashboard home page save data query*/
    public function homeseccontent (Request $request){
        $newuserdetail = new Home($request->all());
        $newuserdetail->save();
        Session::flash('success', 'Page Content updated.');
        return redirect()->route('homesection'); 
    }

/*dashbiard home page update data query*/ 

    public function homesecupdate(Request $request){
        $homesecdata  = Home::find($request->home_id);

        if(!empty($request->columncenter)){
            $imageName = time().'.'.request()->columncenter->getClientOriginalExtension();
            $file_extention = request()->columncenter->getClientOriginalExtension();
            
            if($file_extention == "mp4" || $file_extention == "ogg" || $file_extention == "mov" || $file_extention == "flv" )
            {
                $pathimage = base_path().'/images/';
                request()->columncenter->move($pathimage, $imageName);
            }else{
                return redirect()->route('homesection')->with('homevideoerror' , 'Video formatt should be .mp4 , .ogg , .mov'); 
            }

        }else{
            $imageName = $request->oldvideo;
        }
        $homesecdata->update($request->all());
        if ($request->hasFile('columncenter')) {
            $homesecdata->columncenter = $imageName;
            $homesecdata->save();
        }
        return redirect()->route('homesection')->with('homesuccess' , 'Update successfully'); 
    }
/*dashboard home page section ends*/

/*-----------------------------------------------------------------*/

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
        return redirect()->route('history.section')->with('historysuccess' , 'Update successfully'); 
    }
/*dashboard History page section ends*/

/*----------------------------------------------------------*/

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
        return redirect()->route('quality.section')->with('qualitysuccess' , 'Update successfully'); 
    }

/*dashboard Quality page section ends*/

/*-----------------------------------------------------------------*/

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
        return redirect()->route('life.section')->with('lifesuccess' , 'Update successfully'); 
    }

/*dashboard life page section ends*/

/*---------------------------------------------------------------*/

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
        return redirect()->route('work.section')->with('worksuccess' , 'Update successfully'); 
    }

/*dashboard work page section ends*/

/*------------------------------------------------------------*/

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
        return redirect()->route('employment.section')->with('employmentsuccess' , 'Update successfully'); 
    }

/*dashboard employment page section ends*/

/*------------------------------------------------------------*/

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
        return redirect()->route('worklife.section')->with('worklifesuccess' , 'Update successfully'); 
    }

/*dashboard work vs life page section ends*/

/*----------------------------------------------------------------*/

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
        return redirect()->route('growth.section')->with('growthsuccess' , 'Update successfully'); 
    }

/*dashboard Growth page section ends*/

/*-------------------------------------------------------------*/

/*dashboard Benifits page section */

    public function benifitssection(){
        $benifitdata = Benifits::all();
        if(!empty($benifitdata[0]['id'])){
            return view('backend.benifits.benifitsedit', compact('benifitdata'));
        } 
        else{
            return view('backend.benifits.benifitsmain');
        }
    }

/*dashboard work vs life page save data query*/

    public function benifitsseccontent (Request $request){
        $benifittext = new Benifits($request->all());
        $benifittext->save();
        Session::flash('success', 'Page Content updated.');
        return redirect()->route('benifits.section'); 
    }

/*dashboard work vs life page update data query*/ 

    public function benifitssecupdate(Request $request){
        $benifitdata  = Benifits::find($request->benifits_id);
        $benifitdata->update($request->all());
        return redirect()->route('benifits.section')->with('benifitssuccess' , 'Update successfully'); 
    }

/*dashboard Benifits page section ends*/

/*----------------------------------------------------------------*/

/*dashboard Contact page section */

    public function contactsection(){
        $contactdata = Contact::all();
        if(count($contactdata) != 0 ){
            return view('backend.contact.contactmain', compact('contactdata'));
        } 
        else{
            return view('backend.contact.error');
        }
    }
/*Add new contact*/
    public function contactaddnew(){
        return view('backend.contact.contactaddnew');
    }
/*Add new contact photo*/
    public function contactaddnewentry(Request $request){
        request()->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',   
        ]);

        $contact = new Contact($request->all());
        $imageName = time().'.'.request()->photo->getClientOriginalExtension();
        if ($request->hasFile('photo')) {   
            $contact->photo = $imageName;
        }
        $pathimage = base_path().'/images/';
        request()->photo->move($pathimage, $imageName);
        $contact->save();
        return redirect()->route('contact.section')->with('contactadd' , 'Added successfully'); 
    }

    public function contactseccontent (Request $request){
        $contact_id = $_GET['id'];
        $contactdata = Contact::find($contact_id);
        return view('backend.contact.contactedit', compact('contactdata'));
    }

   
/*update contact details*/
    public function contactsecupdate(Request $request){
        request()->validate([
            'photo' => 'image|mimes:jpeg,png,jpg,gif|max:2048', 
        ]);
        $contactdata  = Contact::find($request->contact_id);

        if(!empty($request->photo)){
            $imageName = time().'.'.request()->photo->getClientOriginalExtension();
            $pathimage = base_path().'/images/';
            request()->photo->move($pathimage, $imageName);
        }else{
            $imageName = $request->oldphoto;
        }

        $contactdata->update($request->all());
        if ($request->hasFile('photo')) {   
            $contactdata->photo = $imageName;
            $contactdata->save();
        }
        return redirect()->route('contact.section')->with('contactupdate' , 'Update successfully'); 
    }

/*delete contact details*/
    public function contactdelete(){
        $contact_id = $_GET['id'];
        $detail = Contact::where('id', $contact_id)->delete();
        return redirect()->route('contact.section')->with('contactdlt' , 'Deleted successfully');
    }

/*dashboard Contact page section ends*/

/*----------------------------------------------------------*/

/*dashboard fun page section */

    public function funsection(){
        $fundata = Fun::all();
        $funimages = Funimages::all();
        if(count($fundata) != 0){
            return view('backend.fun.funmain', compact('fundata','funimages'));
        } 
        else{
            return view('backend.fun.error');
        }
    }

/*Add new*/
    public function funaddnew(){
        return view('backend.fun.funaddnew');
    }

    public function funaddnewentry(Request $request){
        $arrfirst = $request->event_gallery;
        request()->validate([
        'event_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:20048',
        ]);

        /*entry table fun*/

        $fun = new Fun();
        $fun->event_name = $request->event_name;
        $imageName = time().'.'.request()->event_image->getClientOriginalExtension();
           $pathimage = base_path().'/images/';
        request()->event_image->move($pathimage, $imageName);
         if ($request->hasFile('event_image')) {   
            $fun->event_image = $imageName;
        }
        $fun->save();

        /*entry table funimages*/
        foreach($arrfirst as $gallery )
        {
        $extension = $gallery->getClientOriginalExtension();
        if($extension == "jpg" || $extension == "jpeg" || $extension == "png" || $extension == "JPG" || $extension == "JPEG" || $extension == "PNG" ){
            $str = str_random(3);
            $fungallery = new Funimages();
            $fungallery->event_id = $fun->id;
            $imagegalName = time().'_'.$str.'.'.$gallery->getClientOriginalExtension();
              $pathimage = base_path().'/images/';
            $gallery->move($pathimage, $imagegalName);
             if ($request->hasFile('event_gallery')) {   
                $fungallery->event_gallery = $imagegalName;
            }
            $fungallery->save(); 

            }else{

            return back()->with('fungaledit' , 'Image formatt Should be jpeg, jpg, png');
            }
        }   
        return redirect()->route('fun.section')->with('funadd' , 'Added successfully');; 
    }

/*delete fun details*/

    public function fundelete(){
        $fun_id = $_GET['id'];
        /*delete event cover photo*/
        $funcover = Fun::where('id', $fun_id)->get();
        foreach($funcover as $funcoverimg){
            //dd($funcoverimg);
           $imagename =  $funcoverimg['event_image'];
            $path = base_path().'/images/'. $imagename;
            //$path = '/images/' . $imagename;
             unlink($path);
        }

        $detail = Fun::where('id', $fun_id)->delete();
        /*delete full gallery*/
        $funimages = Funimages::where('event_id', $fun_id)->get();
        foreach($funimages as $imgsfun){
           $imagename =  $imgsfun['event_gallery'];
           $path = base_path().'/images/'. $imagename;
            //$path = '/images/' . $imagename;
             unlink($path);
        }
        $detail = Funimages::where('event_id', $fun_id)->delete();


        return redirect()->route('fun.section')->with('fundlt' , 'delete successfully');
    }


/*Update Fun details*/
    public function funcontent (Request $request, $id){
        $funup_id = $id;
        $fundata = Fun::find($funup_id);
        $funimages = Funimages::all();
        return view('backend.fun.funedit', compact('fundata','funimages'));
    }

    public function funupdate(Request $request){
        request()->validate([
            'event_image' => 'image|mimes:jpeg,png,jpg,gif|max:20048',
        ]);
        $fundata  = Fun::find($request->fun_id);
        if(!empty($request->event_image)){
            $imageName = time().'.'.request()->event_image->getClientOriginalExtension();
            $pathimage = base_path().'/images/';
            request()->event_image->move($pathimage, $imageName);
        }else{
            $imageName = $request->oldphoto;
        }

        $fundata->update($request->all());
        if ($request->hasFile('event_image')) 
        {   
            $fundata->event_image = $imageName;
            $fundata->save();
        }
        $fun_id = $request->fun_id;

        if(!empty($request->event_gallery))
        {
            $arrfirstupdate = $request->event_gallery;
            
            foreach($arrfirstupdate as $gallery )
            {
            $extension = $gallery->getClientOriginalExtension();
            if($extension == "jpg" || $extension == "jpeg" || $extension == "png" || $extension == "JPG" || $extension == "JPEG" || $extension == "PNG" ){
                $str = str_random(3);
                $fungallery = new Funimages();
                $fungallery->event_id = $fun_id;
                $imagegalName = time().'_'.$str.'.'.$gallery->getClientOriginalExtension();
                // dd( $imagegalName);
                $pathimage = base_path().'/images/';
                $gallery->move($pathimage, $imagegalName);
                if ($request->hasFile('event_gallery')) 
                {   
                    $fungallery->event_gallery = $imagegalName;
                }
                $fungallery->save();  
            
            }else{

                return back()->with('fungaledit' , 'Image formatt Should be jpeg, jpg, png');
            }

            }
        }else{
            $arrfirstupdate = $request->oldgallery;
        }        
        return back()->with('funupdate' , 'Update successfully');
    }

/*Delete fun-gallery details*/

    public function fungallerydelete(){
        $fungal_id = $_GET['gid'];
        $fungaldlt = Funimages::where('id', $fungal_id)->get();
        
        foreach($fungaldlt as $fungaldelete){
            $imgname = $fungaldelete['event_gallery'];
            //$path = '/images/' . $imgname;
            $path = base_path().'/images/'. $imagename;
             unlink($path);
        }
        $detail = Funimages::where('id', $fungal_id)->delete();
        
        return back()->with('fungalimgdlt' , 'Gallery Image deleted successfully');
    }

/*dashboard Fun page section ends*/

/*----------------------------------------------------------------*/
}


