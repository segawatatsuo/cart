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
        Schema::create('add_prints', function (Blueprint $table) {
            $table->id();
            $table->string('part_name')->nullable()->comment('プリント箇所');
            $table->string('image')->nullable()->comment('イメージ画像');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('add_prints');
    }
};
