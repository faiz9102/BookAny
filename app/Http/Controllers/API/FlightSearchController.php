<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Flight;
use App\Http\Resources\FlightResource;

class FlightSearchController extends Controller
{
    public function search(Request $request)
    {
        $request->validate([
            'from_city'=>'required|string',
            'to_city'=>'required|string',
            'departure_date'=>'required|date',
            'class'=>'required|string',
            'number_of_travelers'=>'nullable|integer|min:1'
        ]);

        $travellers = $request->number_of_travelers ?? 1;

        // Map main class to all fare variations
        $fareClassMapping = [
            'economy'=>['economy','flexi','xtra'],
            'business'=>['business','business_flexi','business_xtra'],
            'first'=>['first','first_xtra']
        ];

        $allowedFares = $fareClassMapping[strtolower($request->class)] ?? [$request->class];

        $flights = Flight::where('from_city',$request->from_city)
            ->where('to_city',$request->to_city)
            ->where('departure_date',$request->departure_date)
            // Only include flights that have at least one fare with enough seats
            ->whereHas('fares', function($q) use ($allowedFares, $travellers) {
                $q->whereIn('class', $allowedFares)
                  ->where('available_seats', '>=', $travellers);
            })
            ->with(['airline','fares'=>function($q) use ($allowedFares, $travellers){
                $q->whereIn('class', $allowedFares)
                  ->where('available_seats', '>=', $travellers);
            }])
            ->get();

        return FlightResource::collection($flights);
    }
}
