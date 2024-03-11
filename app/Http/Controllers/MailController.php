<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Mail\ThanksMail;

class MailController extends Controller
{
    public function send(Request $request)
    {
        $name = 'テスト 瀬川';
        $email = 'segawa@lookingfor.jp';

        Mail::send(new ThanksMail($name, $email));

        return view('welcome');
    }
}