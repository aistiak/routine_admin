<?php
   class MyDB extends SQLite3 {
      function __construct() {
         $this->open('test.db');
      }
   }
   $db = new MyDB();
   if(!$db) {
      echo $db->lastErrorMsg();
   } else {
     // echo "Opened database successfully\n";
   }

   $sql =<<<EOF
       select * from credential ;
EOF;

   $ret = $db->query($sql);
   if(!$ret){
      echo $db->lastErrorMsg();
   } else {
     // echo "successfull\n";
   }

    while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
   
        $name  =  $row['user_name'];
        $fpass =  $row['pass'];
    
    }

    echo $name."<br>" ;
    echo $fpass ;

  
   $db->close();
?>