<?php

use App\Http\Controllers\API\FlightSearchController;
use App\Http\Controllers\API\BookingController;
use App\Http\Controllers\API\FlightCreateController;

Route::post('/flights/search',[FlightSearchController::class,'search']);
Route::post('/ticket/select',[BookingController::class,'selectTicket']);
Route::post('/flights/create', [FlightCreateController::class, 'store']);
Route::post('/fares/create', [FlightCreateController::class, 'storeFare']);
