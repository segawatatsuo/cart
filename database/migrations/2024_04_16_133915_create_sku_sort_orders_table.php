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
        Schema::create('sku_sort_orders', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("size")->nullable()->comment("skuテーブルのsizeと一致");
            $table->integer("order")->nullable()->comment("並び順");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sku_sort_orders');
    }
};
