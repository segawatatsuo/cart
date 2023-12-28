<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePulldownRequest extends FormRequest
{
    /**
     *  リダイレクト先の指定 
     *  $redirect       = '[Redirect url]'
     *  $redirectRoute  = '[Redirect Routing Name]'
     *  $redirectAction = '[Redirect to Controller Action]'
     * 
     *  動作するfunction >> 継承元の FormRequest::getRedirectUrl()
     * 
     */
    protected $redirect = '/pulldown';
    protected $redirectRoute = 'pulldown.index';
    protected $redirectAction = '';

    /**
     * Determine if the user is authorized to make this request.
     * ユーザーがこの要求を行うことを許可されているかどうかを判別
     *
     * @return bool
     */
    public function authorize()
    {
        // falseを返すと 403: This action UnAuthorized が返される
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * リクエストに適用される検証ルールを定義:取得
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'inside_name' => ['required'],
            'attribution' => ['required'],
            'ingredients.*' => ['distinct'],
        ];
    }

    /**
     * 定義済みバリデーションルールのエラーメッセージ取得
     *
     * @return array
     */
    public function messages()
    {
        return [
            'required' => ':attributeは必須です',
            'name.string' => ':attributeは不正な値です',
            'name.max' => ':attributeは255文字以下です',
        ];
    }

    /**
     * バリデーションエラーのカスタム属性の取得
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'name' => 'プルダウン名',
            'inside_name' => '管理名',
            'attribution' => '帰属先',
        ];
    }

    /**@Override FormRequest->validationData() : array
     * >> バリデーションの直前に前処理を挟む場合
     * 
     * @return array
     */
    public function validationData()
    {
        $data = $this->all();

        // 前処理：例えば全角英数字を半角に変換する
        // if (isset($data['name']))
        //    $data['name'] = mb_convert_kana($data['name'], 'a');

        return $data;
    }
}
