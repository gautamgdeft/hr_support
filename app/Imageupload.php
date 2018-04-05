<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imageupload extends Model
{
    //
    static function imageupload($image, $user)
    {

        $imageName = time().'.'. $image->getClientOriginalExtension();
        $image->move(public_path('images'), $imageName);
        $user->image = $imageName;

    }
}
