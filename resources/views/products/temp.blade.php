<!-- 1 -->
<template id="js-template1">
    <!--以下プリントを追加要素 -->
    <section id = "wrap1">
        <hr style="border-width: thick;">

        <div class="product__files">
            <div class="d-flex">
                <button id="addprint" type="button" data-recipient="ああああ" class="btn btn-primary part btn-send w-50" data-bs-toggle="modal" data-bs-target="#AddPrintModal" style="margin-right: 4px;">
                    プリント箇所
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="addprint1"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>

        <div class="product__files">
            <div class="d-flex">
                <button id="1" type="button"
                    class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#FontSelectModal" data-recipient="1"
                    style="margin-right: 4px;">
                    書体(フォント)
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="font1"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>

        <div class="product__files">
            <div class="d-flex">
                <button id="1" type="button"
                    class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#ColorSelectModal" data-recipient="1"
                    style="margin-right: 4px;">
                    文字カラー
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="fontcolor1"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>

        <div class="product__files" id="fuchidori_style">
            <div class="d-flex">
                <button id="1" type="button"
                    class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#FuchiDoriModal" data-recipient="1"
                    style="margin-right: 4px;">
                    縁取りスタイル
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="fuchidori1"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>

        <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
            <div class="d-flex">
                <button id="1" type="button"
                    class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#ColorSelectFontModal" data-recipient="1"
                    style="margin-right: 4px;">
                    文字縁カラー
                </button>
                <input type="text"
                    class="radi select2 textbox-grow" id="fontcolor_fuchidori1"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>



        <div class="product__files" id="textbox">
            <div class="d-flex">
                <button id="1" type="button"
                    class="btn btn-primary part w-25" data-bs-toggle=""
                    data-bs-target="" style="margin-right: 4px;">
                    テキスト
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="text1" data-recipient="1"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>
</form>

<div class="product__files" id="textbox">
    <p>
        <a class="btn btn-primary w-100" data-bs-toggle="collapse"
            href="#image-upload" role="button" aria-expanded="false"
            aria-controls="collapseExample">
            画像をアップロード
        </a>
    </p>

    <div class="collapse" id="image-upload">
        <div class="">
            <form method="post" action="{{ url('user/upload') }}"
                enctype="multipart/form-data" class="dropzone" id="dropzone">
                @csrf
                <div class="dz-default dz-message">
                    <button class="dz-button" type="button" form="dropzone">
                        ファイルをドラッグ＆ドロップまたはここをクリック(タップ)して画像選択してください。
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<form method="post" id="form1">
    <div class="product__files">
        <div class="d-flex">
            <button id="6" type="button"
                class="btn btn-secondary part btn-send w-100 delete"
                data-bs-toggle="modal" data-bs-target=""
                style="margin-right: 4px;">
                プリントを削除
            </button>
        </div>
    </div>
</section><!--#wrap1はここまでにする -->
</template>




<!-- 2 -->
<template id="js-template2">
    <!--以下プリントを追加要素 -->
    <section id = "wrap2">

        <hr style="border-width: thick;">

        <div class="product__files">
            <div class="d-flex">
                <button id="addprint" type="button" class="btn btn-primary part btn-send w-50" data-bs-toggle="modal" data-bs-target="#AddPrintModal" data-recipient="2" style="margin-right: 4px;">
                    プリント箇所
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="addprint2"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>

        <div class="product__files">
            <div class="d-flex">
                <button id="2" type="button"
                    class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#FontSelectModal" data-whatever="2"
                    style="margin-right: 4px;">
                    書体(フォント)
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="font2"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>

        <div class="product__files">
            <div class="d-flex">
                <button id="2" type="button"
                    class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#ColorSelectModal" data-whatever="2"
                    style="margin-right: 4px;">
                    文字カラー
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="fontcolor2"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>

        <div class="product__files" id="fuchidori_style">
            <div class="d-flex">
                <button id="2" type="button"
                    class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#FuchiDoriModal" data-whatever="2"
                    style="margin-right: 4px;">
                    縁取りスタイル
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="fuchidori2"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>

        <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
            <div class="d-flex">
                <button id="2" type="button"
                    class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#ColorSelectFontModal" data-whatever="2"
                    style="margin-right: 4px;">
                    文字縁カラー
                </button>
                <input type="text"
                    class="radi select2 textbox-grow" id="fontcolor_fuchidori2"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>



        <div class="product__files" id="textbox">
            <div class="d-flex">
                <button id="2" type="button"
                    class="btn btn-primary part w-25" data-bs-toggle="" data-whatever="2"
                    data-bs-target="" style="margin-right: 4px;">
                    テキスト
                </button>
                <input type="text" value=""
                    class="radi select2 textbox-grow" id="text2"
                    name="" style="border: 1px solid #e2e5e9;"
                    form="form1">
            </div>
        </div>
</form>

<div class="product__files" id="textbox">
    <p>
        <a class="btn btn-primary w-100" data-bs-toggle="collapse"
            href="#image-upload" role="button" aria-expanded="false"
            aria-controls="collapseExample">
            画像をアップロード
        </a>
    </p>

    <div class="collapse" id="image-upload">
        <div class="">
            <form method="post" action="{{ url('user/upload') }}"
                enctype="multipart/form-data" class="dropzone" id="dropzone">
                @csrf
                <div class="dz-default dz-message">
                    <button class="dz-button" type="button" form="dropzone">
                        ファイルをドラッグ＆ドロップまたはここをクリック(タップ)して画像選択してください。
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<form method="post" id="form1">
    <div class="product__files">
        <div class="d-flex">
            <button id="6" type="button"
                class="btn btn-secondary part btn-send w-100 delete"
                data-bs-toggle="modal" data-bs-target=""
                style="margin-right: 4px;">
                プリントを削除
            </button>
        </div>
    </div>
</section><!--#wrap1はここまでにする -->
</template>
