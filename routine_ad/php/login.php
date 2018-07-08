<?php

 if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $user = $_POST['user'];
    $pass = $_POST['pass'];

     // open db connection 
     class MyDB extends SQLite3 {
        function __construct() {
           $this->open('test.db');
        }
     }
     $db = new MyDB();
     if(!$db) {
        echo $db->lastErrorMsg();
     } else {
        //echo "Opened database successfully\n";
     }

       
     $sql =<<<EOF
     select * from credential ;
EOF;

    $ret = $db->query($sql);
    
    while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
   
     $name  =  $row['user_name'];
     $fpass =  $row['pass'];
    
    }

    
   
  /*
   
    $var = file_POST_contents("asdf");
    $temp = base64_decode($var) ;
    $myObj = json_decode($temp); 
    $name = $myObj->name ;
    $fpass = $myObj->pass ; 

    */ 
    
    if($user === $name && $pass === $fpass){
  
       echo $user ;
    }
    $db->close();

 }

?>