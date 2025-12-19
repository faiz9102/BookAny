<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    protected $fillable = [
        'airline_id','from_city','to_city',
        'departure_date','departure_time','arrival_time',
        'duration_minutes','non_stop'
    ];

    public function airline() {
        return $this->belongsTo(Airline::class);
    }

    public function fares() {
        return $this->hasMany(FlightFare::class);
    }
}
