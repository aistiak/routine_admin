$(document).ready(function () {

  // save button listener 
  $("#save_all").click(function () {



    var ch = $("input").filter(function () {
      return $.trim($(this).val()).length == 0
    }).length == 0;



    if (ch == true) { // check if any input field is empty 
      saveAll();

    } else {
      $("#live_hint").html("input filed empty");
      $("#live_hint").css("color",
        "red");
      mark();
      validateTime();

    }
  });

});

function mark() {
  //$("input").css({"background-color":"red"});
  $("input").each(function () {

    if (this.value.length === 0) { // if empty then red color (light red )

      console.log(this.value + "is valid ");
      // this.value = "set";
      $(this).css({ "background-color": "#f08080" });

    }
  });


}



function validateTime() {



  $(".time_inp").each(function () {

    if (this.value.length === 0 || isNaN(this.value)) { // if empty then red  and not a number 

      $(this).css({ "background-color": "#778899" });

      $("#live_hint").html("input field can`t be empty <br>and time has to be number");

    } else { // if number then white 

       $(this).css({ "background-color": "white" });
    }
  });

}


function saveAll() {

  alert_flag = 0 ;

  console.log("from saveall ");
  var list = document.getElementById("sat-ul");


  var temp;

  var len = list.childNodes.length;
  var nodes = list.childNodes;

  var sem = new Object();
  var day = new Array();
  for (var i = 0; i < 5; i++) {
    day.push(new Object());
  }

  day[
    0
  ].day_name = "sat";

  var period = new Array();
  for (var i = 1; i <= len; i++) {
    period.push(new Object());
  }
  // assigning id`s 
  for (var idx = 1, i = 1; i <= len; idx++) {
    // problem hear  

    try {
      period[i - 1
      ].period_no = i.toString();
      var id = "sat-ul-teacher" + idx;
      period[i - 1
      ].tname = document.getElementById(id).value;
      id = "sat-ul-subject" + idx; //arif
      period[i - 1
      ].sub_name = document.getElementById(id).value;
      id = "sat-ul-code" + idx;
      period[i - 1
      ].ccode = document.getElementById(id).value;
      id = "sat-ul-room" + idx;
      period[i - 1
      ].room_no = document.getElementById(id).value;
      id = "sat-ul-start-time" + idx;
      var temp;
      temp = document.getElementById(id).value;
      temp += " to ";
      id = "sat-ul-end-time" + idx;
      temp += document.getElementById(id).value;
      period[i - 1
      ].time = temp;
      i++;
    } catch (err) {

      console.log("error : " + err);
    }
  }
  day[
    0
  ].period = period;



  //sunday 
  len = document.getElementById("sun-ul").childNodes.length;
  // console.log(len);
  day[
    1
  ].day_name = "sun";
  var period = new Array();
  for (var i = 1; i <= len; i++) {
    period.push(new Object());
  }

  for (var idx = 1, i = 1; i <= len; idx++) {

    try {
      period[i - 1
      ].period_no = i.toString();
      var id = "sun-ul-teacher" + idx;
      period[i - 1
      ].tname = document.getElementById(id).value;
      id = "sun-ul-subject" + idx;
      period[i - 1
      ].sub_name = document.getElementById(id).value;
      id = "sun-ul-code" + idx;
      period[i - 1
      ].ccode = document.getElementById(id).value;
      id = "sun-ul-room" + idx;
      period[i - 1
      ].room_no = document.getElementById(id).value;
      id = "sun-ul-start-time" + idx;
      var temp;
      temp = document.getElementById(id).value;
      temp += " to ";
      id = "sun-ul-end-time" + idx;
      temp += document.getElementById(id).value;
      period[i - 1
      ].time = temp;
      i++;
    } catch (err) {

      console.log("error : " + err);
    }
  }
  day[
    1
  ].period = period;

  // mon 
  len = document.getElementById("mon-ul").childNodes.length;
  //console.log(len);
  day[
    2
  ].day_name = "mon";
  var period = new Array();
  for (var i = 1; i <= len; i++) {
    period.push(new Object());
  }

  for (var idx = 1, i = 1; i <= len; idx++) {

    try {
      period[i - 1
      ].period_no = i.toString();
      var id = "mon-ul-teacher" + idx;
      period[i - 1
      ].tname = document.getElementById(id).value;
      id = "mon-ul-subject" + idx;
      period[i - 1
      ].sub_name = document.getElementById(id).value;
      id = "mon-ul-code" + idx;
      period[i - 1
      ].ccode = document.getElementById(id).value;
      id = "mon-ul-room" + idx;
      period[i - 1
      ].room_no = document.getElementById(id).value;
      id = "mon-ul-start-time" + idx;
      var temp;
      temp = document.getElementById(id).value;
      temp += " to ";
      id = "mon-ul-end-time" + idx;
      temp += document.getElementById(id).value;
      period[i - 1
      ].time = temp;
      i++;
    } catch (err) {
      console.log("error : " + err);
    }
  }
  day[
    2
  ].period = period;

  // tue 
  len = document.getElementById("tue-ul").childNodes.length;
  //console.log(len);
  day[
    3
  ].day_name = "tue";
  var period = new Array();
  for (var i = 1; i <= len; i++) {
    period.push(new Object());
  }

  for (var idx = 1, i = 1; i <= len; idx++) {

    try {
      period[i - 1
      ].period_no = i.toString();
      var id = "tue-ul-teacher" + idx;
      period[i - 1
      ].tname = document.getElementById(id).value;
      id = "tue-ul-subject" + idx;
      period[i - 1
      ].sub_name = document.getElementById(id).value;
      id = "tue-ul-code" + idx;
      period[i - 1
      ].ccode = document.getElementById(id).value;
      id = "tue-ul-room" + idx;
      period[i - 1
      ].room_no = document.getElementById(id).value;
      id = "tue-ul-start-time" + idx;
      var temp;
      temp = document.getElementById(id).value;
      temp += " to ";
      id = "tue-ul-end-time" + idx;
      temp += document.getElementById(id).value;
      period[i - 1
      ].time = temp;
      i++;
    } catch (err) {
      console.log("error : " + err);
    }
  }
  day[
    3
  ].period = period;
  // wed 
  len = document.getElementById("wed-ul").childNodes.length;
  // console.log(len);
  day[
    4
  ].day_name = "wed";
  var period = new Array();
  for (var i = 1; i <= len; i++) {
    period.push(new Object());
  }

  for (var idx = 1, i = 1; i <= len; idx++) {

    try {
      period[i - 1
      ].period_no = i.toString();
      var id = "wed-ul-teacher" + idx;
      period[i - 1
      ].tname = document.getElementById(id).value;
      id = "wed-ul-subject" + idx;
      period[i - 1
      ].sub_name = document.getElementById(id).value;
      id = "wed-ul-code" + idx;
      period[i - 1
      ].ccode = document.getElementById(id).value;
      id = "wed-ul-room" + idx;
      period[i - 1
      ].room_no = document.getElementById(id).value;
      id = "wed-ul-start-time" + idx;
      var temp;
      temp = document.getElementById(id).value;
      temp += " to ";
      id = "wed-ul-end-time" + idx;
      temp += document.getElementById(id).value;
      period[i - 1
      ].time = temp;
      i++;
    } catch (err) {
      console.log("error : " + err);
    }
  }
  day[
    4
  ].period = period;
  var selected_sem_no = $('#slect_sem').find(":selected").text();
  sem.sem_no = selected_sem_no;
  sem.day = day;
  var fnl = JSON.stringify(sem);
  //  console.log(fnl);

  $.get(HANDEL_URL,
    {
      "_": $.now()
    }, function (data, status) {
      // alert("Data: " + data + "\nStatus: " + status);
      // $("#data")[0].innerHTML = data ;
      // { "_": $.now() } is for catch:falses
      var obj = JSON.parse(data);


      var dept = new Object();
      var flag;

      for (var i = 0; i < obj.length; i++) {
        if (obj[i
        ].dept_name == "ict") {
          dept = obj[i
          ]; // holding ict dept 
          flag = i;
        }
      }
      // selecting semester
      var semester = dept.sem;
      var days; // to hold 5 days 
      for (var i = 0; i < semester.length; i++) {
        if (selected_sem_no == semester[i
        ].sem_no) {
          semester[i
          ] = sem;
        }
      }
      // replacing 
      dept.sem = semester;
      obj[flag
      ] = dept;


      str = JSON.stringify(obj);
      //console.log(obj);
      $.post(SAVE_URL,
        {
          js_string: str
        }, function (data, status) {
          //  console.log("response : " + data );
        });

      //todo
      // got to find selected sem and replace it 
    });

  //  console.log(obj);

  $("#live_hint").html("changes saved");
  $("#live_hint").css("color",
    "green");
}
