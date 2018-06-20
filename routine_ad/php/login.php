<?php

 if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    


    $var = file_get_contents("asdf");
    $temp = base64_decode($var) ;
    $myObj = json_decode($temp); 
    $name = $myObj->name ;
    $fpass = $myObj->pass ;


    if($user === $name && $pass === $fpass){
  
       echo $user ;
    } 

 }

?>