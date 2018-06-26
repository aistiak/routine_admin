$(document).ready(function(){
    
    $("#slect_sem").click(function(){
		if(alert_flag == 1){
			 console.log("alert ");
		   alert("Changes will not be saved");
		   alert_flag = 0 ;
		}
	});
});