{{-- vendor/jeroennoten/laravel-adminlte/resources/views/page.blade.php --}}
@extends('adminlte::page')

@section('title', 'Dashboard')


@section('content_header')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>プルダウン新規登録</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">プルダウン新規登録</li>
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
                            <h3 class="card-title">プルダウン</h3>
                        </div>



                            <div class="card-body">

                                <div class="form-group">
                                    <label for="name">プルダウン名</label>
                                    <input type="text" class="form-control" v-model="params.name">
                                </div>

                                <div class="form-group">
                                    <label for="inside_name">管理名</label>
                                    <input type="text" class="form-control" v-model="params.inside_name" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="attribution">帰属先</label>
                                    <input type="text" class="form-control" v-model="params.attribution" placeholder="">
                                </div>

                                <div class="form-group">
                                <label for="">スタイル選択ボタン</label><br>
                                <select id="with_color_button" name="with_color_button" class="form-control" v-model="params.with_color_button" >
                                    <option value="">なし</option>
                                    <option value="with_color_button">色選択ボタン使用</option>
                                    <option value="character_input">文字入力欄</option>
                                </select>
                                </div>

                                <div class="form-group">
                                    <label for="name">手入力項目1</label>
                                    <input type="text" class="form-control" v-model="params.input_column1" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="name">手入力項目2</label>
                                    <input type="text" class="form-control" v-model="params.input_column2" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="name">手入力項目3</label>
                                    <input type="text" class="form-control" v-model="params.input_column3" placeholder="">
                                </div>


                            </div>


                    </div>
                </div>


                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">プルダウン内容</h3>
                        </div>

                        <div class="card-body">
                            

                            <label for="name">名称　価格</label>


                            <div class="position-relative mb-3" v-for="(ingredient,index) in params.ingredients">
                                <div class="row">
                                <input type="text" placeholder="名称" class="form-control col-6 col-auto" v-model="params.ingredients[index]">
                                <input type="text" placeholder="価格" class="form-control col-6 col-auto" v-model="params.prices[index]">

                                <div class="position-absolute" style="right:10px;top:8px;">
                                    <small>
                                        <a href="#" type="button" @click="removeIngredient(index)">削除</a>
                                    </small>
                                </div>
                                </div>
                            </div>
                            <!--追加ボタン -->
                            <button type="button" class="btn btn-outline-primary btn-sm" @click="addIngredient">+</button>
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
