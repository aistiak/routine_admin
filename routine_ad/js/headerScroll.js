
   
    window.onscroll = function(){myFunction()};

    var h = document.getElementById("headerid");

  
    var sticky = h.offsetTop;


    function myFunction(){
         if(window.pageYOffset >= sticky){
             h.classList.add("sticky");
         }else{
             
             h.classList.remove("sticky");
         }	
    }




        
