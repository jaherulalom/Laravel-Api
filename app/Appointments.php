<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointments extends Model
{
    //
    protected $fillable = [
        'user_id','service_name', 'date', 'time'
    ];
}
