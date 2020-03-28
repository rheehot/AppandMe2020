<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$db_conn = mysqli_connect("3.12.245.245","sookhee","gkh10004","appandme");

$data = json_decode(file_get_contents("php://input"));

if(isset($data->code) 
	&& isset($data->name)
	&& isset($data->self)
	&& isset($data->why)
	&& isset($data->five)
	&& !empty(trim($data->code)) 
	&& !empty(trim($data->name))
	&& !empty(trim($data->self))
	&& !empty(trim($data->why))
	&& !empty(trim($data->five))
	){
    $code = mysqli_real_escape_string($db_conn, trim($data->code));
    $name = mysqli_real_escape_string($db_conn, trim($data->name));
    $self = mysqli_real_escape_string($db_conn, trim($data->self));
    $why = mysqli_real_escape_string($db_conn, trim($data->why));
    $five = mysqli_real_escape_string($db_conn, trim($data->five));
    $insertUser = mysqli_query($db_conn,"INSERT INTO `users`(`code`,`name`,`self`,`why`,`five`) VALUES('$code','$name','$self','$why','$five')");
    if($insertUser){
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success"=>0,"msg"=>"앱앤미에 지원해주셔서 감사합니다!\n기타 문의사항은 앱앤미 페이스북 페이지를 이용해주세요"]);
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"빠지거나 잘못된 항목이 없는지 다시 한 번 확인해주세요"]);
        
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"false"]);
    $insertUser = mysqli_query($db_conn,"INSERT INTO `users`(`code`,`name`,`self`,`why`,`five`) VALUES('1234','a','b','c','d')");
}
?>