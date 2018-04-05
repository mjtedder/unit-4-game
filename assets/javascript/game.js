$(document).ready(function() {

  // ASSIGN GLOBAL VARIABLES
  //----------------------------------
  var wins = 0;
  var losses = 0;
  var numberToMatch = "";
  var userScore = 0;



  //ASSIGN FUNCTIONS
  //------------------------------------

  //Start game function
  function startGame() {
    totalScore = 0;
    var minNumber = 19;
    var maxNumber = 120;
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $(".numbermatch").append(randomNumber);
    console.log(randomNumber);

    //Array of numberOptions
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var crystalOne = numberOptions[Math.floor(Math.random() * numberOptions.length)];


    var crystalTwo = numberOptions[Math.floor(Math.random() * numberOptions.length)];


    var crystalThree = numberOptions[Math.floor(Math.random() * numberOptions.length)];


    var crystalFour = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);



    //When crystal is clicked, use function to add value to totalScore variable
    //Also grab image and display in html
    //Also create a random number to match each time game begins(numberToMatch)
    $(".images").on("click", "#crystalOne, #crystalTwo, #crystalThree, #crystalFour", function() {



      //function for adding values of crystals clicked in totalScore variable
      //Clicking crystals
      if ($("#crystalOne").attr("value") === "plus") {
        var add = +$("#crystalOne").attr("value") + userScore + crystalOne;
        $(".totalscore").append(add);
        console.log(add);
      }




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




    });

  };

  startGame();
});





//EXECUTION PHASE
//------------------------------------
