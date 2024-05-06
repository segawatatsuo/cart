@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>商品内容</h1>
                </div>

                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">商品内容</li>
                    </ol>
                </div>
            </div>

                <!-- フラッシュメッセージ -->
                @if (session('successMessage'))
                    <div class="alert alert-success">
                        {{ session('successMessage') }}
                    </div>
                @endif


        </div>
    </section>
@stop

@section('content')
    {{-- コンテンツ --}}
    <form method="POST" id="data" action="{{ route('item.update', ['id' => $item->id]) }}">
        @csrf
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">商品名</h3>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="display">表示/非表示</label>
                                    <select class="custom-select form-control-border" id="exampleSelectBorder"
                                        name="display">
                                        @if ($item->display == '表示')
                                            <option selected>表示</option>
                                            <option>非表示</option>
                                        @else
                                            <option>表示</option>
                                            <option selected>非表示</option>
                                        @endif
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="number">メーカー</label>
                                    <input type="text" class="form-control" id="number" name="number" placeholder=""
                                        value="{{ $item->maker }}">
                                </div>

                                <div class="form-group">
                                    <label for="number">商品番号</label>
                                    <input type="text" class="form-control" id="number" name="number" placeholder=""
                                        value="{{ $item->number }}">
                                </div>
                                <div class="form-group">
                                    <label for="name">商品名</label>
                                    <input type="text" class="form-control" id="name" placeholder="" name="name"
                                        value="{{ $item->name }}">
                                </div>
                            </div>
                        </div>

                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">カテゴリー</h3>
                            </div>
                            <div class="card-body" id="category">
                                @each('layouts.partials.project', $projects, 'project', 'partials.projects-none')
                            </div>
                        </div>

                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">商品説明</h3>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label>商品ヘッドコピー</label>
                                    <textarea class="form-control" rows="3" placeholder="" name="head_copy">{{ $item->head_copy }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label>素材説明</label>
                                    <textarea class="form-control" rows="3" placeholder="" name="description">{{ $item->material }}</textarea>
                                </div>
                                <div class="form-group">
                                    <label>商品説明</label>
                                    <textarea class="form-control" rows="3" placeholder="" name="description">{{ $item->description }}</textarea>
                                </div>


                            </div>
                        </div>

                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">オススメに表示</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="form-group">
                                        <label for="hidden">表示/非表示</label>
                                        <select class="custom-select form-control-border" id="recommend" name="recommend">
                                            @if ($item->recommend == '表示')
                                                <option selected>表示</option>
                                                <option>非表示</option>
                                            @else
                                                <option>表示</option>
                                                <option selected>非表示</option>
                                            @endif
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">プルダウン</h3>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6 pt-3 pb-3">
                                            <div id="LeftSide" class="list-group col sortable">

                                                @if (is_array($left))
                                                    @foreach ($left as $lt)
                                                        <div class="list-group-item" data-id="{{ $lt['id'] }}">
                                                            {{ $lt['name'] }}</div>
                                                    @endforeach
                                                @endif

                                            </div>
                                        </div>

                                        <div class="col-6 pt-3 pb-3">
                                            <div id="RightSide" class="list-group col sortable">
                                                @if (is_array($right))
                                                    @foreach ($right as $lt)
                                                        <div class="list-group-item" data-id="{{ $lt['id'] }}">
                                                            {{ $lt['name'] }}</div>
                                                    @endforeach
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>



                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">マーキングカラー</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="form-group">
                                        <label for="hidden">カラーグループ選択</label>
                                        <select class="custom-select form-control-border" id="color_group"
                                            name="color_group">
                                            <option>なし</option>
                                            <option>野球用</option>
                                            <option>サッカー用</option>
                                            <option>バスケ用</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">フォント</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="form-group">
                                        <label for="hidden">フォント選択</label>
                                        <select class="custom-select form-control-border" id="color_group"
                                            name="color_group">
                                            <option>なし</option>
                                            <option>野球用</option>
                                            <option>サッカー用</option>
                                            <option>バスケ用</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

    </form>



    <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">画像</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
                <div class="row">
                    <label for="">
                        <form method="post" action="{{ url('image/upload/store') }}" enctype="multipart/form-data"
                            class="dropzone" id="dropzone">
                            @csrf
                        </form>
                    </label>
                </div>
            </div>
        </div>
    </div>

    <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">画像</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
                <div class="row">
                    @foreach ($images as $image)
                        <img src="{{ asset('/images/' . $image->filename) }}" alt="">
                    @endforeach
                </div>
            </div>
        </div>
    </div>


    <form>
        <div class="form-group">
            <div class="row">
                <div class="col-6 d-flex">
                    <button type="submit" class="btn btn-primary register mr-2" name="update"
                        form="data">データ更新</button>
                </div>
            </div>
        </div>
    </form>



    <form action="{{ route('item.destroy', ['id' => $item->id]) }}" method="POST" id="destroy">
        @csrf
        <div class="form-group">
            <div class="row">
                <div class="col-6 d-flex">
                    <button type="submit" class="btn btn-danger destory mr-2" name="destory" form="destroy"
                        onclick='return confirm("本当に削除しますか？")'>データ削除</button>
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
                    //url: 'http://127.0.0.1:8000/image/delete',
                    url: "{{ url('/image/delete') }}",
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

    <script>
        //プルダウンをJSON形式で保存する
        $('.register').on('click', function() {
            var serializedArray = localStorage.getItem('LeftSide');
            var leftside = JSON.parse(serializedArray);
            var serializedArray = localStorage.getItem('RightSide');
            var rightside = JSON.parse(serializedArray);
            var obj = {
                "leftside": leftside,
                "rightside": rightside,
            };

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $("[name='csrf-token']").attr("content"),
                    //'Content-Type': 'application/json'
                },
                //url: "/item/create",
                url: "{{ url('/item/create') }}",
                method: "post",
                dataType: "text",
                data: obj,
            }).done(function(res) {
                console.log(res);
                //alert("保存しました");
            }).fail(function() {
                alert('通信の失敗をしました');
            });
        });
    </script>


    <script>
        //チェックボックスの復元
        $(function() {
            var tags = JSON.parse('<?php echo $selected_category; ?>');
            $('#category :checkbox').each(function() {
                if ($.inArray($(this).val(), tags) > -1) {
                    $(this).attr("checked", "checked");
                }
            });
        });
    </script>
@stop
