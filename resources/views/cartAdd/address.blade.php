@include('parts.header2')

<div id="content" class="content-area page home"><!-- margin-top: 222px  -->
    <div class="container">
        <div class="row">

            <div class="col-12">
                <main class="contents-normal pt-pc-35 pb-pc-30">
                    <h1 class="ttl-cmn-01 mb-pc-25 mb-sp-15">購入情報入力</h1>

                    <form class="box-shipping-wrap pt-0 cf" method="？">
                        <div class="box-shipping">
                            <div class="box-shipping-main">

                                <div class="h4">メールアドレス</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="email" value="{{ old('email') }}" placeholder="メールアドレス">
                                </div>

                                <div class="h4">お届け先情報</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="firstname" value="{{ old('firstname') }}" placeholder="お名前 (姓)">
                                    <input type="text" class="select2" name="lastname" value="{{ old('lastname') }}" placeholder="お名前 (名)">
                                </div>


                                <div class="product__files">
                                    <input type="text" class="select2" name="postal_code" value="{{ old('postal_code') }}" placeholder="郵便番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="prefecture" value="{{ old('prefecture') }}" placeholder="都道府県">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="city" value="{{ old('city') }}" placeholder="市区町村">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="street" value="{{ old('street') }}" placeholder="番地・建物名・部屋番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="phone_number" value="{{ old('phone_number') }}" placeholder="電話番号">
                                </div>





                                <div class="h4">購入者情報</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_firstname" value="{{ old('kounyu_firstname') }}" placeholder="お名前 (姓)">
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
                                    <input type="text" class="select2" name="kounyu_phone_number" value="{{ old('kounyu_phone_number') }}" placeholder="電話番号">
                                </div>

                                <div class="h4">お支払い方法</div>
                                <div class="product__files">
                                    <input type="text" id="paymethod" name="paymethod" placeholder="お支払い方法">
                                        
     
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
                                            <dd>¥{{ session('carts')["total"] }}
                                            </dd>
                                            <dt>消費税</dt>
                                            <dd>¥{{session('carts')["tax"]}}</dd>
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
                                        class="btn-cmn-02 btn-large btn-cart-order" value="確認画面へ"
                                        style="cursor: pointer;" formaction="{{ route('cartAdd.confirm') }}">
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
