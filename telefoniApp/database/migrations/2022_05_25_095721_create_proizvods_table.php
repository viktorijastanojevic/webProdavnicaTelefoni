<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProizvodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proizvods', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->double('price');
            $table->integer('amount')->default(0);
            $table->foreignId('category');
            $table->string('image');
            $table->integer('uporedi')->default(0);
            $table->string('tezina')->default('200');
            $table->string('ekran')->default('5.8');
            $table->string('memorija')->default('4');
            $table->string('baterija')->default('5000');
            $table->string('kamera')->default('13');
            
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
        Schema::dropIfExists('proizvods');
    }
}
