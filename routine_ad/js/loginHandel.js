var id_idx = [];
id_idx[0] = 0;

$(document).ready(function () {

    
    $("#main").hide();

    //document.getElementById("user").placeholder = "user" ;

    var user = $("#user").attr("placeholder",
        "user");
    var pass = $("#pass").attr("placeholder",
        "password");

    $("#login-btn").click(function () {


        var user_val = user.val();
        var pass_val = pass.val();
        $.post(LOGIN_URL,
            {
                user: user_val, pass: pass_val
            }, function (data, status) {
                //console.log("data :" + data);
                // console.log("user_val :" + user_val);
                if (data == user_val && data != "") {
                    $("#main").show();
                    $("#login").hide();
                    $("#live_hint").html("");
                } else {

                    $("#warn").html("user or password is  incorrect ");
                }
            });
    });



});