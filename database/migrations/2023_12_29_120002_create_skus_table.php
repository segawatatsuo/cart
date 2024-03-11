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
            $table->string("item_number")->comment('商品番号');
            $table->string("maker_item_number")->comment('メーカーの商品番号');
            $table->string("maker_color_number")->comment('メーカーの色番号');
            $table->string("size")->comment('サイズ');
            $table->string("color_display_name")->comment('顧客用色表示名');
            $table->string("image_color_name")->comment('色名英語で');
            $table->string("image_name")->comment('画像ファイル名');
            $table->string("stock")->nullable()->comment('在庫数');
            $table->string("maker")->nullable()->comment('メーカー');
            $table->string("purchase")->nullable()->comment("仕入れ先");
            $table->integer("price")->nullable()->comment('販売価格');
            $table->string("maker_price")->nullable()->comment('メーカー希望小売価格	');
            $table->string('purchase_price')->nullable()->comment('仕入れ価格');
            $table->string("jan")->nullable()->comment("janコード");
            $table->string("country")->nullable()->comment("原産国");
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
