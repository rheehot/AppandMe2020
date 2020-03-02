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

if(isset($data->code) 
	&& isset($data->name)
	&& isset($data->self)
	&& isset($data->why)
	&& isset($data->t1)
	&& isset($data->t2)
	&& isset($data->t3)
	&& isset($data->t4)
	&& isset($data->t5)
	&& !empty(trim($data->code)) 
	&& !empty(trim($data->name))
	&& !empty(trim($data->self))
	&& !empty(trim($data->why))
	&& !empty(trim($data->t1))
	&& !empty(trim($data->t2))
	&& !empty(trim($data->t3))
	&& !empty(trim($data->t4))
	&& !empty(trim($data->t5))
	){
    $code = mysqli_real_escape_string($db_conn, trim($data->code));
    $name = mysqli_real_escape_string($db_conn, trim($data->name));
    $self = mysqli_real_escape_string($db_conn, trim($data->self));
    $why = mysqli_real_escape_string($db_conn, trim($data->why));
    $t1 = mysqli_real_escape_string($db_conn, trim($data->t1));
    $t2 = mysqli_real_escape_string($db_conn, trim($data->t2));
    $t3 = mysqli_real_escape_string($db_conn, trim($data->t3));
    $t4 = mysqli_real_escape_string($db_conn, trim($data->t4));
    $t5 = mysqli_real_escape_string($db_conn, trim($data->t5));
    $insertUser = mysqli_query($db_conn,"INSERT INTO `users`(`code`,`name`,`self`,`why`,`t1`,`t2`,`t3`,`t4`,`t5`) VALUES('$code','$name','$self','$why','$t1','$t2','$t3','$t4','$t5')");
    if($insertUser){
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success"=>0,"msg"=>"App&Me 지원 성공!\n수고하셨습니다"]);
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"제출 실패! 다시 시도해주세요"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"빠진 입력이 없는지 확인해주세요"]);
}
?>