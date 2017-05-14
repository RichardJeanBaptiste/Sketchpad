$(document).ready(function(){

    
 var box = "<div><div>";
    
  
   for(var x=0; x < 16; x++){
   for(var i=0; i < 16; i++){
   	$("#main").append(box);
   	}
   }
  
 

 $("div").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });
  
 $("#reset").click(function(){
      var number = window.prompt("enter a number between 1 - 64");
      console.log(number); 
 });
 	
 
   

});