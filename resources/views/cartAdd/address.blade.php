@include('cartAdd.header')


<div class="container">
    <div class="py-5 text-center">
        <h2>ご注文フォーム</h2>
        <p class="lead">お名前、ご住所、メールアドレス、お支払い方法をご入力ください</p>
    </div>

    <div class="row">
        <div class="col-md-5 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">カート</span>
                <span class="badge badge-secondary badge-pill">{{ $cart_count }}</span>
            </h4>

            <ul class="list-group mb-3">
                @foreach ($cartCollection as $cart)
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <div>
                                <h6 class="my-0">
                                    {{ $cart->attributes['brand_name'] }}{{ $cart->attributes['item_name'] }}{{ $cart->attributes['item_no'] }}
                                </h6>
                            </div>
                            <p>{{ $cart->attributes['size_price_set'] }}</p>
                            <small class="text-muted">
                                @php
                                    if(is_array($cart->attributes['print_position_array'])){
                                        $counter = count($cart->attributes['print_position_array']);
                                    }else{
                                        $counter=0;
                                    }
                                @endphp
                                @for ($i = 0; $i < $counter; $i++)
                                    プリント位置：{{ $cart->attributes['print_position_array'][$i] }}
                                    加工費用：￥{{ number_format($cart->attributes['processing_costs_array'][$i]) }}
                                    文字：{{ $cart->attributes['fonts_text'][$i] }}
                                    フォント：{{ $cart->attributes['fonts_array'][$i] }}
                                    フォント色：{{ $cart->attributes['fonts_color_array'][$i] }}
                                    縁取りスタイル：{{ $cart->attributes['fonts_border_array'][$i] }}
                                    縁取り色：{{ $cart->attributes['fonts_border_color_array'][$i] }}
                                    @if ($counter > 1 and $i < $counter)
                                        <br>-----------------------------------------------------------------<br>
                                    @endif
                                @endfor
                            </small>
                            <div>
                                <img width="25%"
                                    src="{{ asset('storage/image/detail') . '/' . $cart->attributes['number'] . '/' . $cart->attributes['sku'] }}">
                            </div>
                        </div>
                        <div class="text-muted" style="margin-top:2px">
                            ¥{{ number_format($cart->attributes['total_purchase_amount']) }}</div>
                    </li>
                @endforeach


                    <li class="list-group-item d-flex justify-content-between">
                        <span>消費税</span>
                        <strong>¥{{ number_format($tax) }}</strong>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>送料</span>
                        <strong>¥{{ number_format($postage) }}</strong>
                    </li>

                    <li class="list-group-item d-flex justify-content-between">
                        <span>合計金額</span>
                        <strong>¥{{ number_format($total_add_tax) }}</strong>
                    </li>
                
            </ul>

        </div>


        <div class="col-md-7 order-md-1">
            <h4 class="mb-3">ご請求先</h4>

            <form class="needs-validation" method="POST" action="{{ asset('/cartAdd/confirm') }}">
                @csrf
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">名字</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value=""
                            required="" name="firstName">
                        <div class="invalid-feedback">
                            名字を入力してください。
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">名前</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value=""
                            required="" name="lastName">
                        <div class="invalid-feedback">
                            名前を入力してください。
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="email">メールアドレス</label>
                    <input type="email" class="form-control" id="email" name="email"
                        placeholder="you@example.com">
                    <div class="invalid-feedback">
                        有効なメールアドレスを入力してください。
                    </div>
                </div>

                <div class="mb-3">
                    <label for="phone">電話番号</label>
                    <input type="phone" class="form-control" id="phone" name="phone" placeholder="">
                    <div class="invalid-feedback">
                        電話番号を入力してください。
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 mb-3">
                        <label for="zip">郵便番号</label>
                        <input type="text" class="form-control" id="zip01" name="zip01" maxlength="8"
                            placeholder="" required="" onKeyUp="AjaxZip3.zip2addr(this,'','pref01','addr01');">
                        <div class="invalid-feedback">
                            郵便番号を入力してください。
                        </div>
                    </div>


                    <div class="col-md-5 mb-3">
                        <label for="state">都道府県</label>
                        <select class="custom-select d-block w-100" id="state" required="" name="pref01">
                            <option value="">-- 選択してください --</option>
                            <option value="北海道">北海道</option>
                            <option value="青森県">青森県</option>
                            <option value="岩手県">岩手県</option>
                            <option value="宮城県">宮城県</option>
                            <option value="秋田県">秋田県</option>
                            <option value="山形県">山形県</option>
                            <option value="福島県">福島県</option>
                            <option value="茨城県">茨城県</option>
                            <option value="栃木県">栃木県</option>
                            <option value="群馬県">群馬県</option>
                            <option value="埼玉県">埼玉県</option>
                            <option value="千葉県">千葉県</option>
                            <option value="東京都">東京都</option>
                            <option value="神奈川県">神奈川県</option>
                            <option value="新潟県">新潟県</option>
                            <option value="富山県">富山県</option>
                            <option value="石川県">石川県</option>
                            <option value="福井県">福井県</option>
                            <option value="山梨県">山梨県</option>
                            <option value="長野県">長野県</option>
                            <option value="岐阜県">岐阜県</option>
                            <option value="静岡県">静岡県</option>
                            <option value="愛知県">愛知県</option>
                            <option value="三重県">三重県</option>
                            <option value="滋賀県">滋賀県</option>
                            <option value="京都府">京都府</option>
                            <option value="大阪府">大阪府</option>
                            <option value="兵庫県">兵庫県</option>
                            <option value="奈良県">奈良県</option>
                            <option value="和歌山県">和歌山県</option>
                            <option value="鳥取県">鳥取県</option>
                            <option value="島根県">島根県</option>
                            <option value="岡山県">岡山県</option>
                            <option value="広島県">広島県</option>
                            <option value="山口県">山口県</option>
                            <option value="徳島県">徳島県</option>
                            <option value="香川県">香川県</option>
                            <option value="愛媛県">愛媛県</option>
                            <option value="高知県">高知県</option>
                            <option value="福岡県">福岡県</option>
                            <option value="佐賀県">佐賀県</option>
                            <option value="長崎県">長崎県</option>
                            <option value="熊本県">熊本県</option>
                            <option value="大分県">大分県</option>
                            <option value="宮崎県">宮崎県</option>
                            <option value="鹿児島県">鹿児島県</option>
                            <option value="沖縄県">沖縄県</option>
                        </select>
                        <div class="invalid-feedback">
                            有効な都道府県を入力してください。
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address">送り先住所1</label>
                    <input type="text" class="form-control" id="addr01" name="addr01" placeholder=""
                        required="">
                    <div class="invalid-feedback">
                        送り先住所を入力してください。
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address2">送り先住所2 </label>
                    <input type="text" class="form-control" id="addr02" placeholder="" name="addr02">
                </div>


                <!-- :::::::::::::::::::::::::::::--->


                <hr class="mb-4">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="foo" name="foo">
                    <label class="custom-control-label" for="otherAddress">請求先とお届け先が異なる</label>
                </div>

                <div id="bar">
                    <br><br>
                    <h4 class="mb-3">お届け先住所</h4>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName2">名字</label>
                            <input type="text" class="form-control" name="firstName2" id="firstName2"
                                placeholder="" value="">
                            <div class="invalid-feedback">
                                名字を入力してください。
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName2">名前</label>
                            <input type="text" class="form-control" name="lastName2" id="lastName2"
                                placeholder="" value="">
                            <div class="invalid-feedback">
                                名前を入力してください。
                            </div>
                        </div>
                    </div>


                    <div class="mb-3">
                        <label for="phone2">電話番号</label>
                        <input type="phone2" class="form-control" name="phone2" id="phone2" placeholder="">
                        <div class="invalid-feedback">
                            電話番号を入力してください。
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="zip2">郵便番号</label>
                            <input type="text" class="form-control" id="zip01_2" name="zip01_2" maxlength="8"
                                placeholder="" onKeyUp="AjaxZip3.zip2addr(this,'','pref01_2','addr01_2');">
                            <div class="invalid-feedback">
                                郵便番号を入力してください。
                            </div>
                        </div>


                        <div class="col-md-6 mb-3">
                            <label for="state">都道府県</label>
                            <select class="custom-select d-block w-100" id="state" name="pref01_2">
                                <option value="">-- 選択してください --</option>
                                <option value="北海道">北海道</option>
                                <option value="青森県">青森県</option>
                                <option value="岩手県">岩手県</option>
                                <option value="宮城県">宮城県</option>
                                <option value="秋田県">秋田県</option>
                                <option value="山形県">山形県</option>
                                <option value="福島県">福島県</option>
                                <option value="茨城県">茨城県</option>
                                <option value="栃木県">栃木県</option>
                                <option value="群馬県">群馬県</option>
                                <option value="埼玉県">埼玉県</option>
                                <option value="千葉県">千葉県</option>
                                <option value="東京都">東京都</option>
                                <option value="神奈川県">神奈川県</option>
                                <option value="新潟県">新潟県</option>
                                <option value="富山県">富山県</option>
                                <option value="石川県">石川県</option>
                                <option value="福井県">福井県</option>
                                <option value="山梨県">山梨県</option>
                                <option value="長野県">長野県</option>
                                <option value="岐阜県">岐阜県</option>
                                <option value="静岡県">静岡県</option>
                                <option value="愛知県">愛知県</option>
                                <option value="三重県">三重県</option>
                                <option value="滋賀県">滋賀県</option>
                                <option value="京都府">京都府</option>
                                <option value="大阪府">大阪府</option>
                                <option value="兵庫県">兵庫県</option>
                                <option value="奈良県">奈良県</option>
                                <option value="和歌山県">和歌山県</option>
                                <option value="鳥取県">鳥取県</option>
                                <option value="島根県">島根県</option>
                                <option value="岡山県">岡山県</option>
                                <option value="広島県">広島県</option>
                                <option value="山口県">山口県</option>
                                <option value="徳島県">徳島県</option>
                                <option value="香川県">香川県</option>
                                <option value="愛媛県">愛媛県</option>
                                <option value="高知県">高知県</option>
                                <option value="福岡県">福岡県</option>
                                <option value="佐賀県">佐賀県</option>
                                <option value="長崎県">長崎県</option>
                                <option value="熊本県">熊本県</option>
                                <option value="大分県">大分県</option>
                                <option value="宮崎県">宮崎県</option>
                                <option value="鹿児島県">鹿児島県</option>
                                <option value="沖縄県">沖縄県</option>
                            </select>
                            <div class="invalid-feedback">
                                有効な都道府県を入力してください。x
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="address">送り先住所1</label>
                        <input type="text" class="form-control" id="addr01_2" name="addr01_2" placeholder="">
                        <div class="invalid-feedback">
                            送り先住所を入力してください。
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="address2">送り先住所2 </label>
                        <input type="text" class="form-control" id="addr02_2" name="addr02_2" placeholder="">
                    </div>
                </div>



                <hr class="mb-4">

                <h4 class="mb-3">支払い方法</h4>

                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input"
                            checked="" required="" value="クレジットカード">
                        <label class="custom-control-label" for="credit">クレジットカード</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="bank" name="paymentMethod" type="radio" class="custom-control-input"
                            required="" value="銀行振込（前払い）">
                        <label class="custom-control-label" for="bank">銀行振込（前払い）</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="yubin" name="paymentMethod" type="radio" class="custom-control-input"
                            required="" value="郵便振替（前払い）">
                        <label class="custom-control-label" for="yubin">郵便振替（前払い）</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="combini" name="paymentMethod" type="radio" class="custom-control-input"
                            required="" value="コンビニ後払い">
                        <label class="custom-control-label" for="combini">コンビニ後払い</label>
                    </div>
                </div>

                <hr class="mb-4">

                <button type="submit" class="btn btn-primary btn-lg btn-block" name="">確認画面</button>

            </form>
        </div>
    </div>


</div>

<script src="./css/holder.min.js"></script>
<script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict';

        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');

            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
</script>

<script src="./css/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
</script>
<script>
    window.jQuery || document.write('<script src="/docs/4.5/assets/js/vendor/jquery-slim.min.js"><\/script>')
</script>
<script src="./css/bootstrap.bundle.min.js"></script>
<script src="./css/anchor.min.js"></script>
<script src="./css/clipboard.min.js"></script>
<script src="./css/bs-custom-file-input.min.js"></script>
<script src="./css/application.js"></script>
<script src="./css/search.js"></script>
<script src="./css/ie-emulation-modes-warning.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
    $(function() {
        $('input#foo[type=checkbox]').click(function() {
            if ($(this).prop('checked')) {
                $('#bar').show();
            } else {
                $('#bar').hide();
            }
        });
    });
</script>



@include('parts.footer')
