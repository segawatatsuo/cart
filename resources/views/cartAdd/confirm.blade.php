@include('parts.header2')

<div id="content" class="content-area page home"><!-- margin-top: 222px  -->
    <div class="container">
        <div class="row">

            <div class="col-12">
                <main class="contents-normal pt-pc-35 pb-pc-30">
                    <h1 class="ttl-cmn-01 mb-pc-25 mb-sp-15">確認画面</h1>

                    <form class="box-shipping-wrap pt-0 cf" method="？">
                        <div class="box-shipping">
                            <div class="box-shipping-main">

                                <div class="h4">メールアドレス</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="mail" value="{{ old('mail') }}" placeholder="メールアドレス">
                                </div>

                                <div class="h4">お届け先情報</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="firstname" value="{{ old('firstname') }}" placeholder="お名前 (姓)">
                                    <input type="text" class="select2" name="lastname" value="{{ old('lastname') }}" placeholder="お名前 (名)">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="zip" value="{{ old('zip') }}" placeholder="郵便番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="todofuken" value="{{ old('todofuken') }}" placeholder="都道府県">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="city" value="{{ old('city') }}" placeholder="市区町村">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="banchi" value="{{ old('banchi') }}" placeholder="番地・建物名・部屋番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="tel" value="{{ old('tel') }}" placeholder="電話番号">
                                </div>

                                <div class="h4">購入者情報</div>
                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_firstname" value="{{ old('kounyu_firstname') }}" placeholder="お名前 (姓)">
                                    <input type="text" class="select2" name="kounyu_lastname" value="{{ old('kounyu_lastname') }}" placeholder="お名前 (名)">
                                </div>


                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_zip" value="{{ old('kounyu_zip') }}" placeholder="郵便番号">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_todofuken" value="{{ old('kounyu_todofuken') }}" placeholder="都道府県">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_city" value="{{ old('kounyu_city') }}" placeholder="市区町村">
                                </div>

                                <div class="product__files">
                                    <input type="text" class="select2" name="kounyu_banchi" value="{{ old('kounyu_banchi') }}" placeholder="番地・建物名・部屋番号">
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
                                            <dd>¥{{-- $total --}}
                                            </dd>
                                            <dt>消費税</dt>
                                            <dd>¥{{-- $tax --}}</dd>
                                        </dl>
                                        <div class="box-payment-total pt-pc-20">
                                            <dl class="mod-payment mod-payment-total">
                                                <dt>ご注文合計</dt>
                                                <dd>¥{{-- $total_add_tax --}}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-payment-trigger">
                                    <input type="submit"
                                        class="btn-cmn-02 btn-large btn-cart-order" value="ご注文"
                                        style="cursor: pointer;" formaction="{{ route('cartAdd.order') }}"></div>



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
