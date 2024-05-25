@include('parts.header')

<main>
    <div class="container py-3">
      <div class="section-header" style="padding-top: 0px;">
        <!-- BEGIN CONTENT -->
        <div class="col-md-12 col-sm-12">
          <!--<h1>ショッピングカート</h1>-->
            <h2 class="section-header__title">
              <span class="icon-market icon-market_om section-header__icon"></span>
              <span class="section-ttl">特定商取引に関する法律に基づく表記</span>
            </h2>

          <div class="goods-page">
            <div class="goods-data clearfix">
              <div class="table-wrapper-responsive">
                <table>
                  <tr>
                    <th style="width: 20%;" class="f14">販売業者</th>
                    <td class="f14">{{ isset($data->distributor) ? $data->distributor : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">販売責任者</th>
                    <td class="f14">{{ isset($data->manager) ? $data->manager : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">所在地</th>
                    <td class="f14">{{ isset($data->location) ? $data->location :'' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">屋号</th>
                    <td class="f14">{{ isset($data->trade_name) ? $data->trade_name : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">電話番号</th>
                    <td class="f14">{{ isset($data->tel) ? $data->tel : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">FAX番号</th>
                    <td class="f14">{{ isset($data->fax) ? $data->fax : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">メールアドレス</th>
                    <td class="f14">{{ isset($data->email) ? $data->email : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">URL</th>
                    <td class="f14">{{ isset($data->url) ? $data->url : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">配送方法</th>
                    <td class="f14">{{ isset($data->shipping_method) ? $data->shipping_method : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">商品代金以外の必要料金</th>
                    <td class="f14">{{ isset($data->necessary_charges) ? $data->necessary_charges : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">申込の有効期限</th>
                    <td class="f14">{{ isset($data->expiration_date) ? $data->expiration_date : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">不良品</th>
                    <td class="f14">{{ isset($data->defective_product) ? $data->defective_product : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">販売数量</th>
                    <td class="f14">{{ isset($data->sales_quantity) ? $data->sales_quantity : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">引き渡し時期</th>
                    <td class="f14">{{ isset($data->delivery_time) ? $data->delivery_time : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">お支払い方法 ( {{  isset($data->payment_method_name1) ? $data->payment_method_name1 : '' }} )</th>
                    <td class="f14">{{ isset($data->payment_method1) ? $data->payment_method1 : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">お支払い方法 ( {{ isset($data->payment_method_name2) ? $data->payment_method_name2 : '' }} )</th>
                    <td class="f14">{{ isset($data->payment_method2) ? $data->payment_method2 : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">お支払い方法 ( {{ isset($data->payment_method_name3) ? $data->payment_method_name3 : '' }} )</th>
                    <td class="f14">{{ isset($data->payment_method3) ? $data->payment_method3 : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">お支払い期限</th>
                    <td class="f14">{{ isset($data->payment_deadline) ? $data->payment_deadline : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">返品期限</th>
                    <td class="f14">{{ isset($data->return_period) ? $data->return_period : '' }}</td>
                  </tr>
                  <tr>
                    <th class="f14">返品送料</th>
                    <td class="f14">{{ isset($data->return_shipping_fee) ? $data->return_shipping_fee : '' }}</td>
                  </tr>

                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- END CONTENT -->
      </div>
      <!-- END SIDEBAR & CONTENT -->
    </div>
    </div>

  </main>

@include('parts.footer')
