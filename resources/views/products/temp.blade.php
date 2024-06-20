<!-- 1 -->
<template id="js-template1">
    <!--以下プリントを追加要素 -->
    <section id = "wrap1">
        <hr style="border-width: thick;">

        <div class="product__files">
            <div class="d-flex">
                <button id="addprint" type="button" data-block="1" class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#AddPrintModal" style="margin-right: 4px;">
                    プリント箇所
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="addprint1" name="プリント箇所[]"
                    style="border: 1px solid #e2e5e9;" form="form1" readonly>
            </div>
        </div>

        <div class="product__files" id="textbox">
            <div class="d-flex">
                <button id="1" type="button" class="btn btn-primary part w-50" data-bs-toggle=""
                    data-bs-target="" style="margin-right: 4px;">
                    加工費
                </button>
                <input type="text" value="" class="radi select2 textbox-grow processing_cost" id="print_price1"
                    data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;" form="form1" readonly>
            </div>
        </div>



        <div class="product__files">
            <div class="d-flex">
                <button id="1" type="button" class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                    data-bs-target="#FontSelectModal" data-block="1" style="margin-right: 4px;">
                    書 体
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="font1" name="書体[]"
                    style="border: 1px solid #e2e5e9;" form="form1" readonly>
            </div>
        </div>

        <div class="product__files">
            <div class="d-flex">
                <button id="1" type="button" class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                    data-bs-target="#ColorSelectModal" data-block="1" style="margin-right: 4px;">
                    文字カラー
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="fontcolor1" name="文字カラー[]"
                    style="border: 1px solid #e2e5e9;" form="form1" readonly>
            </div>
        </div>

        <div class="product__files" id="fuchidori_style">
            <div class="d-flex">
                <button id="1" type="button" class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                    data-bs-target="#FuchiDoriModal" data-block="1" style="margin-right: 4px;">
                    縁取り
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="fuchidori1" name="縁取り[]"
                    style="border: 1px solid #e2e5e9;" form="form1" readonly>
            </div>
        </div>

        <div id="hide1">
            <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                <div class="d-flex">
                    <button id="1" type="button" class="btn btn-primary part btn-send w-50"
                        data-bs-toggle="modal" data-bs-target="#ColorSelectFontModal" data-block="1"
                        style="margin-right: 4px;">
                        文字縁カラー
                    </button>
                    <input type="text" class="radi select2 textbox-grow" id="fontcolor_fuchidori1" name="文字縁カラー[]"
                        style="border: 1px solid #e2e5e9;" form="form1" readonly>
                </div>
            </div>
        </div>

        <div class="product__files" id="textbox">
            <div class="d-flex">
                <button id="1" type="button" class="btn btn-primary part w-50" data-bs-toggle=""
                    data-bs-target="" style="margin-right: 4px;">
                    テキスト
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="text1"
                    data-block="1" name="テキスト[]" style="border: 1px solid #e2e5e9;" form="form1">
            </div>
        </div>
        </form>

        <!--
            <div class="product__files">
                <div class="d-flex">
                    <button type="button" class="btn btn-secondary part btn-send w-100 delete" style="margin-right: 4px;">
                        プリントをクリア
                    </button>
                </div>
            </div>
        -->
    </section><!--#wrap1はここまでにする -->
</template>




