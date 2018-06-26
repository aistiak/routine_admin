<?php

   if ($_SERVER['REQUEST_METHOD'] === 'POST'){
	    $js_string = $_POST['js_string'];
		
		$file = "data.json";
		file_put_contents($file,$js_string);		
	    
   }

?>