<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FlightFare extends Model
{
    protected $fillable = [
        'flight_id','class','price','available_seats',
        'checked_bag_kg','meal_included','cancellation_allowed','modification_allowed'
    ];

    public function flight() {
        return $this->belongsTo(Flight::class);
    }
}

