$(document).ready(function () {

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

            //$("#data").html(txt);
            //$("#data").html(existing_sem.toString());

            
            loadDataToTable(existing_sem,"sat",0);
            loadDataToTable(existing_sem,"sun",1);
            loadDataToTable(existing_sem,"mon",2);
            loadDataToTable(existing_sem,"tue",3);
            loadDataToTable(existing_sem,"wed",4);

            // teacher`s name in short 

            var sub_ul = document.getElementById("sub_list") ;
            var teacher_ul = document.getElementById("teacher_list");
            var teacher_list = getTeachersName(existing_sem);
            var subject_list = getSubCodes(existing_sem);


            for(var k = 0 ; k < subject_list.length ; k++){
               var sub_li = document.createElement("li");
              // console.log("sub : "+subject_list[k]); 
               sub_li.innerHTML = subject_list[k] ;
               sub_ul.appendChild(sub_li);
            }

            
            for(var k = 0 ; k < teacher_list.length ; k++){
                var teacher_li = document.createElement("li");
               // console.log("teacher : "+teacher_list[k]); 
                var str = retUpperCase(teacher_list[k]) + "  (" + teacher_list[k] + ")" ;
                teacher_li.innerHTML = str ;                
                teacher_ul.appendChild( teacher_li);
             }




           


        });



});

function loadDataToTable(existing_sem,arg,argn){
    var iid = "#"+arg+"-table-body";
    var arg_table = $(iid);



            // create field
            for (var i = 0; i < existing_sem.length; i++) {

                var sem_no = existing_sem[i].sem_no; 
                var tr = document.createElement("tr");
                var td;
                var atr;
                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-1";
                td.setAttribute("id", atr);
                td.innerHTML = sem_no;
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-2";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-3";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-4";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-5";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-6";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-7";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);


                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-8";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-9";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-10";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = arg+"-sem-" + (i + 1) + "-slot-1";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);



                arg_table.append(tr);
            }

            // populate field with data
            for (var j = 0; j < existing_sem.length; j++) {
                var periods = existing_sem[j].day[argn].period; // arg periods

                // var numbers = str.match(/\d+/g).map(Number);
                // console.log(periods.length);
                var data = "";
                for (var i = 0; i < periods.length; i++) {

                    var slot_flag ;
                    var regx1 = /\d+/g; // for int numbers
                    var regs2 = /[+-]?\d+(\.\d+)?/g; // for double numbers
                   
                    var arr = periods[i].time.match(regs2).map(Number);
                    var time = arr[0]; // start time 
                    //console.log(arr[0] +" to "+ arr[1]  );
                    
                    if (time >= 8 && time < 9) {//slot2

                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-2").html(data);
                        slot_flag = 2 ;

                    } else if (time >= 9 && time < 10) { // slot 3

                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-3").html(data);
                        slot_flag = 3 ;


                    } else if (time >= 10 && time < 11) { // slot4


                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-4").html(data);
                        
                        slot_flag = 4 ;


                    } else if (time >= 11 && time < 12) {//slot5


                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-5").html(data);

                        slot_flag = 5 ;


                    } else if (time > 1 && time >= 12) {//slot6


                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-6").html(data);

                        slot_flag = 6 ;


                    } else if (time >= 1 && time < 2) {//slot7


                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-7").html(data);

                        slot_flag = 7 ;


                    } else if (time >= 2 && time < 3) {//slot8


                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-8").html(data);

                        slot_flag = 8 ;


                    } else if (time >= 3 && time < 4) {//slot9


                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-9").html(data);

                        slot_flag = 9 ;


                    } else if (time >= 4 && time < 5) {//slot9


                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-10").html(data);

                        slot_flag = 10 ;


                    }
                    else if (time >= 5 && time < 6) {//slot9


                        data = periods[i].sub_name + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#"+arg+"-sem-" + (j + 1) + "-slot-11").html(data);

                        slot_flag = 11 ;
                    }

                    var start_time = arr[0] ; 
                    var end_time = arr[1];
                    (start_time >=1 && start_time<=6 )? start_time +=12 : start_time ;
                    (end_time >=1 && end_time<=6 )? end_time+=12 : end_time ;
                    var time_diff = Math.abs(end_time - start_time);

                    if(time_diff>1){ // any period is longer then 1 slot 
                       for(var t = 0 ; t<Math.floor(time_diff) ; t++){
                          slot_flag += 1 ; 
                          var atr = "#"+arg+"-sem-" + (j + 1) + "-slot-"+slot_flag ;
                          $(atr).html("    - - - - - -  ");
                       }  
                    }

                    



                }


            }

            
           

}

function getTeachersName(existing_sem){
    var teacher_name_arr = [];
    for(var i = 0 ; i< existing_sem.length ; i++){
        var sem = existing_sem[i] ;
        var days = sem.day ;

        for(var j = 0 ; j < days.length ;j++){
           var periods = days[j].period ;
           
            for (var k = 0 ; k< periods.length ; k++){
               teacher_name_arr.push(periods[k].tname); 
               //console.log(periods[k].tname);
            }
        }

    }

    
    teacher_name_arr = Array.from(new Set(teacher_name_arr));
    // console.log(teacher_name_arr);
     return teacher_name_arr ;

}

function getSubCodes(existing_sem){
    var sub_code_arr = [];
    for(var i = 0 ; i< existing_sem.length ; i++){
        var sem = existing_sem[i] ;
        var days = sem.day ;

        for(var j = 0 ; j < days.length ;j++){
           var periods = days[j].period ;
           
            for (var k = 0 ; k< periods.length ; k++){
               sub_code_arr.push(periods[k].ccode + "  " + periods[k].sub_name); 
               //console.log(periods[k].tname);
            }
        }

       
    }
    sub_code_arr = Array.from(new Set(sub_code_arr));
    //console.log(sub_code_arr);
    return sub_code_arr ;

}
function retUpperCase(arg) {
    var res = "";
    for (var i = 0; i < arg.length; i++) {
        if (isUpperCase(arg.charAt(i))) {
            res += arg.charAt(i);
        }
    }
    return res;
}
function isUpperCase(arg) {

    if (arg >= 'A' && arg <= 'Z') {
        return true;
    }

    return false;
}