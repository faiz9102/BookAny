<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FlightResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'flight_id' => $this->id,
            'airline' => [
                'name' => $this->airline->name,
                'code' => $this->airline->code,
            ],
            'route' => [
                'from' => $this->from_city,
                'to' => $this->to_city,
            ],
            'departure_time' => $this->departure_time,
            'arrival_time' => $this->arrival_time,
            'duration' => $this->duration_minutes.' min',
            'non_stop' => $this->non_stop,
            // Show all fares for this flight in the selected class group
            'fares' => \App\Http\Resources\FlightFareResource::collection($this->fares)
        ];
    }
}
