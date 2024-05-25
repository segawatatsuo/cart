@include('parts.header')

<main>
    <div class="container py-3">
      <div class="section-header" style="padding-top: 0px;">
        <!-- BEGIN CONTENT -->
        <div class="col-md-12 col-sm-12">
          <!--<h1>ショッピングカート</h1>-->
            <h2 class="section-header__title">
              <span class="icon-market icon-market_om section-header__icon"></span>
              <span class="section-ttl">プライバシーポリシー（個人情報保護方針）</span>
            </h2>

          <div class="goods-page">
            <div class="goods-data clearfix">
              <div class="table-wrapper-responsive">
                <table>
                  <tr>
                    <td style="font-size: 16px;">{!! $data->privacy !!}</td>
                    
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
