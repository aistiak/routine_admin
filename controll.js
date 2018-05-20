
   //saturday
   function satadd(){
  
    var temp ;
	var len = document.getElementById("sat-ul").childNodes.length - 2; 
    
	var ul = document.getElementById("sat-ul");
	
	var dlt_btn = document.createElement("button");
	dlt_btn.innerHTML = "X";
	//console.log();
	//dlt_btn.setAttribute("onclick","dlt_parent()");
	
	var form = document.createElement("form");
	
	var teacher_name = document.createElement("input");
	teacher_name.type = "text";
	teacher_name.placeholder ="tacher"
	teacher_name.className = "demo"; // set the CSS class
	temp="sat-ul-teacher"+len ;
	teacher_name.setAttribute("id",temp);
	//console.log(temp);
	
	var subject_name = document.createElement("input");
	subject_name.type ="text" ;
	subject_name.placeholder ="subject "
    subject_name.className = "demo";
	temp="sat-ul-subject"+len ;
	subject_name.setAttribute("id",temp);
	
	
	var course_code = document.createElement("input");
	course_code.type ="text" ;
	course_code.placeholder ="course code "
    course_code.className = "demo";	
	temp ="sat-ul-code"+len ;
	course_code.setAttribute("id",temp);
	
	var room_no = document.createElement("input");
	room_no.type ="text" ;
	room_no.placeholder ="room no"
    room_no.className = "demo";	
	temp = "sat-ul-room"+len;
	room_no.setAttribute("id",temp);
	
	var st_time = document.createElement("input");
	st_time.type ="text" ;
	st_time.placeholder ="start time "
    st_time.className = "demo";	
	temp="sat-ul-start-time"+len;
	st_time.setAttribute("id",temp);
	
	
	var end_time = document.createElement("input");
	end_time.type ="text" ;
	end_time.placeholder ="end time"
    end_time.className = "demo";
	temp ="sat-ul-end-time"+len;
	end_time.setAttribute("id",temp);
	
	var br = document.createElement("BR");
	form.appendChild(dlt_btn);
	form.appendChild(subject_name);
	form.appendChild(course_code);
	form.appendChild(teacher_name);
	form.appendChild(st_time);
	form.appendChild(end_time);
	form.appendChild(room_no);
	ul.appendChild(form);
	
	
  }  
  function dlt(){
  
   var list = document.getElementById("sat-ul");   // Get the <ul> element with id="myList"
   list.removeChild(list.childNodes[0]); 
  }


	
	 //sunday  
    function sunadd(){
  
    var temp ;
	var len = document.getElementById("sun-ul").childNodes.length - 2; 
    
	var ul = document.getElementById("sun-ul");
	
	var dlt_btn = document.createElement("button");
	dlt_btn.innerHTML = "X";
	//console.log();
	//dlt_btn.setAttribute("onclick","dlt_parent()");
	
	var form = document.createElement("form");
	
	var teacher_name = document.createElement("input");
	teacher_name.type = "text";
	teacher_name.placeholder ="tacher"
	teacher_name.className = "demo"; // set the CSS class
	temp="sun-ul-teacher"+len ;
	teacher_name.setAttribute("id",temp);
	//console.log(temp);
	
	var subject_name = document.createElement("input");
	subject_name.type ="text" ;
	subject_name.placeholder ="subject "
    subject_name.className = "demo";
	temp="sun-ul-subject"+len ;
	subject_name.setAttribute("id",temp);
	
	
	var course_code = document.createElement("input");
	course_code.type ="text" ;
	course_code.placeholder ="course code "
    course_code.className = "demo";	
	temp ="sun-ul-code"+len ;
	course_code.setAttribute("id",temp);
	
	var room_no = document.createElement("input");
	room_no.type ="text" ;
	room_no.placeholder ="room no"
    room_no.className = "demo";	
	temp = "sun-ul-room"+len;
	room_no.setAttribute("id",temp);
	
	var st_time = document.createElement("input");
	st_time.type ="text" ;
	st_time.placeholder ="start time "
    st_time.className = "demo";	
	temp="sun-ul-start-time"+len;
	st_time.setAttribute("id",temp);
	
	
	var end_time = document.createElement("input");
	end_time.type ="text" ;
	end_time.placeholder ="end time"
    end_time.className = "demo";
	temp ="sun-ul-end-time"+len;
	end_time.setAttribute("id",temp);
	
	var br = document.createElement("BR");
	form.appendChild(dlt_btn);
	form.appendChild(subject_name);
	form.appendChild(course_code);
	form.appendChild(teacher_name);
	form.appendChild(st_time);
	form.appendChild(end_time);
	form.appendChild(room_no);
	ul.appendChild(form);
	
	
  }  
	  

	  

