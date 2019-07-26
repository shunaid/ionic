<?php


header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

include('data.php');

 $postjson = json_decode(file_get_contents("php://input"),true);


  if($postjson['aksi']=='homepage'){
    
    $sql = "INSERT INTO smsdata (message) values ($postjson['message']) ";

    $query = mysqli_query($mysqli, $sql);

    $idcust= mysqli_insert_id($mysqli);
    
    if($query) {
      $result = json_encode(array('success' => true,'id' => $idcust));
    }
    else {
      $result = json_encode(array("success" => $sql));
      }
      
    echo $result;

  }else{
   echo json_encode(array('success' => false, 'msg' => 'in else condition'));
 }



