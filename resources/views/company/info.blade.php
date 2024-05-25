@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>会社情報</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">会社情報</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
@stop

@section('content')
    {{-- コンテンツ --}}
    <form method="POST" id="data" action="{{ route('company.info.store') }}">
        @csrf
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">ショップ設定</h3>
                            </div>
                            <div class="card-body col-md-6">
                                <div class="form-group">
                                    <label for="number">会社名</label>
                                    <input type="text" class="form-control" id="company_name" name="company_name" placeholder="" value="{{ isset($company->company_name) ? $company->company_name : '' }}">
                                </div>
                                <div class="form-group">
                                    <label for="name">郵便番号</label>
                                    <input type="text" class="form-control" id="zip_code" placeholder="" name="zip_code" value="{{ isset($company->zip_code) ? $company->zip_code : '' }}">
                                </div>

                                <div class="form-group">
                                    <label for="name">住所1</label>
                                    <input type="text" class="form-control" id="address1" placeholder="" name="address1" value="{{ isset($company->address1) ? $company->address1 : '' }}">
                                </div>

                                <div class="form-group">
                                    <label for="name">住所2</label>
                                    <input type="text" class="form-control" id="address2" placeholder="" name="address2" value="{{ isset($company->address2) ? $company->address : '' }}">
                                </div>

                                <div class="form-group">
                                    <label for="name">電話番号</label>
                                    <input type="text" class="form-control" id="tel_number" placeholder="" name="tel_number" value="{{ isset($company->tel_number) ? $company->tel_number : '' }}">
                                </div>

                                <div class="form-group">
                                    <label for="name">FAX番号</label>
                                    <input type="text" class="form-control" id="fax_number" placeholder="" name="fax_number" value="{{ isset($company->fax_number) ? $company->fax_number : '' }}">
                                </div>

                                <div class="form-group">
                                    <label for="name">受注用メールアドレス</label>
                                    <input type="text" class="form-control" id="order_mail" placeholder="" name="order_mail" value="{{ isset($company->order_mail) ? $company->order_mail : '' }}">
                                </div>


                                <div class="form-group">
                                    <label for="name">問合せメールアドレス</label>
                                    <input type="text" class="form-control" id="inquiry_mail" placeholder="" name="inquiry_mail" value="{{ isset($company->inquiry_mail) ? $company->inquiry_mail : '' }}">
                                </div>

                                <div class="form-group">
                                    <label for="name">送信元メールアドレス</label>
                                    <input type="text" class="form-control" id="sender_mail" placeholder="" name="sender_mail" value="{{ isset($company->sender_mail) ? $company->sender_mail : ''  }}">
                                </div>


                                <div class="form-group">
                                    <label for="name">エラーメールアドレス</label>
                                    <input type="text" class="form-control" id="error_mail" placeholder="" name="error_mail" value="{{ isset($company->error_mail) ? $company->error_mail : '' }}">
                                </div>


                                <div class="form-group">
                                    <label for="name">コピーライト</label>
                                    <input type="text" class="form-control" id="copyright" placeholder="" name="copyright" value="{{ isset($company->copyright) ? $company->copyright : '' }}">
                                </div>

                                <div class="form-group">
                                    <label for="name">事業者登録番号</label>
                                    <input type="text" class="form-control" id="business_registration_number" placeholder="" name="business_registration_number" value="{{ isset($company->business_registration_number) ? $company->business_registration_number : '' }}">
                                </div>



                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">
            
            
                                <button type="submit" class="btn btn-primary register" name="register" form="data">データ登録</button>
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

    {{-- dropzone用に追加 --}}
    <meta name="_token" content="{{ csrf_token() }}" />
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/min/dropzone.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js"></script>
    {{-- dropzone用に追加 --}}

    <script>
        new Sortable(RightSide, {
            group: 'shared', // set both lists to same group
            animation: 80,
            dropOnEmpty: false,
            onSort: function(evt, ui) {
                var currentSortable = evt.to[Object.keys(evt.to)[0]];
                var fromSortable = evt.from[Object.keys(evt.from)[0]];

                var order = currentSortable.toArray();
                var from = fromSortable.toArray();
                var name = currentSortable.el.id; //移動した先のID名
                //console.log(name);
                //console.log(order);
                var serializedArray = JSON.stringify(order);
                localStorage.setItem('RightSide', serializedArray);

                $.ajax({
                    // DBのソート順を更新する処理
                });
            },
        });

        new Sortable(LeftSide, {
            group: 'shared',
            animation: 80,
            dropOnEmpty: false,
            onSort: function(evt, ui) {
                var currentSortable = evt.to[Object.keys(evt.to)[0]];
                var fromSortable = evt.from[Object.keys(evt.from)[0]];

                var order = currentSortable.toArray();
                var from = fromSortable.toArray();
                var name = fromSortable.el.id; //移動した先のID名
                //console.log(name);
                //console.log(from);
                var serializedArray = JSON.stringify(from);
                localStorage.setItem('LeftSide', serializedArray);
                $.ajax({
                    // DBのソート順を更新する処理
                });
            },
        });
    </script>



    <script>
        //プルダウンをJSON形式で保存する
        $('.register').on('click', function() {
            var serializedArray = localStorage.getItem('LeftSide');
            var leftside = JSON.parse(serializedArray);
            var serializedArray = localStorage.getItem('RightSide');
            var rightside = JSON.parse(serializedArray);
            /*
            var obj = {
                "leftside": leftside,
                "rightside": rightside,
            };
            */
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $("[name='csrf-token']").attr("content"),
                    //'Content-Type': 'application/json'
                },
                url: "{{ url('/item/create') }}",
                method: "post",
                dataType: "text",
                data: {
                    leftside:leftside,
                    rightside:rightside
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


<!--dropzone -->

    <script type="text/javascript">
        Dropzone.options.dropzone = {
            maxFilesize: 12,
            renameFile: function(file) {
                var dt = new Date();
                var time = dt.getTime();
                return time + file.name;
            },
            acceptedFiles: ".jpeg,.jpg,.png,.gif",
            addRemoveLinks: true,
            timeout: 50000,
            removedfile: function(file) {
                var name = file.upload.filename;
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                    },
                    type: 'POST',
                    url: 'http://127.0.0.1:8000/image/delete',
                    data: {
                        filename: name
                    },
                    success: function(data) {
                        console.log("File has been successfully removed!!");
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
                var fileRef;
                return (fileRef = file.previewElement) != null ?
                    fileRef.parentNode.removeChild(file.previewElement) : void 0;
            },

            success: function(file, response) {
                console.log(response);
            },
            error: function(file, response) {
                return false;
            }
        };
    </script>


@stop
