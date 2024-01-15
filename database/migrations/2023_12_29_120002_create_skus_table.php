<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSkusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('skus', function (Blueprint $table) {
            $table->id();
            $table->string("maker_item_number")->comment('メーカーの商品番号');
            $table->string("maker_color_number")->comment('メーカーの色番号');
            $table->string("size")->comment('サイズ');
            $table->string("color_display_name")->comment('顧客用色表示名');
            $table->integer("stock")->nullable()->comment('在庫数');
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
        Schema::dropIfExists('skus');
    }
}
