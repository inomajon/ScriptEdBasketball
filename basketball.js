var promptForPlayerName = function (playerNumber) {
    var name = prompt(playerNumber + " what is your name?");
    if (name.length>15) {
    alert("Wow, that's a long name");
    }
    return name;
};
var tryTwoPointShot = function(){
    var ran1 = Math.random();
    var ran2 = Math.random();
    if (ran1>0.2 && ran2>0.2) {
        return true;
    } else { 
        return false;
    }
}; 
var tryThreePointShot = function(){
    var ran1 = Math.random();
    var ran2 = Math.random();
    if (ran1<=0.2 || ran2>=0.8) {
        return true;
    } else {
        return false;
    }
};
var getShotString = function (playerName,points,wasSuccessful) {
    var string= playerName + "attempted a " + points + " pointer";
    if (wasSuccessful === true) {
        return string + "it was good";
    } else {
        return string + "no good";
    }
};

var updateScore = function(wasShotMade,currentScore,points){
     if (wasShotMade === true){
       currentScore = currentScore + points;
       }
       return currentScore
}
 var isEndOfGame = function(currentScore,playerName){
     if (currentScore>=20){
     alert ("The game is over " + playerName + " won");
     return true;
 } else {
     return false;
    }
 }
 