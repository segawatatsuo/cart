@include('cartAdd.header')


<div class="container">
    <div class="py-5 text-center">
        <h2>ご注文確認</h2>
        <p class="lead">内容を確認の上ご注文を確定してください</p>
    </div>

    <div class="row">
        <div class="col-md-5 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">カート</span>
                <span class="badge badge-secondary badge-pill">{{ $count }}</span>
            </h4>
            <ul class="list-group mb-3">
                @foreach ($cartCollection as $cart)
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">{{ $cart->name }}{{ $cart->attributes[0]['アイテムカラー'] }}</h6>
                            <small class="text-muted">

                                色：{{ $cart->attributes[0]["アイテムカラー"] }}<br>
                                {{ $cart->attributes[3] }}<br>
                                @foreach ( $cart->attributes[1] as $key=>$val )
                                  {{ $key }}:{{ $val }}
                                @endforeach


                            </small>
                            <div>
                            <img width="25%" src="{{ asset('storage/image/detail')."/".$cart->attributes[5]."/".$cart->id }}">
                            </div>
                        </div>
                        <span class="text-muted">¥{{ number_format($cart->attributes[2]['合計']) }}</span>
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

            <form method="POST" action="{{ asset('/cartAdd/order') }}" class="needs-validation" novalidate="">
                @csrf
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">名字</label>
                        <input type="text" class="form-control" id="firstName" name="firstName" value="{{ $all_request['firstName'] }}" readonly>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">名前</label>
                        <input type="text" class="form-control" id="lastName" name="lastName" value="{{ $all_request['lastName'] }}" readonly>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="email">メールアドレス</label>
                    <input type="email" class="form-control" id="email" name="email" value="{{ $all_request['email'] }}" readonly>
                </div>

                <div class="mb-3">
                    <label for="phone">電話番号</label>
                    <input type="phone" class="form-control" id="phone" name="phone" value="{{ $all_request['phone'] }}" readonly>
                </div>

                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="zip">郵便番号</label>
                        <input type="text" class="form-control" id="zip01" name="zip01" value="{{ $all_request['zip01'] }}" readonly>
                    </div>


                    <div class="col-md-4 mb-3">
                        <label for="state">都道府県</label>
                        <input type="text" class="form-control" id="pref01" name="pref01" value="{{ $all_request['pref01'] }}" readonly>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address">送り先住所1</label>
                    <input type="text" class="form-control" id="addr01" name="addr01" value="{{ $all_request['addr01'] }}" readonly>
                </div>

                <div class="mb-3">
                    <label for="address2">送り先住所2 </label>
                    <input type="text" class="form-control" id="address2" name="addr02" value="{{ $all_request['addr02'] }}" readonly>
                </div>

                <hr class="mb-4">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="foo" name="foo">
                    <label class="custom-control-label" for="otherAddress">お届け先が請求先と異なる</label>
                </div>

                <div id="bar">
                    <br><br>
                    <h4 class="mb-3">お届け先住所</h4>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName2">名字</label>
                            <input type="text" class="form-control" id="firstName2" name="firstName2" value="{{ $all_request['firstName2'] }}" readonly>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName2">名前</label>
                            <input type="text" class="form-control" id="lastName2" name="lastName2" value="{{ $all_request['lastName2'] }}">
                        </div>
                    </div>


                    <div class="mb-3">
                        <label for="phone2">電話番号</label>
                        <input type="phone2" class="form-control" id="phone2" name="phone2" value="{{ $all_request['phone2'] }}">
                    </div>

                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="zip2">郵便番号</label>
                            <input type="text" class="form-control" id="zip01_2-2" name="zip01_2" value="{{ $all_request['zip01_2'] }}">
                        </div>


                        <div class="col-md-4 mb-3">
                            <label for="state">都道府県</label>
                            <input type="text" class="form-control" id="pref01_2" name="pref01_2" value="{{ $all_request['pref01_2'] }}" readonly>

                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="address">送り先住所1</label>
                        <input type="text" class="form-control" id="address" name="addr01_2" value="{{ $all_request['addr01_2'] }}" readonly>
                    </div>

                    <div class="mb-3">
                        <label for="address2">送り先住所2 </label>
                        <input type="text" class="form-control" id="addr02_2" name="addr02_2" value="{{ $all_request['addr02_2'] }}" readonly>
                    </div>
                </div>



                <hr class="mb-4">

                <h4 class="mb-3">支払い方法</h4>
                <input type="text" class="form-control" id="paymentMethod" name="paymentMethod" value="{{ $all_request['paymentMethod'] }}" readonly>

                <hr class="mb-4">
                <button class="btn btn-primary btn-lg btn-block" type="submit">ご注文確定</button>

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
$(function(){
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
