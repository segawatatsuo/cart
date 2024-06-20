@include('cartAdd.header')

<div id="content" class="content-area page home"><!-- margin-top: 222px  -->
    <div class="container">
        <div class="row">

            <div class="col-12">
                <main class="contents-normal pt-pc-35 pb-pc-30">
                    <h1 class="ttl-cmn-01 mb-pc-25 mb-sp-15">ご注文完了</h1>

                    <form class="box-shipping-wrap pt-0 cf" method="？">
                        <div class="box-shipping">
                            <div class="box-shipping-main">
                                ご注文ありがとうございました。<br>
                                
                                ただいま、ご注文の確認メールをお送りさせていただきました。<br>
                                万一、ご確認メールが届かない場合は、トラブルの可能性もありますので大変お手数ではございますがもう一度お問い合わせいただくか、お電話にてお問い合わせくださいませ。<br>
                                今後ともご愛顧賜りますようよろしくお願い申し上げます。<br><br>
                            </div>
                            <div class="box-shipping-sub box-cart-sub">

                                <div class="box-payment-trigger">
                                    <input type="submit"
                                        class="btn-cmn-02 btn-large btn-cart-order" value="TOPページへ"
                                        style="cursor: pointer;" formaction="{{ route('welcome') }}"></div>



                            </div>
                        </div>
                    </form>
                    <span id="reco1"></span>
                    <span id="reco17"></span>
                </main>

                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br>

            </div>
        </div>
    </div>




    @include('parts.footer')
