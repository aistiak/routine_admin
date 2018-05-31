// if any input field is chnaged in document 
// dynamicallly created elemets do not get event listeners 
// so the listenner is attached to its/there(dynamically created element) parent 
$(document).ready(function(){
 
    $("#live_hint").html("");
    $(document).on("change paste keyup",
    "input", function () {
        $("#live_hint").html("unsaved changes");
        $("#live_hint").css("color",
            "red");
        //saveAll();
    }); 


});




