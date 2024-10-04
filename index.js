// Add event listeners to all drum elements
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
 }
 
 // Event handler for click on drum elements
 function handleClick() {
     var buttonInnerHTML = this.innerHTML;
     KeyboardPress(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
 }
 
 // Event listener for key press
 document.addEventListener("keypress", function(event) {
     KeyboardPress(event.key);
     buttonAnimation(event.key);
 });
 
 // Function to handle both click and key press events
 function KeyboardPress(key) {
     switch (key) {
         case "w":
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;
         case "a":
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;
         case "s":
             var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;
         case "d":
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;
         case "j":
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
             break;
         case "k":
             var kick = new Audio("sounds/kick.mp3");
             kick.play();
             break;
         case "l":
             var crash = new Audio("sounds/crash.mp3");
             crash.play();
             break;
         default:
             console.log("Invalid key or buttonInnerHTML");
     }
     function buttonAnimation(nowkey){
        var activeButton=document.querySelector("."+nowkey);
         activeButton.classlist.add("pressed");
         setTimeout(function(){
            activeButton.classList.remove("pressed")
         },100);
     }
 }
 