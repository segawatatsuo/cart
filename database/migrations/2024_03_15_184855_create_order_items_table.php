<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('item_id')->comment('商品番号');
            $table->string('item_name')->comment('商品名');
            $table->string('price')->comment('価格');
            $table->string('quantity')->comment('数量');
            $table->text('options')->comment('オプション');
            $table->string('tax')->comment('税金');
            $table->string('tax_rate')->comment('税率');
            $table->string('order_id')->comment('orderID');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
