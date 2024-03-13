@include('parts.header2')

<div id="content" class="content-area page home"><!-- margin-top: 222px  -->
    <div class="container">
        <div class="row">

            <div class="col-12">
                <main class="contents-normal pt-pc-35 pb-pc-30">
                    <h1 class="ttl-cmn-01 mb-pc-25 mb-sp-15">ショッピングカート</h1>

                    <form class="box-shipping-wrap pt-0 cf" method="？">
                        <div class="box-shipping">
                            <div class="box-shipping-main">
                                <!-- 繰り返し-->
                                @foreach ($cartCollection as $data)
                                    <div class="list-cmn-order list-cart">
                                        <div class="list-order-item list-cart-item cart-item" data-cart-seq="1"
                                            data-att-grp-id="">
                                            <div class="list-order-body list-cart-body">
                                                <div class="list-order-ttl">
                                                    <a href=""> {{ $data->name }}</a>
                                                </div>
                                                <div class="list-order-body-in">
                                                    <figure class="list-order-figure list-cart-figure">
                                                        <a href=""><img
                                                                src="{{ asset('storage/image/detail/'.$data->attributes[5].'/'.$data->attributes[4]) }}"
                                                                alt=""></a>
                                                    </figure>
                                                    <div class="list-order-content list-cart-content">
                                                        <div class="list-cart-column">
                                                            <div class="mod-order-info">
                                                                カラー:{{ $data->attributes[0]['アイテムカラー'] }}<br>
                                                                数量：{{ $data->attributes[2]['数量'] }}<br>
                                                                {{ $data->attributes[3] }}<br>
                                                                @foreach ($data->attributes[1] as $key => $val)
                                                                    {{ $key . ':' . $val }}<br>
                                                                @endforeach
                                                            </div>
                                                            <dl class="mod-order-info mod-order-total">
                                                                <dt>小計:</dt>
                                                                <dd>¥{{ $data->attributes[2]['合計'] }}(税抜)</dd>
                                                            </dl>
                                                        </div>
                                                        <div class="list-cart-trigger">
                                                            <input type="submit" name="{{ $data->id }}"
                                                                class="btn-cmn-02 btn-medium color-gray cart-item__delete"
                                                                value="削除" style="cursor: pointer;" formaction="destroy">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 繰り返し-->
                                @endforeach
                            </div>
                            <div class="box-shipping-sub box-cart-sub">

                                <div class="box-payment">
                                    <div class="box-payment-details">
                                        <dl class="mod-payment mod-payment-details">
                                            <dt>商品代金合計(税抜)</dt>
                                            <dd>¥{{ $total }}
                                            </dd>
                                            <dt>消費税</dt>
                                            <dd>¥{{ $tax }}</dd>
                                        </dl>
                                        <div class="box-payment-total pt-pc-20">
                                            <dl class="mod-payment mod-payment-total">
                                                <dt>ご注文合計</dt>
                                                <dd>¥{{ $total_add_tax }}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-payment-trigger">
                                    <input type="submit"
                                        class="btn-cmn-02 btn-large btn-cart-order" value="注文に進む"
                                        style="cursor: pointer;" formaction="{{ route('cartAdd.address') }}"></div>


                                <div class="box-payment-trigger"><a class="btn-cmn-02 btn-large color-white"
                                        href="{{ $prevUrl }}">お買い物を続ける</a></div>

                                        

                                        
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
