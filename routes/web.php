<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

//Welcome
Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

//Booking
Route::get('/booking', function () {
    return Inertia::render('booking', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Booking');

//Search
Route::get('/search', function () {
    return Inertia::render('search', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Search');

//Thank-You
Route::get('/thank-you-for-booking', function () {
    return Inertia::render('thank-you-for-booking', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Thanks');

//account
Route::get('/account', function () {
    return Inertia::render('account', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Account');


//bookingmanagement
Route::get('/bookingmanagement', function () {
    return Inertia::render('bookingmanagement', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('BookingManagement');

//Notification&alert
Route::get('/notification-&-alert', function () {
    return Inertia::render('notification-&-alert', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('notification-&-alert');


//Personalinfo
Route::get('/personal-info', function () {
    return Inertia::render('personal-info', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('personal-info');

//Security-Setting
Route::get('/security-setting', function () {
    return Inertia::render('security-setting', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Security-Setting');

//Special-Request
Route::get('/special-request', function () {
    return Inertia::render('special-request', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Special-Request');

//Travel-Document
Route::get('/travel-document', function () {
    return Inertia::render('travel-document', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Travel-Document');

//Loyality-Program
Route::get('/loyality-program', function () {
    return Inertia::render('loyality-program', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Loyality-Program');

//Flyer-Wallet
Route::get('/flyer-wallet', function () {
    return Inertia::render('flyer-wallet', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Flyer-Wallet');

//Add-Funds
Route::get('/add-funds', function () {
    return Inertia::render('add-funds', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Add-Funds');

//Withdraw
Route::get('/withdraw', function () {
    return Inertia::render('withdraw', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Withdraw');

//Review
Route::get('/review', function () {
    return Inertia::render('review', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Review');

//Account-Layout
Route::get('/account-layout', function () {
    return Inertia::render('account-layout', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('Account-Layout');












Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
