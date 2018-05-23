<?php

 if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    if($user === "ict" && $pass == "deptofict"){
  
       echo $user ;
    } 

 }

?>