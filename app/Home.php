<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    //
    protected $fillable = [
    	'columnleft', 'columncenter', 'columnright',
    ];
}
