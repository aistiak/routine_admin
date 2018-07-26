$(document).ready(function () {

    var warning = $("#err_warning");





    $("#submitBtn").click(function () {
        var flag = 0 ;
        var old_pass = $("#oldpass").val().replace(/\s/g, '');
        var new_user = $("#newuser").val().replace(/\s/g, '');
        var new_pass = $("#newpass").val().replace(/\s/g, '');
        var str = "";
        console.log("old password :" + old_pass.replace(/\s/g, '').length);

        if (new_pass.length < 6) {
            // new password cant less then 6 char 

            //warning.html("new password has to be atleast 6 charecters");
            str += "New Password has to be atleast 6 charecters<br>";
            flag = 1;
        } if (new_user.length == 0) {
            //warning.html("user name can not be null ");
            str += "User Name can not be null <br>";
            flag = 1;
        } if (new_user.length < 3) {
            //warning.html("user name has to be atleast 3 charecter long ");
            str += "User Name has to be atleast 3 charecter long <br>";
            flag = 1;
        }



        $.post(CHANGE_PASS_URL,
            {
                oldpass: old_pass,
                newUserName: new_user,
                newPass: new_pass
            },
            function (data, status) {
                //window.location.replace("index.html");
                console.log( "returned data : "+ data);
                if(data == "error"){
                    str+="<b>Old Password is incorrect <b>";
                    flag = 1;
                }
                console.log("not empty");
                warning.html(str);
                warning.css("color","red");
                if(flag == 0){ // if the flag is never set indicating an error never occured 
                 window.location = "index.html" ;
                }
            });



    });
});