<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <span id="itemNo">p175</span>

    <a href="./product/hoge?itemNo=p175&color=black">aaa</a>

    <button name="button" id="サイズ">クリックしてね</button>

    <script>
        $('#サイズ').click(function() {
            //alert($('#selected_image1').val());
            if ($('#selected_image1').val() == '') {
                alert('アイテムカラーを選択してください');
            } else {
                var itemNo = "";
                var color = "";
                itemNo = $('#itemNo').text();
                color = $('#selected_image1').val();
                //alert('./get_size?itemNo=' + itemNo + '&color=' + color);
                //<a href="./product/hoge?itemNo=p175&color=black">aaa</a>
                $.ajax({
                    url: './product/get_size?itemNo=' + itemNo + '&color=' + color,//このURLのルートでコントローラーを指定してデータを取得
                    type: 'GET',
                    dataType: "json",
                }).done(function(data) {
                    // 取得成功
                    //取得jsonデータ
                    var data_stringify = JSON.stringify(data);
                    var data_json = JSON.parse(data_stringify);
                    //jsonデータから各データを取得
                    var id = "";
                    var name = "";
                    if (data_json[0] != null) {
                        id = data_json[0]["id"];
                        name = data_json[0]["name"];
                    }
    
                    $('#user_name').val(name);//結果を表示
    
                }).fail(function(data) {
                    // 取得失敗
                    alert('データ取得出来ませんでした。');
                });
            }
        });
    </script>

</body>
</html>