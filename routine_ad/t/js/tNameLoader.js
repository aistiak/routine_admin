$(document).ready(function () {


    //todo get teacher name list 

    $.get(HANDEL_URL,
        {
            "_": $.now()
        }, function (data, status) {



            $("#data").html("ok");
            var obj = JSON.parse(data);

            var txt = "";


            var dept = new Object();


            for (var i = 0; i < obj.length; i++) {
                if (obj[i
                ].dept_name == "ict") {
                    dept = obj[i
                    ]; // holding ict dept 
                }
            }


            // selecting semester 

            var semester = dept.sem;
            var days; // to hold 5 days 


            // selecting existing semesters 
            var existing_sem = []; // dynamic array 
            for (var i = 0; i < semester.length; i++) {
                var check = (semester[i].day[0].period.length >= 1) || // arg
                    (semester[i].day[1].period.length >= 1) || // sun
                    (semester[i].day[2].period.length >= 1) || // mon
                    (semester[i].day[3].period.length >= 1) || // tue
                    (semester[i].day[4].period.length >= 1); //wed
                if (check) {
                    txt = txt + semester[i].sem_no + "  ";
                    //dynamic array to hold existing semster objects 
                    existing_sem.push(semester[i]);


                }


            }
            tNameList = getTeachersName(existing_sem);
            console.log("name list : " + tNameList);


            addTeachersNameToSelect(tNameList); // adding teachers name to select options 


            $("#select_teacher").change(function () {

                var selected_techer_name = $('#select_teacher').find(":selected").text();
                console.log("selected teacher : " + selected_techer_name);


                for (var i = 0; i < existing_sem.length; i++) {
                    // iterate through every semester 
                    var sem = existing_sem[i];
                    console.log("sem : " + sem.sem_no);

                    for (var j = 0; j < sem.day.length; j++) {

                        var day = sem.day[j]; // take out days of week from a semster 

                        console.log("day : " + day.day_name);


                        for (var k = 0; k < day.period.length; k++) {
              
                            var period = day.period[i]; // 

                            try {
                              
                                if (period.tname == selected_techer_name) {
                                    console.log("sub : " + period.sub_name);
                                    // todo now 
                                    /*
                                       show teacher class detail  
                                       
                                    */
                                    
                                    
                                }
                            } catch (ex) {
                                // console.log(ex);
                            }
                        }


                    }

                    // 

                }

            });





        });


    //todo crate options and add them in selector


});

function addTeachersNameToSelect(arg) {
    var select = document.getElementById("select_teacher");
    //select.appendChild("122");   
    for (i = 0; i < arg.length; i++) {
        var ele = document.createElement("option");
        ele.value = arg[i];
        ele.text = arg[i];
        console.log(arg[i]);
        select.appendChild(ele);
    }
}