<!-- 2 -->
<template id="js-template2">
    <!--以下プリントを追加要素 -->
    <section id = "wrap2">

        <hr style="border-width: thick;">

        <div class="product__files">
            <div class="d-flex">
                <button id="addprint" type="button" data-block="2" class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#AddPrintModal" data-block="2"
                    style="margin-right: 4px;">
                    プリント箇所
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="addprint2"
                    name="プリント箇所[]" style="border: 1px solid #e2e5e9;" form="form1">
            </div>
        </div>

        <div class="product__files" id="textbox">
            <div class="d-flex">
                <button id="1" type="button" class="btn btn-primary part w-50" data-bs-toggle=""
                    data-bs-target="" style="margin-right: 4px;">
                    加工費
                </button>
                <input type="text" value="" class="radi select2 textbox-grow processing_cost"
                    id="print_price2" data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;"
                    form="form1" readonly>
            </div>
        </div>



        <div class="product__files">
            <div class="d-flex">
                <button id="2" type="button" data-block="2" class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#FontSelectModal" data-whatever="2"
                    style="margin-right: 4px;">
                    書 体
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="font2"
                    name="書体[]" style="border: 1px solid #e2e5e9;" form="form1">
            </div>
        </div>

        <div class="product__files">
            <div class="d-flex">
                <button id="2" type="button" data-block="2" class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#ColorSelectModal" data-whatever="2"
                    style="margin-right: 4px;">
                    文字カラー
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="fontcolor2"
                    name="文字カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
            </div>
        </div>

        <div class="product__files" id="fuchidori_style">
            <div class="d-flex">
                <button id="2" type="button" data-block="2" class="btn btn-primary part btn-send w-50"
                    data-bs-toggle="modal" data-bs-target="#FuchiDoriModal" data-whatever="2"
                    style="margin-right: 4px;">
                    縁取り
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="fuchidori2"
                    name="縁取り[]" style="border: 1px solid #e2e5e9;" form="form1">
            </div>
        </div>

        <div id="hide2">
            <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                <div class="d-flex">
                    <button id="2" type="button" data-block="2" class="btn btn-primary part btn-send w-50"
                        data-bs-toggle="modal" data-bs-target="#ColorSelectFontModal" data-whatever="2"
                        style="margin-right: 4px;">
                        文字縁カラー
                    </button>
                    <input type="text" class="radi select2 textbox-grow" id="fontcolor_fuchidori2"
                        name="文字縁カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
                </div>
            </div>
        </div>



        <div class="product__files" id="textbox">
            <div class="d-flex">
                <button id="2" type="button" data-block="2" class="btn btn-primary part w-50"
                    data-bs-toggle="" data-whatever="2" data-bs-target="" style="margin-right: 4px;">
                    テキスト
                </button>
                <input type="text" value="" class="radi select2 textbox-grow" id="text2"
                    name="テキスト[]" style="border: 1px solid #e2e5e9;" form="form1">
            </div>
        </div>
        </form>


        <!--
            <div class="product__files">
                <div class="d-flex">
                    <button id="2" type="button" class="btn btn-secondary part btn-send w-100 delete"
                        data-bs-toggle="modal" data-bs-target="" style="margin-right: 4px;">
                        プリントをクリア
                    </button>
                </div>
            </div>
        -->
    </section><!--#wrap2はここまでにする -->





    <!-- 3 -->
    <template id="js-template3">
        <!--以下プリントを追加要素 -->
        <section id = "wrap3">

            <hr style="border-width: thick;">

            <div class="product__files">
                <div class="d-flex">
                    <button id="addprint" type="button" data-block="3" class="btn btn-primary part btn-send w-50"
                        data-bs-toggle="modal" data-bs-target="#AddPrintModal" data-block="3"
                        style="margin-right: 4px;">
                        プリント箇所
                    </button>
                    <input type="text" value="" class="radi select2 textbox-grow" id="addprint3"
                        name="プリント箇所[]" style="border: 1px solid #e2e5e9;" form="form1">
                </div>
            </div>


            <div class="product__files" id="textbox">
                <div class="d-flex">
                    <button id="1" type="button" class="btn btn-primary part w-50" data-bs-toggle=""
                        data-bs-target="" style="margin-right: 4px;">
                        加工費
                    </button>
                    <input type="text" value="" class="radi select2 textbox-grow processing_cost"
                        id="print_price3" data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;"
                        form="form1" readonly>
                </div>
            </div>


            <div class="product__files">
                <div class="d-flex">
                    <button id="3" type="button" data-block="3" class="btn btn-primary part btn-send w-50"
                        data-bs-toggle="modal" data-bs-target="#FontSelectModal" data-whatever="3"
                        style="margin-right: 4px;">
                        書 体
                    </button>
                    <input type="text" value="" class="radi select2 textbox-grow" id="font3"
                        name="書体[]" style="border: 1px solid #e2e5e9;" form="form1">
                </div>
            </div>

            <div class="product__files">
                <div class="d-flex">
                    <button id="3" type="button" data-block="3" class="btn btn-primary part btn-send w-50"
                        data-bs-toggle="modal" data-bs-target="#ColorSelectModal" data-whatever="3"
                        style="margin-right: 4px;">
                        文字カラー
                    </button>
                    <input type="text" value="" class="radi select2 textbox-grow" id="fontcolor3"
                        name="" style="border: 1px solid #e2e5e9;" form="form1">
                </div>
            </div>

            <div class="product__files" id="fuchidori_style">
                <div class="d-flex">
                    <button id="3" type="button" data-block="3" class="btn btn-primary part btn-send w-50"
                        data-bs-toggle="modal" data-bs-target="#FuchiDoriModal" data-whatever="3"
                        style="margin-right: 4px;">
                        縁取り
                    </button>
                    <input type="text" value="" class="radi select2 textbox-grow" id="fuchidori3"
                        name="縁取り[]" style="border: 1px solid #e2e5e9;" form="form1">
                </div>
            </div>

            <div id="hide3">
                <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori hide3">
                    <div class="d-flex">
                        <button id="3" type="button" data-block="3"
                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                            data-bs-target="#ColorSelectFontModal" data-whatever="3" style="margin-right: 4px;">
                            文字縁カラー
                        </button>
                        <input type="text" class="radi select2 textbox-grow" id="fontcolor_fuchidori3"
                            name="文字縁カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
                    </div>
                </div>
            </div>



            <div class="product__files" id="textbox">
                <div class="d-flex">
                    <button id="3" type="button" data-block="3" class="btn btn-primary part w-50"
                        data-bs-toggle="" data-whatever="3" data-bs-target="" style="margin-right: 4px;">
                        テキスト
                    </button>
                    <input type="text" value="" class="radi select2 textbox-grow" id="text3"
                        name="テキスト[]" style="border: 1px solid #e2e5e9;" form="form1">
                </div>
            </div>
            </form>

            <!--
                <div class="product__files">
                    <div class="d-flex">
                        <button id="3" type="button" class="btn btn-secondary part btn-send w-100 delete"
                            data-bs-toggle="modal" data-bs-target="" style="margin-right: 4px;">
                            プリントをクリア
                        </button>
                    </div>
                </div>
            -->
        </section><!--#wrap3はここまでにする -->





        <!-- 4 -->
        <template id="js-template4">
            <!--以下プリントを追加要素 -->
            <section id = "wrap4">

                <hr style="border-width: thick;">

                <div class="product__files">
                    <div class="d-flex">
                        <button id="addprint" type="button" data-block="4"
                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                            data-bs-target="#AddPrintModal" data-block="4" style="margin-right: 4px;">
                            プリント箇所
                        </button>
                        <input type="text" value="" class="radi select2 textbox-grow" id="addprint4"
                            name="プリント箇所[]" style="border: 1px solid #e2e5e9;" form="form1">
                    </div>
                </div>



                <div class="product__files" id="textbox">
                    <div class="d-flex">
                        <button id="1" type="button" class="btn btn-primary part w-50" data-bs-toggle=""
                            data-bs-target="" style="margin-right: 4px;">
                            加工費
                        </button>
                        <input type="text" value="" class="radi select2 textbox-grow processing_cost"
                            id="print_price4" data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;"
                            form="form1" readonly>
                    </div>
                </div>



                <div class="product__files">
                    <div class="d-flex">
                        <button id="4" type="button" data-block="4"
                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                            data-bs-target="#FontSelectModal" data-whatever="4" style="margin-right: 4px;">
                            書 体
                        </button>
                        <input type="text" value="" class="radi select2 textbox-grow" id="font4"
                            name="書体[]" style="border: 1px solid #e2e5e9;" form="form1">
                    </div>
                </div>

                <div class="product__files">
                    <div class="d-flex">
                        <button id="4" type="button" data-block="4"
                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                            data-bs-target="#ColorSelectModal" data-whatever="4" style="margin-right: 4px;">
                            文字カラー
                        </button>
                        <input type="text" value="" class="radi select2 textbox-grow" id="fontcolor4"
                            name="文字カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
                    </div>
                </div>

                <div class="product__files" id="fuchidori_style">
                    <div class="d-flex">
                        <button id="4" type="button" data-block="4"
                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                            data-bs-target="#FuchiDoriModal" data-whatever="4" style="margin-right: 4px;">
                            縁取り
                        </button>
                        <input type="text" value="" class="radi select2 textbox-grow" id="fuchidori4"
                            name="縁取り[]" style="border: 1px solid #e2e5e9;" form="form1">
                    </div>
                </div>

                <div id="hide4">
                <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                    <div class="d-flex">
                        <button id="4" type="button" data-block="4"
                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                            data-bs-target="#ColorSelectFontModal" data-whatever="4" style="margin-right: 4px;">
                            文字縁カラー
                        </button>
                        <input type="text" class="radi select2 textbox-grow" id="fontcolor_fuchidori4"
                            name="文字縁カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
                    </div>
                </div>
                </div>



                <div class="product__files" id="textbox">
                    <div class="d-flex">
                        <button id="4" type="button" data-block="4" class="btn btn-primary part w-50"
                            data-bs-toggle="" data-whatever="4" data-bs-target="" style="margin-right: 4px;">
                            テキスト
                        </button>
                        <input type="text" value="" class="radi select2 textbox-grow" id="text4"
                            name="テキスト[]" style="border: 1px solid #e2e5e9;" form="form1">
                    </div>
                </div>
                </form>



                <!--
                    <div class="product__files">
                        <div class="d-flex">
                            <button id="4" type="button"
                                class="btn btn-secondary part btn-send w-100 delete" data-bs-toggle="modal"
                                data-bs-target="" style="margin-right: 4px;">
                                プリントをクリア
                            </button>
                        </div>
                    </div>
                -->
            </section><!--#wrap4はここまでにする -->




            <!-- 5 -->
            <template id="js-template5">
                <!--以下プリントを追加要素 -->
                <section id = "wrap5">

                    <hr style="border-width: thick;">

                    <div class="product__files">
                        <div class="d-flex">
                            <button id="addprint" type="button" data-block="5"
                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                data-bs-target="#AddPrintModal" data-block="5" style="margin-right: 4px;">
                                プリント箇所
                            </button>
                            <input type="text" value="" class="radi select2 textbox-grow" id="addprint5"
                                name="プリント箇所[]" style="border: 1px solid #e2e5e9;" form="form1">
                        </div>
                    </div>


                    <div class="product__files" id="textbox">
                        <div class="d-flex">
                            <button id="1" type="button" class="btn btn-primary part w-50"
                                data-bs-toggle="" data-bs-target="" style="margin-right: 4px;">
                                加工費
                            </button>
                            <input type="text" value="" class="radi select2 textbox-grow processing_cost"
                                id="print_price5" data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;"
                                form="form1" readonly>
                        </div>
                    </div>



                    <div class="product__files">
                        <div class="d-flex">
                            <button id="5" type="button" data-block="5"
                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                data-bs-target="#FontSelectModal" data-whatever="5" style="margin-right: 4px;">
                                書 体
                            </button>
                            <input type="text" value="" class="radi select2 textbox-grow" id="font5"
                                name="書体[]" style="border: 1px solid #e2e5e9;" form="form1">
                        </div>
                    </div>

                    <div class="product__files">
                        <div class="d-flex">
                            <button id="5" type="button" data-block="5"
                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                data-bs-target="#ColorSelectModal" data-whatever="5" style="margin-right: 4px;">
                                文字カラー
                            </button>
                            <input type="text" value="" class="radi select2 textbox-grow" id="fontcolor5"
                                name="文字カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
                        </div>
                    </div>

                    <div class="product__files" id="fuchidori_style">
                        <div class="d-flex">
                            <button id="5" type="button" data-block="5"
                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                data-bs-target="#FuchiDoriModal" data-whatever="5" style="margin-right: 4px;">
                                縁取り
                            </button>
                            <input type="text" value="" class="radi select2 textbox-grow" id="fuchidori5"
                                name="縁取り[]" style="border: 1px solid #e2e5e9;" form="form1">
                        </div>
                    </div>

                    <div id="hide5">
                    <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                        <div class="d-flex">
                            <button id="5" type="button" data-block="5"
                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                data-bs-target="#ColorSelectFontModal" data-whatever="5" style="margin-right: 4px;">
                                文字縁カラー
                            </button>
                            <input type="text" class="radi select2 textbox-grow" id="fontcolor_fuchidori5"
                                name="文字縁カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
                        </div>
                    </div>
                    </div>


                    <div class="product__files" id="textbox">
                        <div class="d-flex">
                            <button id="5" type="button" data-block="5" class="btn btn-primary part w-50"
                                data-bs-toggle="" data-whatever="5" data-bs-target="" style="margin-right: 4px;">
                                テキスト
                            </button>
                            <input type="text" value="" class="radi select2 textbox-grow" id="text5"
                                name="テキスト[]" style="border: 1px solid #e2e5e9;" form="form1">
                        </div>
                    </div>
                    </form>

                    <!--
                    <div class="product__files">
                        <div class="d-flex">
                            <button id="5" type="button"
                                class="btn btn-secondary part btn-send w-100 delete" data-bs-toggle="modal"
                                data-bs-target="" style="margin-right: 4px;">
                                プリントをクリア
                            </button>
                        </div>
                    </div>
                -->
                </section><!--#wrap5はここまでにする -->





                <!-- 6 -->
                <template id="js-template6">
                    <!--以下プリントを追加要素 -->
                    <section id = "wrap6">

                        <hr style="border-width: thick;">

                        <div class="product__files">
                            <div class="d-flex">
                                <button id="addprint" type="button" data-block="6"
                                    class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                    data-bs-target="#AddPrintModal" data-block="6" style="margin-right: 4px;">
                                    プリント箇所
                                </button>
                                <input type="text" value="" class="radi select2 textbox-grow"
                                    id="addprint6" name="プリント箇所[]" style="border: 1px solid #e2e5e9;"
                                    form="form1">
                            </div>
                        </div>



                        <div class="product__files" id="textbox">
                            <div class="d-flex">
                                <button id="1" type="button" class="btn btn-primary part w-50"
                                    data-bs-toggle="" data-bs-target="" style="margin-right: 4px;">
                                    加工費
                                </button>
                                <input type="text" value=""
                                    class="radi select2 textbox-grow processing_cost" id="print_price6"
                                    data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;"
                                    form="form1" readonly>
                            </div>
                        </div>



                        <div class="product__files">
                            <div class="d-flex">
                                <button id="6" type="button" data-block="6"
                                    class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                    data-bs-target="#FontSelectModal" data-whatever="6" style="margin-right: 4px;">
                                    書 体
                                </button>
                                <input type="text" value="" class="radi select2 textbox-grow"
                                    id="font6" name="書体[]" style="border: 1px solid #e2e5e9;" form="form1">
                            </div>
                        </div>

                        <div class="product__files">
                            <div class="d-flex">
                                <button id="6" type="button" data-block="6"
                                    class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                    data-bs-target="#ColorSelectModal" data-whatever="6" style="margin-right: 4px;">
                                    文字カラー
                                </button>
                                <input type="text" value="" class="radi select2 textbox-grow"
                                    id="fontcolor6" name="文字カラー[]" style="border: 1px solid #e2e5e9;"
                                    form="form1">
                            </div>
                        </div>

                        <div id="hide6">
                        <div class="product__files" id="fuchidori_style">
                            <div class="d-flex">
                                <button id="6" type="button" data-block="6"
                                    class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                    data-bs-target="#FuchiDoriModal" data-whatever="6" style="margin-right: 4px;">
                                    縁取り
                                </button>
                                <input type="text" value="" class="radi select2 textbox-grow"
                                    id="fuchidori6" name="縁取り[]" style="border: 1px solid #e2e5e9;"
                                    form="form1">
                            </div>
                        </div>
                        </div>

                        <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                            <div class="d-flex">
                                <button id="6" type="button" data-block="6"
                                    class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                    data-bs-target="#ColorSelectFontModal" data-whatever="6"
                                    style="margin-right: 4px;">
                                    文字縁カラー
                                </button>
                                <input type="text" class="radi select2 textbox-grow" id="fontcolor_fuchidori6"
                                    name="文字縁カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
                            </div>
                        </div>



                        <div class="product__files" id="textbox">
                            <div class="d-flex">
                                <button id="6" type="button" data-block="6"
                                    class="btn btn-primary part w-50" data-bs-toggle="" data-whatever="6"
                                    data-bs-target="" style="margin-right: 4px;">
                                    テキスト
                                </button>
                                <input type="text" value="" class="radi select2 textbox-grow"
                                    id="text6" name="テキスト[]" style="border: 1px solid #e2e5e9;" form="form1">
                            </div>
                        </div>
                        </form>

                        <!--
                    <div class="product__files">
                        <div class="d-flex">
                            <button id="6" type="button"
                                class="btn btn-secondary part btn-send w-100 delete" data-bs-toggle="modal"
                                data-bs-target="" style="margin-right: 4px;">
                                プリントをクリア
                            </button>
                        </div>
                    </div>
                -->
                    </section><!--#wrap6はここまでにする -->





                    <!-- 7 -->
                    <template id="js-template7">
                        <!--以下プリントを追加要素 -->
                        <section id = "wrap7">

                            <hr style="border-width: thick;">

                            <div class="product__files">
                                <div class="d-flex">
                                    <button id="addprint" type="button" data-block="7"
                                        class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                        data-bs-target="#AddPrintModal" data-block="7" style="margin-right: 4px;">
                                        プリント箇所
                                    </button>
                                    <input type="text" value="" class="radi select2 textbox-grow"
                                        id="addprint7" name="プリント箇所[]" style="border: 1px solid #e2e5e9;"
                                        form="form1">
                                </div>
                            </div>



                            <div class="product__files" id="textbox">
                                <div class="d-flex">
                                    <button id="1" type="button" class="btn btn-primary part w-50"
                                        data-bs-toggle="" data-bs-target="" style="margin-right: 4px;">
                                        加工費
                                    </button>
                                    <input type="text" value=""
                                        class="radi select2 textbox-grow processing_cost" id="print_price7"
                                        data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;"
                                        form="form1" readonly>
                                </div>
                            </div>




                            <div class="product__files">
                                <div class="d-flex">
                                    <button id="7" type="button" data-block="7"
                                        class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                        data-bs-target="#FontSelectModal" data-whatever="7"
                                        style="margin-right: 4px;">
                                        書 体
                                    </button>
                                    <input type="text" value="" class="radi select2 textbox-grow"
                                        id="font7" name="書体[]" style="border: 1px solid #e2e5e9;"
                                        form="form1">
                                </div>
                            </div>

                            <div class="product__files">
                                <div class="d-flex">
                                    <button id="7" type="button" data-block="7"
                                        class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                        data-bs-target="#ColorSelectModal" data-whatever="7"
                                        style="margin-right: 4px;">
                                        文字カラー
                                    </button>
                                    <input type="text" value="" class="radi select2 textbox-grow"
                                        id="fontcolor7" name="文字カラー[]" style="border: 1px solid #e2e5e9;"
                                        form="form1">
                                </div>
                            </div>

                            <div class="product__files" id="fuchidori_style">
                                <div class="d-flex">
                                    <button id="7" type="button" data-block="7"
                                        class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                        data-bs-target="#FuchiDoriModal" data-whatever="7"
                                        style="margin-right: 4px;">
                                        縁取り
                                    </button>
                                    <input type="text" value="" class="radi select2 textbox-grow"
                                        id="fuchidori7" name="縁取り[]" style="border: 1px solid #e2e5e9;"
                                        form="form1">
                                </div>
                            </div>

                            <div id="hide7">
                            <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                                <div class="d-flex">
                                    <button id="7" type="button" data-block="7"
                                        class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                        data-bs-target="#ColorSelectFontModal" data-whatever="7"
                                        style="margin-right: 4px;">
                                        文字縁カラー
                                    </button>
                                    <input type="text" class="radi select2 textbox-grow" id="fontcolor_fuchidori7"
                                        name="文字縁カラー[]" style="border: 1px solid #e2e5e9;" form="form1">
                                </div>
                            </div>
                            </div>


                            <div class="product__files" id="textbox">
                                <div class="d-flex">
                                    <button id="7" type="button" data-block="7"
                                        class="btn btn-primary part w-50" data-bs-toggle="" data-whatever="7"
                                        data-bs-target="" style="margin-right: 4px;">
                                        テキスト
                                    </button>
                                    <input type="text" value="" class="radi select2 textbox-grow"
                                        id="text7" name="テキスト[]" style="border: 1px solid #e2e5e9;"
                                        form="form1">
                                </div>
                            </div>
                            </form>
                            <!--
                    <div class="product__files">
                        <div class="d-flex">
                            <button id="7" type="button"
                                class="btn btn-secondary part btn-send w-100 delete" data-bs-toggle="modal"
                                data-bs-target="" style="margin-right: 4px;">
                                プリントをクリア
                            </button>
                        </div>
                    </div>
                -->
                        </section><!--#wrap7はここまでにする -->






                        <!-- 8 -->
                        <template id="js-template8">
                            <!--以下プリントを追加要素 -->
                            <section id = "wrap8">

                                <hr style="border-width: thick;">

                                <div class="product__files">
                                    <div class="d-flex">
                                        <button id="addprint" type="button" data-block="8"
                                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                            data-bs-target="#AddPrintModal" data-block="8"
                                            style="margin-right: 4px;">
                                            プリント箇所
                                        </button>
                                        <input type="text" value="" class="radi select2 textbox-grow"
                                            id="addprint8" name="プリント箇所[]" style="border: 1px solid #e2e5e9;"
                                            form="form1">
                                    </div>
                                </div>


                                <div class="product__files" id="textbox">
                                    <div class="d-flex">
                                        <button id="1" type="button" class="btn btn-primary part w-50"
                                            data-bs-toggle="" data-bs-target="" style="margin-right: 4px;">
                                            加工費
                                        </button>
                                        <input type="text" value=""
                                            class="radi select2 textbox-grow processing_cost" id="print_price8"
                                            data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;"
                                            form="form1" readonly>
                                    </div>
                                </div>



                                <div class="product__files">
                                    <div class="d-flex">
                                        <button id="8" type="button" data-block="8"
                                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                            data-bs-target="#FontSelectModal" data-whatever="8"
                                            style="margin-right: 4px;">
                                            書 体
                                        </button>
                                        <input type="text" value="" class="radi select2 textbox-grow"
                                            id="font8" name="書体[]" style="border: 1px solid #e2e5e9;"
                                            form="form1">
                                    </div>
                                </div>

                                <div class="product__files">
                                    <div class="d-flex">
                                        <button id="8" type="button" data-block="8"
                                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                            data-bs-target="#ColorSelectModal" data-whatever="8"
                                            style="margin-right: 4px;">
                                            文字カラー
                                        </button>
                                        <input type="text" value="" class="radi select2 textbox-grow"
                                            id="fontcolor8" name="文字カラー[]" style="border: 1px solid #e2e5e9;"
                                            form="form1">
                                    </div>
                                </div>

                                <div class="product__files" id="fuchidori_style">
                                    <div class="d-flex">
                                        <button id="8" type="button" data-block="8"
                                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                            data-bs-target="#FuchiDoriModal" data-whatever="8"
                                            style="margin-right: 4px;">
                                            縁取り
                                        </button>
                                        <input type="text" value="" class="radi select2 textbox-grow"
                                            id="fuchidori8" name="縁取り[]" style="border: 1px solid #e2e5e9;"
                                            form="form1">
                                    </div>
                                </div>

                                <div id="hide8">
                                <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                                    <div class="d-flex">
                                        <button id="8" type="button" data-block="8"
                                            class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                            data-bs-target="#ColorSelectFontModal" data-whatever="8"
                                            style="margin-right: 4px;">
                                            文字縁カラー
                                        </button>
                                        <input type="text" class="radi select2 textbox-grow"
                                            id="fontcolor_fuchidori8" name="文字縁カラー[]"
                                            style="border: 1px solid #e2e5e9;" form="form1">
                                    </div>
                                </div>
                                </div>


                                <div class="product__files" id="textbox">
                                    <div class="d-flex">
                                        <button id="8" type="button" data-block="8"
                                            class="btn btn-primary part w-50" data-bs-toggle="" data-whatever="8"
                                            data-bs-target="" style="margin-right: 4px;">
                                            テキスト
                                        </button>
                                        <input type="text" value="" class="radi select2 textbox-grow"
                                            id="text8" name="テキスト[]" style="border: 1px solid #e2e5e9;"
                                            form="form1">
                                    </div>
                                </div>
                                </form>

                                <!--
                    <div class="product__files">
                        <div class="d-flex">
                            <button id="8" type="button"
                                class="btn btn-secondary part btn-send w-100 delete" data-bs-toggle="modal"
                                data-bs-target="" style="margin-right: 4px;">
                                プリントをクリア
                            </button>
                        </div>
                    </div>
                -->
                            </section><!--#wrap8はここまでにする -->






                            <!-- 9 -->
                            <template id="js-template9">
                                <!--以下プリントを追加要素 -->
                                <section id = "wrap9">

                                    <hr style="border-width: thick;">

                                    <div class="product__files">
                                        <div class="d-flex">
                                            <button id="addprint" type="button" data-block="9"
                                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                                data-bs-target="#AddPrintModal" data-block="9"
                                                style="margin-right: 4px;">
                                                プリント箇所
                                            </button>
                                            <input type="text" value="" class="radi select2 textbox-grow"
                                                id="addprint9" name="プリント箇所[]" style="border: 1px solid #e2e5e9;"
                                                form="form1">
                                        </div>
                                    </div>


                                    <div class="product__files" id="textbox">
                                        <div class="d-flex">
                                            <button id="1" type="button"
                                                class="btn btn-primary part w-50" data-bs-toggle=""
                                                data-bs-target="" style="margin-right: 4px;">
                                                加工費
                                            </button>
                                            <input type="text" value=""
                                                class="radi select2 textbox-grow processing_cost" id="print_price9"
                                                data-block="1" name="プリント加工費[]" style="border: 1px solid #e2e5e9;"
                                                form="form1" readonly>
                                        </div>
                                    </div>



                                    <div class="product__files">
                                        <div class="d-flex">
                                            <button id="9" type="button" data-block="9"
                                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                                data-bs-target="#FontSelectModal" data-whatever="9"
                                                style="margin-right: 4px;">
                                                書 体
                                            </button>
                                            <input type="text" value="" class="radi select2 textbox-grow"
                                                id="font9" name="書体[]" style="border: 1px solid #e2e5e9;"
                                                form="form1">
                                        </div>
                                    </div>

                                    <div class="product__files">
                                        <div class="d-flex">
                                            <button id="9" type="button" data-block="9"
                                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                                data-bs-target="#ColorSelectModal" data-whatever="9"
                                                style="margin-right: 4px;">
                                                文字カラー
                                            </button>
                                            <input type="text" value="" class="radi select2 textbox-grow"
                                                id="fontcolor9" name="文字カラー[]" style="border: 1px solid #e2e5e9;"
                                                form="form1">
                                        </div>
                                    </div>

                                    <div id="hide9">
                                    <div class="product__files" id="fuchidori_style">
                                        <div class="d-flex">
                                            <button id="9" type="button" data-block="9"
                                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                                data-bs-target="#FuchiDoriModal" data-whatever="9"
                                                style="margin-right: 4px;">
                                                縁取り
                                            </button>
                                            <input type="text" value="" class="radi select2 textbox-grow"
                                                id="fuchidori9" name="縁取り[]" style="border: 1px solid #e2e5e9;"
                                                form="form1">
                                        </div>
                                    </div>
                                    </div>

                                    <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                                        <div class="d-flex">
                                            <button id="9" type="button" data-block="9"
                                                class="btn btn-primary part btn-send w-50" data-bs-toggle="modal"
                                                data-bs-target="#ColorSelectFontModal" data-whatever="9"
                                                style="margin-right: 4px;">
                                                文字縁カラー
                                            </button>
                                            <input type="text" class="radi select2 textbox-grow"
                                                id="fontcolor_fuchidori9" name="文字縁カラー[]"
                                                style="border: 1px solid #e2e5e9;" form="form1">
                                        </div>
                                    </div>



                                    <div class="product__files" id="textbox">
                                        <div class="d-flex">
                                            <button id="9" type="button" data-block="9"
                                                class="btn btn-primary part w-50" data-bs-toggle=""
                                                data-whatever="9" data-bs-target="" style="margin-right: 4px;">
                                                テキスト
                                            </button>
                                            <input type="text" value="" class="radi select2 textbox-grow"
                                                id="text9" name="テキスト[]" style="border: 1px solid #e2e5e9;"
                                                form="form1">
                                        </div>
                                    </div>
                                    </form>

                                    <!--
                    <div class="product__files">
                        <div class="d-flex">
                            <button id="9" type="button"
                                class="btn btn-secondary part btn-send w-100 delete" data-bs-toggle="modal"
                                data-bs-target="" style="margin-right: 4px;">
                                プリントをクリア
                            </button>
                        </div>
                    </div>
                -->
                                </section><!--#wrap9はここまでにする -->





                                <!-- 10 -->
                                <template id="js-template10">
                                    <!--以下プリントを追加要素 -->
                                    <section id = "wrap10">

                                        <hr style="border-width: thick;">

                                        <div class="product__files">
                                            <div class="d-flex">
                                                <button id="addprint" type="button" data-block="10"
                                                    class="btn btn-primary part btn-send w-50"
                                                    data-bs-toggle="modal" data-bs-target="#AddPrintModal"
                                                    data-block="10" style="margin-right: 4px;">
                                                    プリント箇所
                                                </button>
                                                <input type="text" value=""
                                                    class="radi select2 textbox-grow" id="addprint10"
                                                    name="プリント箇所[]" style="border: 1px solid #e2e5e9;"
                                                    form="form1">
                                            </div>
                                        </div>


                                        <div class="product__files" id="textbox">
                                            <div class="d-flex">
                                                <button id="1" type="button"
                                                    class="btn btn-primary part w-50" data-bs-toggle=""
                                                    data-bs-target="" style="margin-right: 4px;">
                                                    加工費
                                                </button>
                                                <input type="text" value=""
                                                    class="radi select2 textbox-grow processing_cost"
                                                    id="print_price10" data-block="1" name="プリント加工費[]"
                                                    style="border: 1px solid #e2e5e9;" form="form1" readonly>
                                            </div>
                                        </div>




                                        <div class="product__files">
                                            <div class="d-flex">
                                                <button id="10" type="button" data-block="10"
                                                    class="btn btn-primary part btn-send w-50"
                                                    data-bs-toggle="modal" data-bs-target="#FontSelectModal"
                                                    data-whatever="10" style="margin-right: 4px;">
                                                    書 体
                                                </button>
                                                <input type="text" value=""
                                                    class="radi select2 textbox-grow" id="font10"
                                                    name="書体[]" style="border: 1px solid #e2e5e9;"
                                                    form="form1">
                                            </div>
                                        </div>

                                        <div class="product__files">
                                            <div class="d-flex">
                                                <button id="10" type="button" data-block="10"
                                                    class="btn btn-primary part btn-send w-50"
                                                    data-bs-toggle="modal" data-bs-target="#ColorSelectModal"
                                                    data-whatever="9" style="margin-right: 4px;">
                                                    文字カラー
                                                </button>
                                                <input type="text" value=""
                                                    class="radi select2 textbox-grow" id="fontcolor10"
                                                    name="文字カラー[]" style="border: 1px solid #e2e5e9;"
                                                    form="form1">
                                            </div>
                                        </div>

                                        <div class="product__files" id="fuchidori_style">
                                            <div class="d-flex">
                                                <button id="10" type="button" data-block="10"
                                                    class="btn btn-primary part btn-send w-50"
                                                    data-bs-toggle="modal" data-bs-target="#FuchiDoriModal"
                                                    data-whatever="9" style="margin-right: 4px;">
                                                    縁取り
                                                </button>
                                                <input type="text" value=""
                                                    class="radi select2 textbox-grow" id="fuchidori10"
                                                    name="縁取り[]" style="border: 1px solid #e2e5e9;"
                                                    form="form1">
                                            </div>
                                        </div>

                                        <div id="hide10">
                                        <div class="product__files fontcolor_fuchidori1" id="fontcolor_fuchidori">
                                            <div class="d-flex">
                                                <button id="10" type="button" data-block="10"
                                                    class="btn btn-primary part btn-send w-50"
                                                    data-bs-toggle="modal" data-bs-target="#ColorSelectFontModal"
                                                    data-whatever="9" style="margin-right: 4px;">
                                                    文字縁カラー
                                                </button>
                                                <input type="text" class="radi select2 textbox-grow"
                                                    id="fontcolor_fuchidori10" name="文字縁カラー[]"
                                                    style="border: 1px solid #e2e5e9;" form="form1">
                                            </div>
                                        </div>
                                        </div>


                                        <div class="product__files" id="textbox">
                                            <div class="d-flex">
                                                <button id="10" type="button" data-block="10"
                                                    class="btn btn-primary part w-50" data-bs-toggle=""
                                                    data-whatever="10" data-bs-target=""
                                                    style="margin-right: 4px;">
                                                    テキスト
                                                </button>
                                                <input type="text" value=""
                                                    class="radi select2 textbox-grow" id="text10"
                                                    name="テキスト[]" style="border: 1px solid #e2e5e9;"
                                                    form="form1">
                                            </div>
                                        </div>
                                        </form>

                                        <!--
                    <div class="product__files">
                        <div class="d-flex">
                            <button id="10" type="button"
                                class="btn btn-secondary part btn-send w-100 delete" data-bs-toggle="modal"
                                data-bs-target="" style="margin-right: 4px;">
                                プリントをクリア
                            </button>
                        </div>
                    </div>
                -->
                                    </section><!--#wrap10はここまでにする -->






                                    <!-- 11 -->
                                    <template id="js-template11">
                                        <!--以下プリントを追加要素 -->
                                        <section id = "wrap11">

                                            <hr style="border-width: thick;">

                                            <div class="product__files">
                                                <div class="d-flex">
                                                    <button id="addprint" type="button" data-block="11"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#AddPrintModal"
                                                        data-block="11" style="margin-right: 4px;">
                                                        プリント箇所
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="addprint11"
                                                        name="プリント箇所[]" style="border: 1px solid #e2e5e9;"
                                                        form="form1">
                                                </div>
                                            </div>


                                            <div class="product__files" id="textbox">
                                                <div class="d-flex">
                                                    <button id="1" type="button"
                                                        class="btn btn-primary part w-50" data-bs-toggle=""
                                                        data-bs-target="" style="margin-right: 4px;">
                                                        加工費
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow processing_cost"
                                                        id="print_price11" data-block="1" name="プリント加工費[]"
                                                        style="border: 1px solid #e2e5e9;" form="form1" readonly>
                                                </div>
                                            </div>



                                            <div class="product__files">
                                                <div class="d-flex">
                                                    <button id="11" type="button" data-block="11"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#FontSelectModal"
                                                        data-whatever="10" style="margin-right: 4px;">
                                                        書 体
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="font11"
                                                        name="書体[]" style="border: 1px solid #e2e5e9;"
                                                        form="form1">
                                                </div>
                                            </div>

                                            <div class="product__files">
                                                <div class="d-flex">
                                                    <button id="11" type="button" data-block="11"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#ColorSelectModal"
                                                        data-whatever="9" style="margin-right: 4px;">
                                                        文字カラー
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="fontcolor11"
                                                        name="文字カラー[]" style="border: 1px solid #e2e5e9;"
                                                        form="form1">
                                                </div>
                                            </div>

                                            <div class="product__files" id="fuchidori_style">
                                                <div class="d-flex">
                                                    <button id="11" type="button" data-block="11"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal" data-bs-target="#FuchiDoriModal"
                                                        data-whatever="9" style="margin-right: 4px;">
                                                        縁取り
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="fuchidori11"
                                                        name="縁取り[]" style="border: 1px solid #e2e5e9;"
                                                        form="form1">
                                                </div>
                                            </div>

                                            <div id="hide11">
                                            <div class="product__files fontcolor_fuchidori1"
                                                id="fontcolor_fuchidori">
                                                <div class="d-flex">
                                                    <button id="11" type="button" data-block="11"
                                                        class="btn btn-primary part btn-send w-50"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ColorSelectFontModal" data-whatever="9"
                                                        style="margin-right: 4px;">
                                                        文字縁カラー
                                                    </button>
                                                    <input type="text" class="radi select2 textbox-grow"
                                                        id="fontcolor_fuchidori11" name="文字縁カラー[]"
                                                        style="border: 1px solid #e2e5e9;" form="form1">
                                                </div>
                                            </div>
                                            </div>


                                            <div class="product__files" id="textbox">
                                                <div class="d-flex">
                                                    <button id="11" type="button" data-block="11"
                                                        class="btn btn-primary part w-50" data-bs-toggle=""
                                                        data-whatever="11" data-bs-target=""
                                                        style="margin-right: 4px;">
                                                        テキスト
                                                    </button>
                                                    <input type="text" value=""
                                                        class="radi select2 textbox-grow" id="text11"
                                                        name="テキスト[]" style="border: 1px solid #e2e5e9;"
                                                        form="form1">
                                                </div>
                                            </div>
                                            </form>

                                            <!--
                    <div class="product__files">
                        <div class="d-flex">
                            <button id="11" type="button"
                                class="btn btn-secondary part btn-send w-100 delete" data-bs-toggle="modal"
                                data-bs-target="" style="margin-right: 4px;">
                                プリントをクリア
                            </button>
                        </div>
                    </div>
                -->
                                        </section><!--#wrap11はここまでにする -->


                                    </template>
