<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\FlightFare;
use App\Http\Resources\FlightFareResource;

class BookingController extends Controller
{
    public function selectTicket(Request $request)
{
    $request->validate([
        'fare_id'=>'required|exists:flight_fares,id',
        'seats'=>'required|integer|min:1'
    ]);

    $fare = FlightFare::find($request->fare_id);

    if($fare->available_seats < $request->seats){
        return response()->json([
            'status'=>false,
            'message'=>'Selected class seats not available'
        ],400);
    }

    // Optional: seat reservation logic
    // $fare->available_seats -= $request->seats;
    // $fare->save();

    return response()->json([
        'status'=>true,
        'message'=>'Seat available',
        'ticket'=>new FlightFareResource($fare)
    ]);
}

}
