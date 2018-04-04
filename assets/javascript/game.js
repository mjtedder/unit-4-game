$(document).ready(function(){

// ASSIGN GLOBAL VARIABLES
//----------------------------------
var wins = 0;
var losses = 0;
var numberToMatch = "";
var userScore = 0;



//ASSIGN FUNCTIONS
//------------------------------------

//Start game function
  function startGame(){
    totalScore = 0;
    var minNumber = 19;
    var maxNumber = 120;
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $(".numbermatch").append(randomNumber);
    console.log(randomNumber);

$("#images").on("click", ".crystalOne, .crystalTwo, .crystalThree, .crystalFour", function() {
  totalScore +=1;

  alert("You clicked a crystal " + totalScore + " times!");
});
}
startGame();
});




//For loop that randomly assigns a value to crystals
    //for ( i = 19; i < 120; i++ ) {
      //var randNum = Math.floor(Math.random() * 5);
      //$("#crystalOne", "crystalTwo", "#crystalThree", "#crystalFour").append(" "+randNum);
      //console.log("randNum");
        //}
      //}
    //});
//When crystal is clicked, use function to add value to totalScore variable
//Also grab image and display in html
//Also create a random number to match each time game begins(numberToMatch)

//function for adding values of crystals clicked in totalScore variable

//if crystalOne is clicked and is equal to numberToMatch,
//alert you win
//wins++
//clear totalScore
//reset crystal values

//do the above code for crystalsTwo, crystalThree, and crystalFour

//if totalScore > numberToMatch,
//alert you lose
//losses--
//run startGame function





//EXECUTION PHASE
//------------------------------------
