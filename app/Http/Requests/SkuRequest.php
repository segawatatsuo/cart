<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SkuRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'item_number' => 'required',
            'maker_item_number' => 'required',
            'maker_color_number' => 'required',
            'size' => 'required',
            'color_display_name' => 'required',
            //'stock' => 'required',
            'maker' => 'required',
            'purchase' => 'required',
            'price' => 'required',
            'maker_price' => 'required',
            'purchase_price' => 'required',
            'jan' => 'required',
            //'country' => 'required',
            //'classification' => 'required',
          ];
    }
    /**
     * 項目名
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'item_number' => '商品番号',
            'maker_item_number' => 'メーカー商品番号',
            'maker_color_number' => 'メーカー色番号',
            'size' => 'サイズ',
            'color_display_name' => '顧客表示用色名',
            //'stock' => '在庫数',
            'maker' => 'メーカー',
            'purchase' => '	仕入れ先',
            'price' => '販売価格',
            'maker_price' => 'メーカー希望小売価格	',
            'purchase_price' => '仕入れ価格',
            'jan' => 'JANコード',
            //'country' => '原産国',
            //'classification' => '大分類',  
        ];
    }

    /**
     * エラーメッセージ
     *
     * @return array
     */
    public function messages() {
        return [
            'item_number.required' => ':attributeは必須項目です。',
            'maker_item_number.required' => ':attributeは必須項目です。',
            'maker_color_number.required' => ':attributeは必須項目です。',
            'size.required' => ':attributeは必須項目です。',
            'color_display_name.required' => ':attributeは必須項目です。',
            //'stock.required' => ':attributeは必須項目です。',
            'maker.required' => ':attributeは必須項目です。',
            'purchase.required' => ':attributeは必須項目です。',
            'price.required' => ':attributeは必須項目です。',
            'maker_price.required' => ':attributeは必須項目です。',
            'purchase_price.required' => ':attributeは必須項目です。',
            'jan.required' => ':attributeは必須項目です。',
            //'country.required' => ':attributeは必須項目です。',
            //'classification.required' => ':attributeは必須項目です。',
        ];
    }
}
