$(document).ready(function () {


	$("#select_teacher").change(function () {
		//alert("Changes will not be saved ");

		var selected_teacher_name = $('#select_teacher').find(":selected").text();


		// todo 
		// from head we have to get the json and initialize the list of periods 
		$.get(HANDEL_URL,
			{
				"_": $.now()
			}, function (data, status) {

				$('#sat-ul').empty(); // clearing the previous list <li> 
				$('#sun-ul').empty(); // clearing the previous list <li> 
				$('#mon-ul').empty(); // clearing the previous list <li> 
				$('#tue-ul').empty(); // clearing the previous list <li> 
				$('#wed-ul').empty(); // clearing the previous list <li>  


				var obj = JSON.parse(data);

				//console.log(data);
				// console.log(obj);

				// obj holds all the departments 
				populateListli("sat-ul", obj, selected_teacher_name, 0);// sat 

				populateListli("sun-ul", obj, selected_teacher_name, 1);// sun

				populateListli("mon-ul", obj, selected_teacher_name, 2);// mon 	

				populateListli("tue-ul", obj, selected_teacher_name, 3);// tue

				populateListli("wed-ul", obj, selected_teacher_name, 4);// wed 



			});
	});


});



function populateListli(day_id, obj, selected_teacher_name, day_idx) {
	//var obj =JSON.parse(data);
	//console.log(obj);


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
	/* for (var i = 0; i < semester.length; i++) {
		if (selected_teacher_name.toString() == semester[i
		].sem_no) {
			days = semester[i
			].day;
		}
	} 
	*/

	// 
	//	console.log("selected teacher : " + selected_teacher_name ); 
	for (var j = 0; j < semester.length; j++) {
		days = semester[j].day;
		// console.log("semster no  : " + semester[j].sem_no );

		//var list = document.getElementById(day_id);
		//console.log("len :" + list.childNodes.length);
		var periods = days[day_idx
		].period; // periods of sat
		//console.log(periods);

		console.log("period length : " + periods.length);
		for (var i = 1; i <= periods.length; i++) {
			try {

				if (periods[i - 1].tname == selected_teacher_name) {
					id_idx[i
					] = i;
					var ul = document.getElementById(day_id);

					// doc : cross button for deleting period 
					/*
					var dlt_btn = document.createElement("button");
					dlt_btn.innerHTML = "X";
					$(dlt_btn).css("opacity", "0");
					$(dlt_btn).hover(function () {
						$(this).fadeTo(1, 1);
					}, function () {
						$(this).fadeTo(1, 0);
					});
					*/
					//console.log();
					//dlt_btn.setAttribute("onclick","dlt_parent()");

					var form = document.createElement("form");

					var teacher_name = document.createElement("input");
					teacher_name.type = "text";
					teacher_name.placeholder = "teacher"
					teacher_name.className = "demo"; // set the CSS class
					temp = day_id + "-teacher" + i;
					teacher_name.setAttribute("id", temp);
					teacher_name.value = semToYearConverter( semester[j].sem_no );//periods[i - 1].tname;

					//console.log(temp);

					var subject_name = document.createElement("input");
					subject_name.type = "text";
					subject_name.placeholder = "subject "
					subject_name.className = "demo";
					temp = day_id + "-subject" + i;
					subject_name.setAttribute("id", temp);
					subject_name.value = periods[i - 1
					].sub_name;



					var course_code = document.createElement("input");
					course_code.type = "text";
					course_code.placeholder = "course code "
					course_code.className = "demo";
					temp = day_id + "-code" + i;
					course_code.setAttribute("id", temp);
					course_code.value = periods[i - 1
					].ccode;

					var room_no = document.createElement("input");
					room_no.type = "text";
					room_no.placeholder = "room no"
					room_no.className = "demo";
					temp = day_id + "-room" + i;
					room_no.setAttribute("id", temp);
					room_no.value = periods[i - 1
					].room_no;

					var st_time = document.createElement("input");
					st_time.type = "text";
					st_time.placeholder = "start time "
					st_time.className = "time_inp";
					temp = day_id + "-start-time" + i;
					st_time.setAttribute("id", temp);
					st_time.value = getStartTime(periods[i - 1
					].time);
					//console.log("start time :" + getStartTime(periods[i-1].time));



					var end_time = document.createElement("input");
					end_time.type = "text";
					end_time.placeholder = "end time"
					end_time.className = "time_inp";
					temp = day_id + "-end-time" + i;
					end_time.setAttribute("id", temp);
					end_time.value = getEndTime(periods[i - 1
					].time);
					//console.log("end time :" + reverseString("12.00"));

					var br = document.createElement("BR");
					//form.appendChild(dlt_btn);
					form.appendChild(subject_name);
					form.appendChild(course_code);
					form.appendChild(teacher_name);
					form.appendChild(st_time);
					form.appendChild(end_time);
					form.appendChild(room_no);
					ul.appendChild(form);
				}
			} catch (ex) {
				  console.log(ex);
			}


		}
		// loop
	}



} // end day ui fn 

function semToYearConverter(arg) {

	if (arg == "1") return "1Y1S";
	else if (arg == "2") return "1Y2S";
	else if (arg == "3") return "2Y21";
	else if (arg == "4") return "2Y2S";
	else if (arg == "5") return "3Y1S";
	else if (arg == "6") return "3Y2S";
	else if (arg == "7") return "4Y1S";
	else if (arg == "8") return "4Y2S";

}