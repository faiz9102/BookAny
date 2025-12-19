<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('flights', function (Blueprint $table) {
    $table->id();
    $table->foreignId('airline_id')->constrained()->cascadeOnDelete();
    $table->string('from_city');
    $table->string('to_city');
    $table->date('departure_date');
    $table->time('departure_time');
    $table->time('arrival_time');
    $table->integer('duration_minutes');
    $table->boolean('non_stop')->default(true);
    $table->timestamps();
});


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('flights');
    }
};
