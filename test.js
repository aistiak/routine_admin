$(document).ready(function () {

    console.log("from script");
    $("#main").hide();

    //document.getElementById("user").placeholder = "user" ;

    var user = $("#user").attr("placeholder", "user");
    var pass = $("#pass").attr("placeholder", "password");

    $("#login-btn").click(function () {


        var user_val = user.val();
        var pass_val = pass.val();
        $.post("http://localhost/routine_admin/php/login.php", { user: user_val, pass: pass_val }, function (data, status) {
            console.log("data :" + data);
            console.log("user_val :" + user_val);
            if (data == user_val && data != "") {
                $("#main").show();
                $("#login").hide();
            } else {

                $("#warn").html("user or password is  incorrect ");
            }
        });

    });



    // script  2 
    $("#slect_sem").hover(function(){

        saveAll();
     }); 
     $("#slect_sem").change(function(){
     
          //saveAll(); // saving previous sate 
          var selected_sem_no = $('#slect_sem').find(":selected").text();
          
         
          // todo 
          // from head we have to get the json and initialize the list of periods 
          $.get("http://localhost/routine_admin/php/handel.php",function(data, status){
      
            $('#sat-ul').empty(); // clearing the previous list <li> 
            $('#sun-ul').empty(); // clearing the previous list <li> 
            $('#mon-ul').empty(); // clearing the previous list <li> 
            $('#tue-ul').empty(); // clearing the previous list <li> 
            $('#wed-ul').empty(); // clearing the previous list <li>  
             
             
            var obj =JSON.parse(data);
            
            console.log(data);
            console.log(obj);
            
            
             populateListli("sat-ul",obj,selected_sem_no,0);//
            
            populateListli("sun-ul",obj,selected_sem_no,1);//
           
            populateListli("mon-ul",obj,selected_sem_no,2);//
           
            populateListli("tue-ul",obj,selected_sem_no,3);//
           
            populateListli("wed-ul",obj,selected_sem_no,4);//
            
            
            
            
            
            
            
            
                         
            
            
            
            
          });
                      
         
     });
     
     function populateListli(day_id,obj,selected_sem_no,day_idx){
     
            //var obj =JSON.parse(data);
            //console.log(obj);
            
            
            var dept = new Object();
            

            for(var i = 0 ; i<obj.length ; i++){
                if(obj[i].dept_name == "ict"){
                  dept = obj[i]; // holding ict dept 
                }
            }
            
            // selecting semester
            var semester = dept.sem ;
            var days ; // to hold 5 days 
            for(var i = 0 ; i < semester.length ; i++){
                if(selected_sem_no.toString() == semester[i].sem_no){
                  days = semester[i].day ;
                } 
            }
     
     
            var list = document.getElementById(day_id); 
            console.log("len :" + list.childNodes.length);
            var periods = days[day_idx].period ; // periods of sat
            console.log(periods);
            
for(var i = 1 ; i<=periods.length ; i++){
              
  		                   
   var ul = document.getElementById(day_id);
   
   var dlt_btn = document.createElement("button");
   dlt_btn.innerHTML = "X";
   //console.log();
   //dlt_btn.setAttribute("onclick","dlt_parent()");
   
   var form = document.createElement("form");
   
   var teacher_name = document.createElement("input");
   teacher_name.type = "text";
   teacher_name.placeholder ="tacher"
   teacher_name.className = "demo"; // set the CSS class
   temp=day_id+"-teacher"+i ;
   teacher_name.setAttribute("id",temp);
   teacher_name.value = periods[i-1].tname;	
   //console.log(temp);
   
   var subject_name = document.createElement("input");
   subject_name.type ="text" ;
   subject_name.placeholder ="subject "
   subject_name.className = "demo";
   temp=day_id+"-subject"+i ;
   subject_name.setAttribute("id",temp);
   subject_name.value = periods[i-1].sub_name ;
   
   
   
   var course_code = document.createElement("input");
   course_code.type ="text" ;
   course_code.placeholder ="course code "
   course_code.className = "demo";	
   temp =day_id+"-code"+i ;
   course_code.setAttribute("id",temp);
   course_code.value = periods[i-1].ccode ;
   
   var room_no = document.createElement("input");
   room_no.type ="text" ;
   room_no.placeholder ="room no"
   room_no.className = "demo";	
   temp = day_id+"-room"+i;
   room_no.setAttribute("id",temp);
   room_no.value = periods[i-1].room_no ;
   
   var st_time = document.createElement("input");
   st_time.type ="text" ;
   st_time.placeholder ="start time "
   st_time.className = "demo";	
   temp=day_id+"-start-time"+i;
   st_time.setAttribute("id",temp);
   st_time.value = getStartTime(periods[i-1].time);
   //console.log("start time :" + getStartTime(periods[i-1].time));
   
   
   
   var end_time = document.createElement("input");
   end_time.type ="text" ;
   end_time.placeholder ="end time"
   end_time.className = "demo";
   temp =day_id+"-end-time"+i;
   end_time.setAttribute("id",temp);
   end_time.value = getEndTime(periods[i-1].time);
   //console.log("end time :" + reverseString("12.00"));
   
   var br = document.createElement("BR");
   form.appendChild(dlt_btn);
   form.appendChild(subject_name);
   form.appendChild(course_code);
   form.appendChild(teacher_name);
   form.appendChild(st_time);
   form.appendChild(end_time);
   form.appendChild(room_no);
   ul.appendChild(form);
     } // loop
 }// end day ui fn 
     
     function getStartTime(a) {
         var b = '';
         for (var i = 0; i < a.length; i++) {
           if ((a[i] >= '0' && a[i] <= '9') || a[i]=='.' || a[i] == ' ') b += a[i];
           else break ;
         }
         return b;
     }
     
     function getEndTime(a) {
        var b = '';
        for (var i = a.length-1; i >=0 ; i--) {
          if ( (a[i] >= '0' && a[i] <= '9') || a[i]=='.' || a[i] == ' ') b += a[i];
          else break ;
        }  
        return reverseString(b) ;
     }
     
     
     function reverseString(str) {
       // Step 1. Use the split() method to return a new array
       var splitString = str.split(""); // var splitString = "hello".split("");
       // ["h", "e", "l", "l", "o"]
       // Step 2. Use the reverse() method to reverse the new created array
       var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
       // ["o", "l", "l", "e", "h"]
       // Step 3. Use the join() method to join all elements of the array into a string
       var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
       // "olleh
       //Step 4. Return the reversed string
       return joinArray; // "olleh"

   }
     
     function rreverse(str){
        rs = '';
        for(var i = str.len - 1 ; i>=0 ; i--){
           rs += str[i]
        }
        
        return rs ;
     }
     

     // save all 
     $("#save_all").click(saveAll());
     
     function saveAll(){
         console.log("iside save all ");
          var list = document.getElementById("sat-ul"); 
        
          
          var temp ;
          
          var len = list.childNodes.length  ;
          var nodes = list.childNodes ;
       
          var sem = new Object();
          var day = new Array();
          for(var i = 0 ; i< 5 ;i++){
              day.push(new Object());
          }
          
          day[0].day_name = "sat";
          
          var period = new Array();
          for(var i= 1 ;i<=len ; i++){
             period.push(new Object());			
          }
          
          // assigning id`s 
          for(var idx = 1 , i = 1 ; i<=len ;  idx++){

            // problem hear  
             
             try{
             period[i-1].period_no = i.toString()  ;
             var id = "sat-ul-teacher"+idx ;
             period[i-1].tname = document.getElementById(id).value  ;
             id = "sat-ul-subject"+idx; //arif
             period[i-1].sub_name = document.getElementById(id).value ;
             id = "sat-ul-code"+idx ;
             period[i-1].ccode = document.getElementById(id).value ;
             id = "sat-ul-room"+idx ;
             period[i-1].room_no = document.getElementById(id).value ;
             id = "sat-ul-start-time"+idx ;
             var temp ;
             temp = document.getElementById(id).value ;
             temp += " to " ;
             id = "sat-ul-end-time"+idx;
             temp += document.getElementById(id).value;
             period[i-1].time = temp  ;
             i++;
            }catch(err){
              
               console.log("error : " + err ) ;
            }

          }
          day[0].period = period ;
          
          
          
          //sunday 
          len = document.getElementById("sun-ul").childNodes.length;
          console.log(len);
          day[1].day_name = "sun" ;
          var period = new Array();
          for(var i= 1 ;i<=len ; i++){
             period.push(new Object());			
          }
            
          for(var idx = 1 , i = 1; i<=len ;  idx++){

             try{ 
             period[i-1].period_no = i.toString()   ;
             var id = "sun-ul-teacher"+idx ;
             period[i-1].tname = document.getElementById(id).value  ;
             id = "sun-ul-subject"+idx;
             period[i-1].sub_name = document.getElementById(id).value ;
             id = "sun-ul-code"+idx ;
             period[i-1].ccode = document.getElementById(id).value ;
             id = "sun-ul-room"+idx ;
             period[i-1].room_no = document.getElementById(id).value ;
             id = "sun-ul-start-time"+idx ;
             var temp ;
             temp = document.getElementById(id).value ;
             temp += " to " ;
             id = "sun-ul-end-time"+idx;
             temp += document.getElementById(id).value;
             period[i-1].time = temp  ;
             i++;
             }catch(err){

                  console.log("error : "  + err) ;
             }
          }
          day[1].period = period ;
          
          // mon 
          len = document.getElementById("mon-ul").childNodes.length;
          console.log(len);
          day[2].day_name = "mon" ;
          var period = new Array();
          for(var i= 1 ;i<=len ; i++){
             period.push(new Object());			
          }
            
          for(var idx = 1 , i = 1; i<=len ;  idx++){

             try{
             period[i-1].period_no = i.toString()   ;
             var id = "mon-ul-teacher"+idx ;
             period[i-1].tname = document.getElementById(id).value  ;
             id = "mon-ul-subject"+idx;
             period[i-1].sub_name = document.getElementById(id).value ;
             id = "mon-ul-code"+idx ;
             period[i-1].ccode = document.getElementById(id).value ;
             id = "mon-ul-room"+idx ;
             period[i-1].room_no = document.getElementById(id).value ;
             id = "mon-ul-start-time"+idx ;
             var temp ;
             temp = document.getElementById(id).value ;
             temp += " to " ;
             id = "mon-ul-end-time"+idx;
             temp += document.getElementById(id).value;
             period[i-1].time = temp  ;
             i++;
             }catch(err){
               console.log("error : " + err );

             }
          
          }
          day[2].period = period ;
          
           // tue 
          len = document.getElementById("tue-ul").childNodes.length;
          console.log(len);
          day[3].day_name = "tue" ;
          var period = new Array();
          for(var i= 1 ;i<=len ; i++){
             period.push(new Object());			
          }
            
          for(var idx = 1 , i = 1; i<=len ;  idx++){

             try{ 
             period[i-1].period_no = i.toString()   ;
             var id = "tue-ul-teacher"+idx ;
             period[i-1].tname = document.getElementById(id).value  ;
             id = "tue-ul-subject"+idx;
             period[i-1].sub_name = document.getElementById(id).value ;
             id = "tue-ul-code"+idx ;
             period[i-1].ccode = document.getElementById(id).value ;
             id = "tue-ul-room"+idx ;
             period[i-1].room_no = document.getElementById(id).value ;
             id = "tue-ul-start-time"+idx ;
             var temp ;
             temp = document.getElementById(id).value ;
             temp += " to " ;
             id = "tue-ul-end-time"+idx;
             temp += document.getElementById(id).value;
             period[i-1].time = temp  ;
              i++ ;
             }catch(err){
               console.log("error : " + err );
             }
          }
          day[3].period = period ;
           // wed 
          len = document.getElementById("wed-ul").childNodes.length;
          console.log(len);
          day[4].day_name = "wed" ;
          var period = new Array();
          for(var i= 1 ;i<=len ; i++){
             period.push(new Object());			
          }
            
          for(var idx = 1 , i = 1; i<=len ;  idx++){

             try{ 
             period[i-1].period_no = i.toString()   ;
             var id = "wed-ul-teacher"+idx ;
             period[i-1].tname = document.getElementById(id).value  ;
             id = "wed-ul-subject"+idx;
             period[i-1].sub_name = document.getElementById(id).value ;
             id = "wed-ul-code"+idx ;
             period[i-1].ccode = document.getElementById(id).value ;
             id = "wed-ul-room"+idx ;
             period[i-1].room_no = document.getElementById(id).value ;
             id = "wed-ul-start-time"+idx ;
             var temp ;
             temp = document.getElementById(id).value ;
             temp += " to " ;
             id = "wed-ul-end-time"+idx;
             temp += document.getElementById(id).value;
             period[i-1].time = temp  ;
             i++;
             }catch(err){
                 console.log("error : "+ err) ;
             }
          }
          day[4].period = period ;
          var selected_sem_no = $('#slect_sem').find(":selected").text();
          sem.sem_no = selected_sem_no ;
          sem.day = day ;
          var fnl = JSON.stringify(sem);
          console.log(fnl);
          
           $.get("http://localhost/routine_admin/php/handel.php",function(data, status){
            // alert("Data: " + data + "\nStatus: " + status);
            // $("#data")[0].innerHTML = data ;
            var obj = JSON.parse(data);
            
             
            var dept = new Object();
            var flag ; 

            for(var i = 0 ; i<obj.length ; i++){
                if(obj[i].dept_name == "ict"){
                  dept = obj[i]; // holding ict dept 
                  flag = i ;
                }
            }
            
            // selecting semester
            var semester = dept.sem ;
            var days ; // to hold 5 days 
            for(var i = 0 ; i < semester.length ; i++){
                if(selected_sem_no == semester[i].sem_no){
                   semester[i] = sem ;
                } 
            }
            
            // replacing 
            dept.sem = semester ;
            obj[flag] = dept ;
            
            
            str = JSON.stringify(obj);
            console.log(obj);
             $.post("http://localhost/routine_admin/php/save.php",{js_string:str},function(data, status){
                console.log("response : " + data );
             });
            
            //todo
            // got to find selected sem and replace it 
            
            
          
           });
          
          console.log(obj);
          
     }


     // script 3 

     function satadd(){
  
        var temp ;
        var len = document.getElementById("sat-ul").childNodes.length + 1 ; 
        
        
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
      // delete button listener 
      function dlt(){
      
       var list = document.getElementById("sat-ul");   // Get the <ul> element with id="myList"
       list.removeChild(list.childNodes[0]); 
      }
      $("ul").on("click", "button", function(e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $(this).parent().remove();
        return false ;
    
     
        
    });
    
    
          
    
          
        function sunadd(){
      
        var temp ;
        var len = document.getElementById("sun-ul").childNodes.length + 1; 
        
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
            
        function monadd(){
      
        var temp ;
        var len = document.getElementById("mon-ul").childNodes.length + 1; 
        
        var ul = document.getElementById("mon-ul");
        
        var dlt_btn = document.createElement("button");
        dlt_btn.innerHTML = "X";
        //console.log();
        //dlt_btn.setAttribute("onclick","dlt_parent()");
        
        var form = document.createElement("form");
        
        var teacher_name = document.createElement("input");
        teacher_name.type = "text";
        teacher_name.placeholder ="tacher"
        teacher_name.className = "demo"; // set the CSS class
        temp="mon-ul-teacher"+len ;
        teacher_name.setAttribute("id",temp);
        //console.log(temp);
        
        var subject_name = document.createElement("input");
        subject_name.type ="text" ;
        subject_name.placeholder ="subject "
        subject_name.className = "demo";
        temp="mon-ul-subject"+len ;
        subject_name.setAttribute("id",temp);
        
        
        var course_code = document.createElement("input");
        course_code.type ="text" ;
        course_code.placeholder ="course code "
        course_code.className = "demo";	
        temp ="mon-ul-code"+len ;
        course_code.setAttribute("id",temp);
        
        var room_no = document.createElement("input");
        room_no.type ="text" ;
        room_no.placeholder ="room no"
        room_no.className = "demo";	
        temp = "mon-ul-room"+len;
        room_no.setAttribute("id",temp);
        
        var st_time = document.createElement("input");
        st_time.type ="text" ;
        st_time.placeholder ="start time "
        st_time.className = "demo";	
        temp="mon-ul-start-time"+len;
        st_time.setAttribute("id",temp);
        
        
        var end_time = document.createElement("input");
        end_time.type ="text" ;
        end_time.placeholder ="end time"
        end_time.className = "demo";
        temp ="mon-ul-end-time"+len;
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
      
      
      
      
          
        
    function tueadd(){
      
        var temp ;
        var len = document.getElementById("tue-ul").childNodes.length + 1; 
        
        var ul = document.getElementById("tue-ul");
        
        var dlt_btn = document.createElement("button");
        dlt_btn.innerHTML = "X";
        //console.log();
        //dlt_btn.setAttribute("onclick","dlt_parent()");
        
        var form = document.createElement("form");
        
        var teacher_name = document.createElement("input");
        teacher_name.type = "text";
        teacher_name.placeholder ="tacher"
        teacher_name.className = "demo"; // set the CSS class
        temp="tue-ul-teacher"+len ;
        teacher_name.setAttribute("id",temp);
        //console.log(temp);
        
        var subject_name = document.createElement("input");
        subject_name.type ="text" ;
        subject_name.placeholder ="subject "
        subject_name.className = "demo";
        temp="tue-ul-subject"+len ;
        subject_name.setAttribute("id",temp);
        
        
        var course_code = document.createElement("input");
        course_code.type ="text" ;
        course_code.placeholder ="course code "
        course_code.className = "demo";	
        temp ="tue-ul-code"+len ;
        course_code.setAttribute("id",temp);
        
        var room_no = document.createElement("input");
        room_no.type ="text" ;
        room_no.placeholder ="room no"
        room_no.className = "demo";	
        temp = "tue-ul-room"+len;
        room_no.setAttribute("id",temp);
        
        var st_time = document.createElement("input");
        st_time.type ="text" ;
        st_time.placeholder ="start time "
        st_time.className = "demo";	
        temp="tue-ul-start-time"+len;
        st_time.setAttribute("id",temp);
        
        
        var end_time = document.createElement("input");
        end_time.type ="text" ;
        end_time.placeholder ="end time"
        end_time.className = "demo";
        temp ="tue-ul-end-time"+len;
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
        
          
          
        
        
    function wedadd(){
      
        var temp ;
        var len = document.getElementById("wed-ul").childNodes.length + 1; 
        
        var ul = document.getElementById("wed-ul");
        
        var dlt_btn = document.createElement("button");
        dlt_btn.innerHTML = "X";
        //console.log();
        //dlt_btn.setAttribute("onclick","dlt_parent()");
        
        var form = document.createElement("form");
        
        var teacher_name = document.createElement("input");
        teacher_name.type = "text";
        teacher_name.placeholder ="tacher"
        teacher_name.className = "demo"; // set the CSS class
        temp="wed-ul-teacher"+len ;
        teacher_name.setAttribute("id",temp);
        //console.log(temp);
        
        var subject_name = document.createElement("input");
        subject_name.type ="text" ;
        subject_name.placeholder ="subject "
        subject_name.className = "demo";
        temp="wed-ul-subject"+len ;
        subject_name.setAttribute("id",temp);
        
        
        var course_code = document.createElement("input");
        course_code.type ="text" ;
        course_code.placeholder ="course code "
        course_code.className = "demo";	
        temp ="wed-ul-code"+len ;
        course_code.setAttribute("id",temp);
        
        var room_no = document.createElement("input");
        room_no.type ="text" ;
        room_no.placeholder ="room no"
        room_no.className = "demo";	
        temp = "wed-ul-room"+len;
        room_no.setAttribute("id",temp);
        
        var st_time = document.createElement("input");
        st_time.type ="text" ;
        st_time.placeholder ="start time "
        st_time.className = "demo";	
        temp="wed-ul-start-time"+len;
        st_time.setAttribute("id",temp);
        
        
        var end_time = document.createElement("input");
        end_time.type ="text" ;
        end_time.placeholder ="end time"
        end_time.className = "demo";
        temp ="wed-ul-end-time"+len;
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
          



});