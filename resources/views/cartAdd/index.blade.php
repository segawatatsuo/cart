@include('parts.header')

<main>
    <div class="container py-3">
      <div class="section-header" style="padding-top: 0px;">
        <!-- BEGIN CONTENT -->
        <div class="col-md-12 col-sm-12">
          <!--<h1>ショッピングカート</h1>-->
            <h2 class="section-header__title">
              <span class="icon-market icon-market_om section-header__icon"></span>
              <span class="section-ttl">ショッピングカート</span>
            </h2>

          <div class="goods-page">
            <div class="goods-data clearfix">
              <div class="table-wrapper-responsive">
                <table summary="Shopping cart">
                  <tr>
                    <th class="goods-page-image">&nbsp;</th>
                    <th class="goods-page-description">商品内容</th>
                    <!--<th class="goods-page-ref-no">商品番号</th>-->
                    <th class="goods-page-quantity">数量</th>
                    <th class="goods-page-price">小計</th>
                    <th class="goods-page-total" colspan="2">削除</th>
                  </tr>

                  @foreach ( $cartCollection as $cart ) 
                  <tr class="cart">
                    <td class="goods-page-image">
                      <a href="javascript:;">
                        <img src="{{ asset('storage/image/detail')."/".$cart->attributes[5]."/".$cart->id }}" alt="">
                      </a>
                    </td>
                    <td class="goods-page-description">
                      <!--<h3><a href="javascript:;">Cool green dress with red bell</a></h3>-->
                      <p><strong>{{ $cart->name }}</strong></p>
                      <div style="width: 80%">
                      <em>
                        色：{{ $cart->attributes[0]["アイテムカラー"] }}<br>
                        {{ $cart->attributes[3] }}<br>
                        @foreach ( $cart->attributes[1] as $key=>$val )
                          {{ $key }}:{{ $val }}
                        @endforeach
                      </em>
                      </div>
                      
                    </td>
                    <!--
                    <td class="goods-page-ref-no">
                      {{ $cart->id }}
                    </td>
                  -->

                    <td class="goods-page-quantity">
                      <div class="product-quantity">
                        <input id="product-quantity" type="text" value="{{ $cart->attributes[2]["数量"] }}" readonly class="form-control input-sm">
                      </div>
                    </td>
                    <!--
                    <td class="goods-page-price">
                      <strong><span>¥</span>
                        @if(isset( $cart->attributes[6]) and $cart->attributes[6]!="" )
                          {{ round($cart->attributes[6]) }}
                        @endif
                      </strong>
                    </td>
                  -->
                    <td class="goods-page-total"><!--小計-->
                      <strong><span>¥</span>{{ $cart->attributes[2]["合計"] }}</strong>
                    </td>
                    <td class="del-goods-col">
                      <a class="del-goods" href="{{ asset('/cartAdd/delete') }}?id={{ $cart->id }}" onclick="return confirm('カートから削除します')" data-sku="{{ $cart->id }}">&nbsp;</a>
                    </td>
                  </tr>
                  @endforeach

                  <!--
                  <tr>
                    <td class="goods-page-image">
                      <a href="javascript:;"><img src="./image/top_page/cap/1.jpg" alt="Berry Lace Dress"></a>
                    </td>
                    <td class="goods-page-description">
                      <h3><a href="javascript:;">Cool green dress with red bell</a></h3>
                      <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                      <em>More info is here</em>
                    </td>
                    <td class="goods-page-ref-no">
                      javc2133
                    </td>
                    <td class="goods-page-quantity">
                      <div class="product-quantity">
                        <input id="product-quantity2" type="text" value="1" readonly class="form-control input-sm">
                      </div>
                    </td>
                    <td class="goods-page-price">
                      <strong><span>$</span>47.00</strong>
                    </td>
                    <td class="goods-page-total">
                      <strong><span>$</span>47.00</strong>
                    </td>
                    <td class="del-goods-col">
                      <a class="del-goods" href="javascript:;">&nbsp;</a>
                    </td>
                  </tr>
                -->
                </table>
              </div>

              <div class="shopping-total">
                <ul>
                  <li>
                    <em>小計</em>
                    <strong class="price"><span>¥</span>{{ number_format($total) }}</strong>
                  </li>
                  <li>
                    <em>送料</em>
                    <strong class="price"><span>¥</span>{{ number_format($postage) }}</strong>
                  </li>

                  <li>
                    <em>消費税</em>
                    <strong class="price"><span>¥</span>{{ number_format($tax) }}</strong>
                  </li>
                  <li class="shopping-total-price">
                    <em>総合計</em>
                    <strong class="price"><span>¥</span>{{ number_format($total_add_tax) }}</strong>
                  </li>
                </ul>
              </div>
            </div>
            <button class="btn btn-default" type="submit">買い物を続ける <i class="fa fa-shopping-cart"></i></button>
            
            <form method="POST" action="{{ asset('/cartAdd/address') }}">
              @csrf
              <button class="btn btn-primary" type="submit">注文する<i class="fa fa-check"></i></button>
            </form>
          </div>
        </div>
        <!-- END CONTENT -->
      </div>
      <!-- END SIDEBAR & CONTENT -->
    </div>
    </div>

  </main>

@include('parts.footer')
