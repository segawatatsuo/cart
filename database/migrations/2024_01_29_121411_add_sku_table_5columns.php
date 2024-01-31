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
        Schema::table('skus', function (Blueprint $table) {
            $table->string('maker')->comment('メーカー')->nullable()->after('stock');
            $table->string('purchase')->comment('仕入れ先')->nullable()->after('maker');
            $table->integer('price')->comment('販売価格')->after('purchase');
            $table->integer('maker_price')->comment('メーカー希望小売価格')->nullable()->after('price');
            $table->integer('purchase_price')->comment('仕入れ価格')->nullable()->after('maker_price');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('skus', function (Blueprint $table) {
            $table->dropColumn('maker');
            $table->dropColumn('purchase');
            $table->dropColumn('price');
            $table->dropColumn('maker_price');
            $table->dropColumn('purchase_price');
        });
    }
};
