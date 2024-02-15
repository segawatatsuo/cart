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
        Schema::table('items', function (Blueprint $table) {
            $table->dropColumn('size');
            $table->dropColumn('color');
            $table->dropColumn('price');
            $table->dropColumn('price_in_tax');
            $table->dropColumn('maker_price');
            $table->dropColumn('purchase_price');
            $table->dropColumn('purchase_price_in_tax');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('items', function (Blueprint $table) {
            $table->string('size');
            $table->string('color');
            $table->string('price');
            $table->string('price_in_tax');
            $table->string('maker_price');
            $table->string('purchase_price');
            $table->string('purchase_price_in_tax');
        });
    }
};
