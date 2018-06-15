// if any input field is chnaged in document 
// dynamicallly created elemets do not get event listeners 
// so the listenner is attached to its/there(dynamically created element) parent 
$(document).ready(function(){
 
    $("#live_hint").html("");
    $(document).on("change paste keyup",
    "input", function () {
        unmark(); 
        $("#live_hint").html("unsaved changes");
        $("#live_hint").css("color",
            "red");
        alert_flag = 1;    
        //saveAll();
    }); 


});

function unmark() {
    //$("input").css({"background-color":"red"});
    $("input").each(function(){
  
      if(isNaN(this.value)){
  
      
        // this.value = "set";
         $(this).css({"background-color":"white"});  
       
      }
    });
  }



