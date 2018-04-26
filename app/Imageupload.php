<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imageupload extends Model
{
    //
    static function imageupload($image, $user)
    {
    	
    	$pathimage = base_path().'/images/';
    	//$pathimage1 = base_path();
    	//dd($pathimage1);
        $imageName = time().'.'. $image->getClientOriginalExtension();
        $image->move($pathimage, $imageName);
        $user->image = $imageName;

    }
}
