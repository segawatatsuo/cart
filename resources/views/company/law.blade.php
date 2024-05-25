@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>特定商取引法</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">特定商取引に関する法律に基づく表記</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
@stop

@section('content')


    {{-- コンテンツ --}}
    <form method="POST" action="{{ route('company.law.update') }}">
        @csrf
        <section class="content">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-md-12">

                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">特定商取引に関する法律に基づく表記</h3>
                            </div>



                            <div class="container-fluid">
                                <div class="row">
                                    <div class="card-body col-md-6">

                                        <div class="form-group">
                                            <label for="number">販売業者</label>
                                            <input type="text" value="{{ isset($law->distributor) ? $law->distributor : '' }}" class="form-control" id="distributor"
                                                name="distributor" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">販売責任者</label>
                                            <input type="text" value="{{ isset($law->manager) ? $law->manager : '' }}" class="form-control" id="manager"
                                                name="manager" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">所在地</label>
                                            <input type="text" value="{{ isset($law->location) ? $law->location : '' }}" class="form-control" id="location"
                                                name="location" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">屋号</label>
                                            <input type="text" value="{{ isset($law->trade_name) ? $law->trade_name : '' }}" class="form-control" id="trade_name"
                                                name="trade_name" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">電話番号</label>
                                            <input type="text" value="{{ isset($law->tel) ? $law->tel : '' }}" class="form-control" id="tel"
                                                name="tel" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">FAX番号</label>
                                            <input type="text" value="{{ isset($law->fax) ? $law->fax : '' }}" class="form-control" id="fax"
                                                name="fax" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">メールアドレス</label>
                                            <input type="text" value="{{ isset($law->email) ? $law->email : '' }}" class="form-control" id="email"
                                                name="email" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">URL</label>
                                            <input type="text" value="{{ isset($law->url) ? $law->url : '' }}" class="form-control" id="url"
                                                name="url" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">配送方法</label>
                                            <input type="text" value="{{ isset($law->shipping_method) ? $law->shipping_method : '' }}" class="form-control" id="shipping_method"
                                                name="shipping_method1" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">商品代金以外の必要料金</label>
                                            <input type="text" value="{{ isset($law->necessary_charges) ? $law->necessary_charges : '' }}" class="form-control" id="necessary_charges"
                                                name="necessary_charges" placeholder="">
                                        </div>
                                        <div class="form-group">
                                            <label for="name">申込の有効期限</label>
                                            <input type="text" value="{{ isset($law->expiration_date) ? $law->expiration_date : '' }}" class="form-control" id="expiration_date"
                                                name="expiration_date" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">不良品</label>
                                            <input type="text" value="{{ isset($law->defective_product) ? $law->defective_product : '' }}" class="form-control" id="defective_product"
                                                name="defective_product" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">販売数量</label>
                                            <input type="text" value="{{ isset($law->sales_quantity) ? $law->sales_quantity : '' }}" class="form-control" id="sales_quantity"
                                                name="sales_quantity" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">引き渡し時期</label>
                                            <input type="text" value="{{ isset($law->delivery_time) ? $law->delivery_time : '' }}" class="form-control" id="delivery_time"
                                                name="delivery_time" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">返品期限</label>
                                            <input type="text" value="{{ isset($law->return_period) ? $law->return_period : '' }}" class="form-control" id="return_period"
                                                name="return_period" placeholder="">
                                        </div>

                                        <div class="form-group">
                                            <label for="name">返品送料</label>
                                            <input type="text" value="{{ isset($law->return_shipping_fee) ? $law->return_shipping_fee : '' }}" class="form-control" id="return_shipping_fee"
                                                name="return_shipping_fee" placeholder="">
                                        </div>

                                    </div>


                                    <div class="card-body col-md-6">
                                        <div class="form-group">
                                            <label for="name">お支払い方法1</label>

                                            <input type="text" value="{{ isset($law->payment_method_name1) ? $law->payment_method_name1 : '' }}" class="form-control" id="payment_method_name1"
                                            name="payment_method_name1" placeholder="お支払い方法名" style="margin-bottom: 2px;">
                                            <textarea style="height: 10em;" class="form-control" id="payment_method1" placeholder="" name="payment_method1">{{ isset($law->payment_method1) ? $law->payment_method1 : '' }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">お支払い方法2</label>
                                            <input type="text" value="{{ isset($law->payment_method_name2) ? $law->payment_method_name2 : ''  }}" class="form-control" id="payment_method_name2"
                                            name="payment_method_name2" placeholder="お支払い方法名" style="margin-bottom: 2px;">
                                            <textarea style="height: 10em;" class="form-control" id="payment_method2" placeholder="" name="payment_method2">{{ isset($law->payment_method2) ? $law->payment_method2 : '' }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">お支払い方法3</label>
                                            <input type="text" value="{{ isset($law->payment_method_name3) ? $law->payment_method_name3 : '' }}" class="form-control" id="payment_method_name3"
                                            name="payment_method_name3" placeholder="お支払い方法名" style="margin-bottom: 2px;">
                                            <textarea style="height: 10em;" class="form-control" id="payment_method3" placeholder="" name="payment_method3">{{ isset($law->payment_method3) ? $law->payment_method3 : '' }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">お支払い方法4</label>
                                            <input type="text" value="{{ isset($law->payment_method_name4) ? $law->payment_method_name4 : '' }}" class="form-control" id="payment_method_name4"
                                            name="payment_method_name4" placeholder="お支払い方法名" style="margin-bottom: 2px;">
                                            <textarea style="height: 10em;" class="form-control" id="payment_method4" placeholder="" name="payment_method4">{{ isset($law->payment_method4) ? $law->payment_method4 : '' }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">お支払い方法5</label>
                                            <input type="text" value="{{ isset($law->payment_method_name5) ? $law->payment_method_name5 : '' }}" class="form-control" id="payment_method_name5"
                                            name="payment_method_name5" placeholder="お支払い方法名" style="margin-bottom: 2px;">
                                            <textarea style="height: 10em;" class="form-control" id="payment_method5" placeholder="" name="payment_method5">{{ isset($law->payment_method5) ? $law->payment_method5 : '' }}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">お支払い方法6</label>
                                            <input type="text" value="{{ isset($law->payment_method_name6) ? $law->payment_method_name6 : '' }}" class="form-control" id="payment_method_name6"
                                            name="payment_method_name6" placeholder="お支払い方法名" style="margin-bottom: 2px;">
                                            <textarea style="height: 10em;" class="form-control" id="payment_method6" placeholder="" name="payment_method6">{{ isset($law->payment_method6) ? $law->payment_method6 : '' }}</textarea>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">
                                <button type="submit" class="btn btn-primary">データ更新</button>
                            </div>
                        </div>
                    </div>
    </form>





    </div>
    </div>
    </section>

@stop



@section('css')
    <style>
        ul,
        li {
            list-style: none;
        }
    </style>

@stop

@section('js')

    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.13.0/Sortable.min.js"></script>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>





    <script>
        //プルダウンをJSON形式で保存する
        $('.register').on('click', function() {
            var serializedArray = localStorage.getItem('LeftSide');
            var leftside = JSON.parse(serializedArray);
            var serializedArray = localStorage.getItem('RightSide');
            var rightside = JSON.parse(serializedArray);
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $("[name='csrf-token']").attr("content"),
                    //'Content-Type': 'application/json'
                },
                url: "{{ url('/item/create') }}",
                method: "post",
                dataType: "text",
                data: {
                    leftside: leftside,
                    rightside: rightside
                },
            }).done(function(res) {
                console.log(res);
                alert("保存しました");
                //alert(leftside);
            }).fail(function() {
                alert('通信に失敗しました/item/create');
            });
        });
    </script>


@stop
