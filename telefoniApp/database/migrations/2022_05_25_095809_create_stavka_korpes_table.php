<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStavkaKorpesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stavka_korpes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('korpa_id');
            $table->foreignId('proizvod_id');
            $table->foreignId('user_id');
          
           
           
            $table->integer('kolicina');
            $table->double('cena')->default(random_int(100,15000));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stavka_korpes');
    }
}
