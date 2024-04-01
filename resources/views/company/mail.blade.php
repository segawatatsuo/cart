@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>メール設定</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">メール設定</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
@stop

@section('content')


    {{-- コンテンツ --}}
    <form method="POST" id="data" action="{{ route('company.mail.update') }}">
        @csrf
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">サンキューメール（自動送信）</h3>
                            </div>
                            <div class="card-body col-md-6">
                                <div class="form-group">
                                    <label for="number">タイトル</label>
                                    <input type="text" value="{{ $mail->title }}" class="form-control" id="title"
                                        name="title" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="name">ヘッダ</label>
                                    <textarea style="height: 20em;" class="form-control" id="header" placeholder="" name="header">{{ $mail->header }}</textarea>
                                </div>

                                <div class="form-group">
                                    <label for="name">フッタ</label>
                                    <textarea style="height: 20em;" class="form-control" id="address1" placeholder="" name="footer">{{ $mail->footer }}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-3">
                                <button type="submit" class="btn btn-primary register" name="register"
                                    form="data">データ更新</button>
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
