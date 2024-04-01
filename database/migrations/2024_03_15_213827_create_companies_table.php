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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("company_name")->nullable()->comment("会社名");
            $table->string("zip_code")->nullable()->comment("郵便番号");
            $table->string("address1")->nullable()->comment("住所1");
            $table->string("address2")->nullable()->comment("住所2");
            $table->string("tel_number")->nullable()->comment("電話番号");
            $table->string("fax_number")->nullable()->comment("FAX");
            $table->string("order_mail")->nullable()->comment("注文メール");
            $table->string("inquiry_mail")->nullable()->comment("問い合わせメール");
            $table->string("sender_mail")->nullable()->comment("送信元メールアドレス");
            $table->string("error_mail")->nullable()->comment("エラーメール");
            $table->string("copyright")->nullable()->comment("コピーライト");
            $table->string("business_registration_number")->nullable()->comment("事業者登録番号");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
