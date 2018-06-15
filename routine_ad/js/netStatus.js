$(document).ready(function(){

    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOfflineStatus);

});

function updateOnlineStatus()
{
    document.getElementById("status").innerHTML = "User is online";
    $("#live_hint").html("");
    $("#status").css("color",
    "green");
}

function updateOfflineStatus()
{
    document.getElementById("status").innerHTML = "User is offline " ;
    $("#status").css("color",
    "black");
    $("#live_hint").html("changes will not be saved ");
    $("#live_hint").css("color",
    "red");
    alert("Changes won`t be saved ");
}

