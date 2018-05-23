<?php

   if ($_SERVER['REQUEST_METHOD'] === 'GET'){
	    //$js_string = $_GET['js_string'];
		
		//echo "hello"."  ".$js_string  ;
		
		$string = file_get_contents("data.json");
        $json= json_encode($string);
		
		
		
	echo $string ;	  
		
		

		
	    
   }

?>