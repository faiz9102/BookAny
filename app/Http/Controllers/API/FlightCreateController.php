<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// ✅ Correct model imports
use App\Models\Flight;
use App\Models\Airline;
use App\Models\FlightFare;

// ✅ Resources
use App\Http\Resources\FlightResource;
use App\Http\Resources\FlightFareResource;

class FlightCreateController extends Controller
{
    // ✈ Create a flight with airline
    public function store(Request $request)
{
    $request->validate([
        'airline_name'=>'required|string',
        'airline_code'=>'required|string',
        'from_city'=>'required|string',
        'to_city'=>'required|string',
        'departure_date'=>'required|date',
        'departure_time'=>'required',
        'arrival_time'=>'required',
        'duration_minutes'=>'required|integer',
        'non_stop'=>'required|boolean',
    ]);

    $airline = Airline::firstOrCreate(
        ['code'=>$request->airline_code],
        ['name'=>$request->airline_name]
    );

    $flight = Flight::create([
        'airline_id'=>$airline->id,
        'from_city'=>$request->from_city,
        'to_city'=>$request->to_city,
        'departure_date'=>$request->departure_date,
        'departure_time'=>$request->departure_time,
        'arrival_time'=>$request->arrival_time,
        'duration_minutes'=>$request->duration_minutes,
        'non_stop'=>$request->non_stop,
    ]);

    return response()->json(['status'=>true,'flight_id'=>$flight->id]);
}

public function storeFare(Request $request)
{
    $request->validate([
        'flight_id'=>'required|exists:flights,id',
        'class'=>'required|in:economy,flexi,xtra',
        'price'=>'required|numeric',
        'available_seats'=>'required|integer',
        'checked_bag_kg'=>'required|integer',
        'meal_included'=>'required|boolean',
        'cancellation_allowed'=>'required|boolean',
        'modification_allowed'=>'required|boolean',
    ]);

    $fare = FlightFare::create($request->all());

    return response()->json(['status'=>true,'fare_id'=>$fare->id]);
}
}