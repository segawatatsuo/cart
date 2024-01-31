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
            $table->string('JAN')->comment('JANコード')->nullable()->after('purchase_price');
            $table->string('country')->comment('原産国')->nullable()->after('JAN');
            $table->string('classification')->comment('大分類')->nullable()->after('country');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('skus', function (Blueprint $table) {
            $table->dropColumn('JAN');
            $table->dropColumn('country');
            $table->dropColumn('classification');

        });
    }
};
