$(document).ready(function(){

    var box = "<div><div>";
    
  
   for(var x=0; x < 16; x++){
   for(var i=0; i < 16; i++){
   	$("body").append(box + "<br>");
   	}
   }
  
 

 $("div").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });
  
  
 
   

});