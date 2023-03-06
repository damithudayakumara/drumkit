
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrumButtons;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// this.style.color="white";
//var btnInnrHtml= addEventListener("keypress",function(event){

 var btnInnrHtml=this.innerHTML;
  
 
makesound(btnInnrHtml);
buttonAnimation(btnInnrHtml);


  
        // break;

});
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){

    switch (key) {
        case "w":
             var audio1 = new Audio("sounds/snare.mp3");
            audio1.play();
            break;
            case "a":
                var audio2 = new Audio("sounds/tom-1.mp3");
               audio2.play();
               break;
               case "s":
                var audio1 = new Audio("sounds/tom-2.mp3");
               audio1.play();
               break;
               case "d":
                   var audio2 = new Audio("sounds/tom-3.mp3");
                  audio2.play();
                  break;
                  case "j":
             var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;
            case "k":
                var audio2 = new Audio("sounds/kick-bass.mp3");
               audio2.play();
               break;
    
        default:
            // case "":
             var audio = new Audio("sounds/crash.mp3");
            audio.play();
            // break;
}
}
function buttonAnimation(currentkey){
    var acctiveButton=document.querySelector("."+currentkey);
    acctiveButton.classList.add("pressed");
    setTimeout(function(){
        acctiveButton.classList.remove("pressed");
    },100);
}

// var audio = new Audio("sounds/snare.mp3");
// audio.play();