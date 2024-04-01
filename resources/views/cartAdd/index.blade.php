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
                    <th class="goods-page-image">画像</th>
                    <th class="goods-page-description">商品内容</th>
                    <th class="goods-page-ref-no">商品番号</th>
                    <th class="goods-page-quantity">数量</th>
                    <th class="goods-page-price">価格</th>
                    <th class="goods-page-total" colspan="2">合計</th>
                  </tr>
                  <tr>
                    <td class="goods-page-image">
                      <a href="javascript:;"><img src="./image/top_page/bag/1.jpg" alt=""></a>
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
                        <input id="product-quantity" type="text" value="1" readonly class="form-control input-sm">
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
                </table>
              </div>

              <div class="shopping-total">
                <ul>
                  <li>
                    <em>小計</em>
                    <strong class="price"><span>$</span>47.00</strong>
                  </li>
                  <li>
                    <em>手数料</em>
                    <strong class="price"><span>$</span>3.00</strong>
                  </li>
                  <li class="shopping-total-price">
                    <em>総合計</em>
                    <strong class="price"><span>$</span>50.00</strong>
                  </li>
                </ul>
              </div>
            </div>
            <button class="btn btn-default" type="submit">買い物を続ける <i class="fa fa-shopping-cart"></i></button>
            <button class="btn btn-primary" type="submit">注文する <i class="fa fa-check"></i></button>
          </div>
        </div>
        <!-- END CONTENT -->
      </div>
      <!-- END SIDEBAR & CONTENT -->
    </div>
    </div>

  </main>

@include('parts.footer')
