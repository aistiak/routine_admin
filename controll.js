<script>
   function add(){
  
    
    
	var ul = document.getElementById("ul_id");
	
	var dlt_btn = document.createElement("button");
	dlt_btn.innerHTML = "X";
	//dlt_btn.setAttribute("onclick","dlt_parent()");
	
	var form = document.createElement("form");
	
	var teacher_name = document.createElement("input");
	teacher_name.type = "text";
	teacher_name.placeholder ="tacher"
	teacher_name.className = "demo"; // set the CSS class
	
	var subject_name = document.createElement("input");
	subject_name.type ="text" ;
	subject_name.placeholder ="subject "
    subject_name.className = "demo";
	
	var course_code = document.createElement("input");
	course_code.type ="text" ;
	course_code.placeholder ="course code "
    course_code.className = "demo";	
	
	var room_no = document.createElement("input");
	room_no.type ="text" ;
	room_no.placeholder ="room no"
    room_no.className = "demo";	
	
	var st_time = document.createElement("input");
	st_time.type ="text" ;
	st_time.placeholder ="start time "
    st_time.className = "demo";	
	
	var end_time = document.createElement("input");
	end_time.type ="text" ;
	end_time.placeholder ="end time"
    end_time.className = "demo";
	
	var br = document.createElement("BR");
	form.appendChild(dlt_btn);
	form.appendChild(subject_name);
	form.appendChild(course_code);
	form.appendChild(teacher_name);
	form.appendChild(st_time);
	form.appendChild(end_time);
	form.appendChild(room_no);
	ul.appendChild(form);
	ul.appendChild(br);
	ul.appendChild(br);
	ul.appendChild(br);
	
  }  
  function dlt(){
  
   var list = document.getElementById("ul_id");   // Get the <ul> element with id="myList"
   list.removeChild(list.childNodes[0]); 
  }
  $("ul").on("click", "button", function(e) {
    e.preventDefault();
    $(this).parent().remove();
	return false ;

 
	
});


	  
	  $("#save_all").click(function(){
		  
		  console.log("save all");
	  });
	  
</script>
	  





