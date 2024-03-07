<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
        crossorigin="anonymous"></script>
</head>

<body>

    <span id="itemNo">p175</span>
    <span id="selected_image1">black</span>

    <a href="./product/hoge?itemNo=p175&color=black">aaa</a>

    <button type="submit" id="サイズ">クリックしてね</button>

    <div id="user_name">

    </div>

    <select id="PullDownList">
        <option>選択してください</option>
    </select>

    <script>
        $('#サイズ').click(function() {
            //alert($('#selected_image1').val());
            if ($('#selected_image1').text() == '') {
                alert('アイテムカラーを選択してください');
            } else {
                var itemNo = "";
                var color = "";
                itemNo = $('#itemNo').text();
                color = $('#selected_image1').text();

                //プルダウンがある場合全部削除しておかないと2重3重になる
                var formElement = document.getElementById('PullDownList');
                while (formElement.lastChild) {
                    formElement.removeChild(formElement.lastChild);
                }

                $.ajax({
                    url: './product/get_size?itemNo=' + itemNo + '&color=' + color,
                    //url: './product/hoge?itemNo=p175&color=black',
                    type: 'GET',
                    dataType: "json",
                }).done(function(data) {
                    // 取得成功
                    //取得jsonデータ
                    var data_stringify = JSON.stringify(
                        data
                    ); //[{"size":"110"},{"size":"120"},{"size":"130"},{"size":"140"},{"size":"150"},{"size":"S"},{"size":"M"},{"size":"L"},{"size":"XL"},{"size":"XXL"}]
                    var data_json = JSON.parse(data_stringify);

                    //jsonデータから各データを取得
                    //var size = "";
                    //if (data_json[0] != null) {
                    //    size = data_json[0]["size"];
                    //}

                    /*
                    const size_data = [];
                    Object.keys(data_json).forEach(function(key) {
                        //console.log(data_json[key]["size"]);
                        size_data.push(data_json[key]["size"]);
                    });
                    $('#user_name').text(size_data); //結果を表示
                    */


                    document.getElementById("PullDownList").value = '';

                    for (var i = 0; i < data_json.length; i++) {
                        let opt = document.createElement("option");
                        opt.value = data_json[i]["size"]; //value値
                        opt.text = data_json[i]["size"]; //テキスト値
                        document.getElementById("PullDownList").appendChild(opt);
                    }



                }).fail(function(data) {
                    // 取得失敗
                    alert('データ取得出来ませんでした。');
                });
            }
        });
    </script>

</body>

</html>
