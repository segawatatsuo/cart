<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\Mail;


class CompanyController extends Controller
{
    public function info()
    {
        $company = Company::find(1);
        return view('company.info',compact('company'));
    }

    public function info_store(Request $request)
    {
        $company = Company::find(1);
        if($company==null){
            $company = new Company();
        }

        $company->fill($request->all())->save();
        $company = Company::find(1);
        return view('company.info',compact('company'));
    }

    public function mail()
    {
        $mail = Mail::find(1);
        return view('company.mail',compact('mail'));
    }

    //更新保存
    public function mail_update(Request $request)
    {
        $mail = Mail::find(1);
        $mail->fill($request->all())->save();
        
        return view('company.mail',compact('mail'));
    }

}
