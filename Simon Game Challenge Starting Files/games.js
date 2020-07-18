var buttonColours = ["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var level=0;
var started = false;



//console.log(gamePattern);

// $("#"+randomChosenColor).click(function(){
//   $("#"+randomChosenColor).css("background-color","purple");
// });

//Flashing and sound when you clcik a button




//function gettingID(){

//
//console.log(gettingID());

//Detecting KeyPress
$(document).on("keypress",function(){
    if(!started){
      $("#level-title").text("Level "+ level);
      nextSequence();
      started=true;
    }
});

//Get The ID of chosen color
$("body").click(function(event){
   var userChosenColor= event.target.id;
   userClickedPattern.push(userChosenColor);
   playSound(userChosenColor);
   animatePress(userChosenColor);
  // console.log(userClickedPattern.length-1);
   checkAnswer(userClickedPattern.length-1);
});
//Check Answer
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(userClickedPattern.length===gamePattern.length){
      console.log("Success");
      setTimeout( function() {
        nextSequence();
      }, 1000);
    }
  }else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("GameOver, Press Any Key to Restart");
    startOver();
    }
}

//Random Numbers
function nextSequence(){
  userClickedPattern=[];
  level ++;
  $("#level-title").text("Level "+ level);
  var randomNumber= Math.floor(Math.random() *4);
  var randomChosenColor= buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  //$("#"+randomChosenColor).on("click",function(){
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

      playSound(randomChosenColor);
       //});
}


function playSound(name){
  var audio = new Audio("sounds/"+ name +".mp3");
  audio.play();
}

function animatePress(currentColor){
      $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
      $("#"+ currentColor).removeClass("pressed");
    },100);
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}

// if(randomChosenColor==1){
//   var audio1 = new Audio(blue.mp3);
//   audio.play();
// }
//
// if(randomChosenColor==0){
//   var audio0 = new Audio(red.mp3);
//   audio.play();
// }
//
// if(randomChosenColor==2){
//   var audio = new Audio(green.mp3);
//   audio.play();
// }
//
