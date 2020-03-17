<?php
$db_conn = mysqli_connect("3.133.47.227","sookhee","gkh10004","appandme");
if($db_conn) echo "<script>console.log('complete!');</script>";
else echo "<script>console.log('false..');</script>";
?>