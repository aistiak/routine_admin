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
                var check = (semester[i].day[0].period.length >= 1) || // sat
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

            var sat_table = $("#sat-table-body");



            // create field
            for (var i = 0; i < existing_sem.length; i++) {

                var sem_no = existing_sem[i].sem_no; ``
                var tr = document.createElement("tr");
                var td;
                var atr;
                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-1";
                td.setAttribute("id", atr);
                td.innerHTML = sem_no;
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-2";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-3";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-4";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-5";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-6";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-7";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);


                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-8";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-9";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-10";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);

                td = document.createElement("td");
                atr = "sat-sem-" + (i + 1) + "-slot-1";
                td.setAttribute("id", atr);
                td.innerHTML = "";
                tr.appendChild(td);



                sat_table.append(tr);
            }

            // populate field with data
            for (var j = 0; j < existing_sem.length; j++) {
                var periods = existing_sem[j].day[0].period; // sat periods

                // var numbers = str.match(/\d+/g).map(Number);
                // console.log(periods.length);
                var data = "";
                for (var i = 0; i < periods.length; i++) {

                    var arr = periods[i].time.match(/\d+/g).map(Number);
                    var time = arr[0]; // start time 
                    console.log(time);
                    if (time >= 8 && time < 9) {//slot2

                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-2").html(data);


                    } else if (time >= 9 && time < 10) { // slot 3

                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-3").html(data);


                    } else if (time >= 10 && time < 11) { // slot4


                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-4").html(data);


                    } else if (time >= 11 && time < 12) {//slot5


                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-5").html(data);


                    } else if (time > 1 && time >= 12) {//slot6


                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-6").html(data);


                    } else if (time >= 1 && time < 2) {//slot7


                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-7").html(data);


                    } else if (time >= 2 && time < 3) {//slot8


                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-8").html(data);


                    } else if (time >= 3 && time < 4) {//slot9


                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-9").html(data);


                    } else if (time >= 4 && time < 5) {//slot9


                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-10").html(data);


                    }
                    else if (time >= 5 && time < 6) {//slot9


                        data = periods[i].ccode + "<br>" +
                            retUpperCase(periods[i].tname) + "<br>" +
                            periods[i].room_no;
                        $("#sat-sem-" + (j + 1) + "-slot-11").html(data);
                    }





                }


            }


         




        });



});

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