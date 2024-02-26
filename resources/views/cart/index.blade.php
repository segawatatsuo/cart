<?php
// array jGetInputData( [ string $type , [ string $str , [ bool $del_null_byte ] ] ] )
//   $type          : 'POST' / 'GET'（デフォルトは POST）
//   $str           : 生データを指定したい場合
//   $del_null_byte : ヌルバイトを削除するか（デフォルトは TRUE）
//   return         : POST / GET データを配列で返します。

/*
function jGetInputData($type = 'post', $str = null, $del_null_byte = true) {
  if ($str === null) {
    switch (strtolower($type)) {
      case 'get': // GET の生データを取得
        $str = $_SERVER["QUERY_STRING"];
        break;
      case 'post': // POST の生データを取得
      default:
        $str = file_get_contents("php://input");
    }
  }

  if (!is_string($str)) return false;
  if (trim($str) === '') return array(); // 何もなし

  // 「&」が含まれていれば分解
  $datas = (strpos($str, '&') === false) ? array($str) : explode('&', $str);
  $rtn = array();

  foreach($datas as $data) {
    $name = null;
    $val = null;

    if (strpos($data, '=') === false) {
      $name = urldecode($data);
    } else {
      $_tmp = explode('=', $data, 2);
      $name = urldecode($_tmp[0]);
      $val = urldecode($_tmp[1]);
    }

    if (!isset($rtn[$name])) {
      // アイテム名が存在しなければそのまま代入
      $rtn[$name] = $val;
    } else {
      if (!is_array($rtn[$name])) {
        // アイテム名の変数が存在し、
        // アイテム名の配列が存在しなければ配列にする
        $rtn[$name] = array($rtn[$name]);
      }
      // 新しい値を配列に追加
      $rtn[$name][] = $val;
    }
  }

  if ($del_null_byte) {
    $rtn = jDelNullbyte($rtn);
  }

  return $rtn;
}

function jDelNullbyte($data) {
    if (is_array($data)) {
        return array_map('jDelNullbyte', $data);
    }

    return str_replace("\0", '', $data);
}



  $_POST = jGetInputData();

var_dump(jGetInputData());

*/

//print_r($_POST);

foreach ($_POST as $key => $value) {
  print($key."=>".$value);
  print("<br>");
}
?>

