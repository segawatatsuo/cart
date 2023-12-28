<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePulldownDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pulldown_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name')->nullable()->comment('プルダウン内容名');
            $table->integer('price')->nullable()->comment('プルダウン価格');
            $table->bigInteger('pulldown_id')->unsigned();
            $table->foreign('pulldown_id')->references('id')->on('pulldowns')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pulldown_details');
    }
}
