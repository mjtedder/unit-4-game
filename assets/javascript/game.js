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
    userScore = 0;
    $(".totalscore").text(userScore);
    $(".totalscore").attr("value", userScore);
    var minNumber = 19;
    var maxNumber = 120;
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $(".numbermatch").append(randomNumber);
    console.log(randomNumber);

    //Array of numberOptions
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



    //When crystal is clicked, use function to add value to totalScore variable
    //Also grab image and display in html
    //Also create a random number to match each time game begins(numberToMatch)
    //$(".images").on("click", "#crystalOne, #crystalTwo, #crystalThree, #crystalFour", function() {



      //function for adding values of crystals clicked in totalScore variable
      //Clicking crystals
      $("#crystalOne").on("click", function() {
        var addOne = +$("#crystalOne").attr("value") + +$(".totalscore").attr("value");
        $(".totalscore").text(addOne);
        $(".totalscore").attr("value", addOne);

      });

      $("#crystalTwo").on("click", function() {
        var addTwo = +$("#crystalTwo").attr("value") + +$(".totalscore").attr("value");
        $(".totalscore").text(addTwo);
        $(".totalscore").attr("value", addTwo);
      });

      $("#crystalThree").on("click", function() {
        var addThree = +$("#crystalThree").attr("value") + +$(".totalscore").attr("value");
        $(".totalscore").text(addThree);
        $(".totalscore").attr("value", addThree);
      });

      $("#crystalFour").on("click", function() {
        var addFour = +$("#crystalFour").attr("value") + +$(".totalscore").attr("value");
        $(".totalscore").text(addFour);
        $("totalscore").attr("value", addFour);
      });

      //if ($("#crystalTwo").attr("value") === "plus") {
        //var add2 = userScore + crystalTwo;
        //$(".counter").append(add + add2);
        //console.log(add2);
      //}




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






  };

  startGame();
});





//EXECUTION PHASE
//------------------------------------
