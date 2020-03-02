<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
// POST DATA
$data = json_decode(file_get_contents("php://input"));
echo "<script>console.log( 'PHP_Console: asdf' );</script>";


if(isset($data->writer)
	&& isset($data->title)
	&& isset($data->cont)
	&& !empty(trim($data->writer)) 
	&& !empty(trim($data->title))
	&& !empty(trim($data->cont))
	){
    $writer = mysqli_real_escape_string($db_conn, trim($data->writer));
    $title = mysqli_real_escape_string($db_conn, trim($data->title));
    $cont = mysqli_real_escape_string($db_conn, trim($data->cont));
    $writetime = mysqli_real_escape_string($db_conn, date("Y-m-d H:i:s"));
    $insertPost = mysqli_query($db_conn,"INSERT INTO `posts`(`writer`,`title`,`cont`,`writetime`) VALUES('$writer','$title','$cont','$writetime')");
    if($insertPost){
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success"=>0,"msg"=>"질문이 등록되었습니다."]);
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"제출 실패! 다시 시도해주세요"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"빠진 입력이 없는지 확인해주세요"]);
}
?>