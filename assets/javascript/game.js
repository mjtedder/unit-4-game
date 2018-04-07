$(document).ready(function() {

  // ASSIGN GLOBAL VARIABLES
  //----------------------------------
  var wins = 0;
  var losses = 0;
  var randomNumber = 0;
  var userScore = 0;



  //ASSIGN FUNCTIONS
  //------------------------------------
  //Check for Wins/Losses
  function checkStatus() {
    if (+$("#totalScore").text() === +$("#randomNumber").text()) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      alert("You Win!");
      //Restart game
      startGame();

    };
    if (+$("#totalScore").text() > +$("#randomNumber").text()) {
      losses++;
      document.getElementById("losses").innerHTML = losses;
      alert("You Lose!");
      //Restart game
      startGame();
    };
  };


  //Start game function
  function startGame() {
    userScore = 0;
    $("#totalScore").text(userScore);
    $("#totalScore").attr("value", userScore);
    console.log(userScore)
    randomNumber = null;
    $("#randomNumber").text(randomNumber);
    $("#randomNumber").attr("value", randomNumber);
    crystalOne = null;
    crystalTwo = null;
    crystalThree = null;
    crystalFour = null;


    //Setting randomNumber for user to match
    var minNumber = 19;
    var maxNumber = 120;
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $("#randomNumber").append(randomNumber);
    console.log(randomNumber);



    //Array of numberOptions for crystals
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    //Setting value for crystalOne
    var crystalOne = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    $("#crystalOne").attr("value", crystalOne);
    console.log("%c Crystal One: " + crystalOne, "background: red; color: white; display: block; padding: 0 20% 0 20%;");

    //Setting value for crystalTwo
    var crystalTwo = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    $("#crystalTwo").attr("value", crystalTwo);
    console.log("%c Crystal Two: " + crystalTwo, "background: blue; color: white; display: block; padding 0 20% 0 20%;");

    //Setting value for crystalThree
    var crystalThree = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    $("#crystalThree").attr("value", crystalThree);
    console.log("%c Crystal Three: " + crystalThree, "background: green; color: white; display: block; padding 0 20% 0 20%;");

    //Setting value for crystalFour
    var crystalFour = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    $("#crystalFour").attr("value", crystalFour);
    console.log("%c Crystal Four: " + crystalFour, "background: yellow; color: white; display: block; padding 0 20% 0 20%;");

  };
    //function for adding values of crystals clicked and adding to the Score
    //Crystal One
    $("#crystalOne").on("click", function() {
      var addOne = +$("#crystalOne").attr("value") + +$("#totalScore").attr("value");
      $("#totalScore").text(addOne);
      $("#totalScore").attr("value", addOne);
      //Always checks for win or loss each time a crystal is clicked
      checkStatus();
    });

    //Crystal Two
    $("#crystalTwo").on("click", function() {
      var addTwo = +$("#crystalTwo").attr("value") + +$("#totalScore").attr("value");
      $("#totalScore").text(addTwo);
      $("#totalScore").attr("value", addTwo);
      //Always checks for win/loss each time a crystal is clicked
      checkStatus();
    });

    //Crystal Three
    $("#crystalThree").on("click", function() {
      var addThree = +$("#crystalThree").attr("value") + +$("#totalScore").attr("value");
      $("#totalScore").text(addThree);
      $("#totalScore").attr("value", addThree);
      //Always checks for win/loss each time a crystal is clicked
      checkStatus();
    });

    //Crystal Four
    $("#crystalFour").on("click", function() {
      var addFour = +$("#crystalFour").attr("value") + +$("#totalScore").attr("value");
      $("#totalScore").text(addFour);
      $("#totalScore").attr("value", addFour);
      //Always checks for win/loss each time a crystal is clicked
      checkStatus();
    });

  //EXECUTION PHASE
  //------------------------------------

  startGame();
});
