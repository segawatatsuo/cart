<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colors', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name')->nullable()->comment('画像名');
            $table->string('path')->nullable()->comment('画像パス');
            $table->integer('price')->nullable()->comment('価格');
            $table->string('attribution')->nullable()->comment('帰属');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colors');
    }
}
