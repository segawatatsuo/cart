{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')

    {{-- dropzone用に追加 --}}
    <meta name="_token" content="{{ csrf_token() }}" />
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/min/dropzone.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js"></script>
    {{-- dropzone用に追加 --}}



    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>トップページカテゴリー新規登録</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">トップページカテゴリー新規登録</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    {{-- コンテンツ --}}

    <section class="content">
        <div class="container-fluid" id="app">
            <div class="row">

                <div class="col-md-6">

                    <div class="card card-primary">

                        <div class="card-header">
                            <h3 class="card-title">カテゴリー名登録</h3>
                        </div>


                            <div class="card-body">

                                <div class="form-group">
                                    <label for="name">カテゴリー名(日本語)</label>
                                    <input type="text" class="form-control" v-model="params.name">
                                </div>

                                <div class="form-group">
                                    <label for="inside_name">カテゴリー名(英語)</label>
                                    <input type="text" class="form-control" v-model="params.inside_name" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="attribution">カテゴリー大分類</label>
                                    <input type="text" class="form-control" v-model="params.attribution" placeholder="">
                                </div>

                                <div class="form-group">
                                <label for="">カテゴリー名</label><br>
                                <select id="with_color_button" name="with_color_button" class="form-control" v-model="params.with_color_button" >
                                    <option value="">なし</option>
                                    <option value="with_color_button">色選択ボタン使用</option>
                                    <option value="character_input">文字入力欄</option>
                                </select>
                                </div>

                                <div class="form-group">
                                    <label for="attribution">表示順</label>
                                    <input type="text" class="form-control" v-model="params.attribution" placeholder="">
                                </div>



                            </div>


                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">画像登録</h3>
                        </div>

                        <div class="card-body">
                            

                            <div class="form-group">
                                <label for="name">メイン画像</label>
                                <form method="post" action="{{ url('image/upload/store') }}" enctype="multipart/form-data" class="dropzone"
                                id="dropzone">
                                @csrf
                            </form>


                            </div>
                            <div class="form-group">
                                <label for="name">サブ画像１</label>
                                <input type="text" class="form-control" v-model="params.input_column2" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="name">サブ画像２</label>
                                <input type="text" class="form-control" v-model="params.input_column3" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="name">サブ画像３</label>
                                <input type="text" class="form-control" v-model="params.input_column3" placeholder="">
                            </div>


                        </div>



                        <div class="card-footer">
                            <button type="button" class="btn btn-primary" @click="onSubmit">保存する</button>
                        </div>
                    </div>

                </div>

            </div>
        <!--
        If this happens, the black bar on the left side will be cut off.
        </div>
        </section>
        -->

@stop


@section('css')
    <style>
        .txt {
            display: inline-block;
            width: 100%;
            border: 1px solid #ffffff;
            box-sizing: border-box;
            padding: 1px 10px;
        }

        .table td.nopm {
            padding: 0em;
            margin: 0em;
        }
    </style>

@stop

@section('js')

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/vue@3.1.1/dist/vue.global.prod.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>

<script>
    Vue.createApp({
        data() {
            return {
                params: {
                    name: '',
                    inside_name: '',
                    //明細部分
                    ingredients: [],
                    prices: []
                }
            }
        },
        methods: {
            addIngredient() {

                this.params.ingredients.push('');
                this.params.prices.push('');

            },
            removeIngredient(removingIndex) {

                this.params.ingredients.splice(removingIndex, 1);
                this.params.prices.splice(removingIndex, 1);
            },
            onSubmit() {

                if(confirm('保存します。よろしいですか？')) {

                    const url = '{{ route('pulldown.store2') }}';

                    axios.post(url, this.params)
                        .then(response => {

                            if(response.data.result === true) {

                                alert('保存が完了しました。');

                            }

                        })
                        .catch(error => {

                            // TODO: ここでエラー処理をする
                            console.log(error.response.data);
                            alert('入力エラーがありました');

                        });

                }

            }
        }
    }).mount('#app');

</script>

@stop
