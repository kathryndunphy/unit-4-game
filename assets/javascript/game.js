function randomNum(min,max){
  return(Math.floor(Math.random()*((max+1) - min)) + min);
}
var crystalClicksNo = randomNum(1,4);
var numberOptions = [randomNum(10,20), randomNum(1,9), randomNum(3,5), randomNum(2,8)];
var targetNumber = 0;
  for (var i = 0; i < numberOptions.length; i++) {
    targetNumber += crystalClicksNo * numberOptions[i];
  }
var gameCounter = 0;
var winCounter = 0;
var loseCounter = 0;
var gameCounter = 0;
$("#numberToGuess").text(targetNumber);
$("#score").html("Games Won: " + winCounter + ",  Games Lost: " + loseCounter);
$("#runningTotal").html("Your current score is: " + gameCounter);
for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr('id', i);
  imageCrystal.attr("src", "assets/images/giphy.gif"); 
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}
$(".crystal-image").on("click", function() { 
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  gameCounter += crystalValue;
  $("#runningTotal").html("Your new score is: " + gameCounter + " !");
  if (gameCounter === targetNumber) {
    alert("You win!");
    gameCounter = 0;
    winCounter++;
    $("#score").html("Games Won: " + winCounter + ",  Games Lost: " + loseCounter);
    gameCounter = 0;
    $("#runningTotal").html("Your current score is: " + gameCounter);
    numberOptions = [randomNum(10,20), randomNum(1,9), randomNum(3,5), randomNum(2,8)]; 
    for (var i = 0; i < numberOptions.length; i++) {
      $("#"+i).attr("data-crystalvalue", numberOptions[i]);
    }
    targetNumber = 0; 
      for (var i = 0; i < numberOptions.length; i++) {
      targetNumber += crystalClicksNo * numberOptions[i];
    };
    $("#numberToGuess").text(targetNumber);
  }
  else if (gameCounter > targetNumber) {
    alert("You lose!!");
    gameCounter = 0;
    loseCounter++;
    $("#score").html("Wins: " + winCounter + ", Losses: " + loseCounter);
    gameCounter = 0;
    $("#runningTotal").html("Your total score is: " + gameCounter);
    numberOptions = [randomNum(10,20), randomNum(1,9), randomNum(3,5), randomNum(2,8)];
    for (var i = 0; i < numberOptions.length; i++) {
      $("#"+i).attr("data-crystalvalue", numberOptions[i]);
    }
    targetNumber = 0; 
      for (var i = 0; i < numberOptions.length; i++) {
      targetNumber += crystalClicksNo * numberOptions[i];
    };
    $("#numberToGuess").text(targetNumber); 
  }
})