@include('parts.header2')

<div id="content" class="content-area page home"><!-- margin-top: 222px  -->
    <div class="container">
        <div class="row">

            <div class="col-12">
                <main class="contents-normal pt-pc-35 pb-pc-30">
                    <h1 class="ttl-cmn-01 mb-pc-25 mb-sp-15">確認画面</h1>

                    <form class="box-shipping-wrap pt-0 cf" method="？">
                        @csrf
                        <div class="box-shipping">
                            <div class="box-shipping-main">


                                <div class="h4">ご注文内容</div>

                                <div class="box-shipping-main">
                                    <!-- 繰り返し-->
                                    @foreach (session('carts')["cartCollection"] as $data)
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





                                <div class="h4">メールアドレス</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="email" value="{{ session('all_request')["email"] }}" placeholder="メールアドレス">
                                </div>

                                <div class="h4">お届け先情報</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="firstname" value="{{ session('all_request')['firstname'] }}" placeholder="お名前 (姓)">
                                    <input type="text" class="select2" name="lastname" value="{{ session('all_request')['lastname'] }}" placeholder="お名前 (名)">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="postal_code" value="{{ session('all_request')['postal_code'] }}" placeholder="郵便番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="prefecture" value="{{ session('all_request')['prefecture'] }}" placeholder="都道府県">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="city" value="{{ session('all_request')['city'] }}" placeholder="市区町村">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="street" value="{{ session('all_request')['street'] }}" placeholder="番地・建物名・部屋番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="phone_number" value="{{ session('all_request')['phone_number'] }}" placeholder="電話番号">
                                </div>

                                <div class="h4">購入者情報</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_firstname" value="{{ session('all_request')['kounyu_firstname'] }}" placeholder="お名前 (姓)">
                                    <input type="text" class="select2" name="kounyu_lastname" value="{{ old('kounyu_lastname') }}" placeholder="お名前 (名)">
                                </div>


                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_postal_code" value="{{ old('kounyu_postal_code') }}" placeholder="郵便番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_todofuken" value="{{ old('kounyu_todofuken') }}" placeholder="都道府県">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_city" value="{{ old('kounyu_city') }}" placeholder="市区町村">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_street" value="{{ old('kounyu_street') }}" placeholder="番地・建物名・部屋番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_tel" value="{{ old('kounyu_tel') }}" placeholder="電話番号">
                                </div>

                                <div class="h4">備考欄</div>
                                <div class="product__files">
                                    <textarea id="bikou" name="bikou" rows="5" cols="33" placeholder="ご要望などがありましたら入力してください">
                                        
                                    </textarea>
                                </div>

















                            </div>
                            <div class="box-shipping-sub box-cart-sub">

                                <div class="box-payment">
                                    <div class="box-payment-details">
                                        <dl class="mod-payment mod-payment-details">
                                            <dt>商品代金合計(税抜)</dt>
                                            <dd>¥{{session('carts')["total"]}}
                                            </dd>
                                            <dt>消費税</dt>
                                            <dd>¥{{ session('carts')["tax"] }}</dd>
                                        </dl>
                                        <div class="box-payment-total pt-pc-20">
                                            <dl class="mod-payment mod-payment-total">
                                                <dt>ご注文合計</dt>
                                                <dd>¥{{ session('carts')["total_add_tax"] }}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-payment-trigger">
                                    <input type="submit"
                                        class="btn-cmn-02 btn-large btn-cart-order" value="ご注文"
                                        style="cursor: pointer;" formaction="{{ route('cartAdd.order') }}">
                                    </div>
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
