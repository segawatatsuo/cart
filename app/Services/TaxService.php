<?php


namespace App\Services;


use Carbon\Carbon;

class TaxService
{
    /**
     * デフォルトの消費税率
     */
    private const DEFAULT_RATE = 10;

    /**
     * 消費税率を日付指定して取得
     *
     * @param Carbon $targetDate
     * @return int
     */
    public static function getRateByDate(Carbon $targetDate)
    {
        $rates = config('constants.tax.rates');
        $invertedRates = array_reverse($rates);
        foreach ($invertedRates as $date => $rate) {
            $rateDate = new Carbon($date);
            if ($targetDate->gte($rateDate)) { //gte対象の数値以上かどうか(>=)
                return $rate;
            }
        }
        return self::DEFAULT_RATE;
    }
}
