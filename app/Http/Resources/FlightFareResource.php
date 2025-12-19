<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FlightFareResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'fare_id' => $this->id,
            'class' => strtoupper($this->class),
            'price' => number_format($this->price,2),
            'bags' => $this->checked_bag_kg.' KG',
            'meal' => $this->meal_included ? 'Included' : 'Not Included',
            'cancellation' => $this->cancellation_allowed ? 'Allowed' : 'Fee Apply',
            'modification' => $this->modification_allowed ? 'Allowed' : 'Fee Apply',
            'available_seats' => $this->available_seats
        ];
    }
}
