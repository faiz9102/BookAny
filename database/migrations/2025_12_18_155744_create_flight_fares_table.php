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
Schema::create('flight_fares', function (Blueprint $table) {
    $table->id();
    $table->foreignId('flight_id')->constrained()->cascadeOnDelete();
    $table->enum('class',['economy','flexi','xtra']);
    $table->decimal('price',10,2);
    $table->integer('available_seats');
    $table->integer('checked_bag_kg')->default(20);
    $table->boolean('meal_included')->default(true);
    $table->boolean('cancellation_allowed')->default(false);
    $table->boolean('modification_allowed')->default(false);
    $table->timestamps();
});


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('flight_fares');
    }
};
