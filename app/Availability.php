<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Availability extends Model
{
    //
    protected $fillable = [
        'user_id', 'date', 'time', 'available'
    ];
}
