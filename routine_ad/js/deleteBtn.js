$(document).ready(function () {


    $("ul").on("click",
        "button", function (e) {
            e.preventDefault();
            var idx = $(this).parent().index();
            $(this).parent().remove();
            saveAll();
            return false;
        });
});