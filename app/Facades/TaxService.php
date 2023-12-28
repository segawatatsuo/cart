<?php
namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class TaxService extends Facade
{
    protected static function getFacadeAccessor() {
        return 'TaxService';
    }
}