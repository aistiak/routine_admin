<?php

   if($_SERVER['REQUEST_METHOD'] === 'POST'){

       $old_pass = $_POST['oldpass'];
       $new_user = $_POST['newUserName'];
       $new_pass = $_POST['newPass'];

       // open db connection 
       class MyDB extends SQLite3 {
           function __construct(){
               $this->open('test.db');
           }
       }

       $db = new MyDB();
       if(!$db){
          echo $db->lastErrorMsg(); 
       }

  
$sql =<<<EOF
update credential set user_name = '$new_user' , pass = '$new_pass' where pass = '$old_pass';
EOF;


       $ret = $db->exec($sql);   
       $db->close();
     

   }
?>