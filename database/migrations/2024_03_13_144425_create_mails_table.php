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
        Schema::create('mails', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title[thankyou]')->nullable()->comment('サンキューメール（自動送信）');
            $table->string('header[thankyou]')->nullable()->comment('ヘッダ');
            $table->string('footer[thankyou]')->nullable()->comment('フッタ');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mails');
    }
};
