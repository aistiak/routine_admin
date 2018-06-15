$(document).ready(function(){
    
    $("#slect_sem").click(function(){
		if(alert_flag == 1){
		   alert("Changes will not be saved");
		   alert_flag = 0 ;
		}
	});
});