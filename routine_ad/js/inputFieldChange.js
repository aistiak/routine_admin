// if any input field is chnaged in document 
// dynamicallly created elemets do not get event listeners 
// so the listenner is attached to its/there(dynamically created element) parent 
$(document).ready(function () {

    $("#live_hint").html("");
    $(document).on("change paste keyup",
        "input", function () {


            unmark();
            markOnChange();

            $("#live_hint").html("unsaved changes");
            $("#live_hint").css("color",
                "red");
            alert_flag = 1;
            //saveAll();
        });


});

function markOnChange() {

    $(".time_inp").each(function () {
        console.log("changed");
        if (isNaN(this.value)) { // if not a number 
            $(this).css({ "background-color": "#778899" });
            $("#live_hint").html("Time has to be numeric");

        } else {
            $(this).css({ "background-color": "white" });
        }
    });
}

function unmark() {
    //$("input").css({"background-color":"red"});
    $("input").each(function () {

        if (this.value.length != 0) {


            // this.value = "set";
            $(this).css({ "background-color": "white" });

        } else {
            $(this).css({ "background-color": "#f08080" });
            $("#live_hint").html("Field can not be empty");

        }
    });
}



