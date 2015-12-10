var promptForPlayerName = function (playerNumber) {
    var name = prompt(playerNumber + " what is your name?");
    if(name.length>15){
    alert("Wow, that's a long name");}
    return name;
};
var tryTwoPointShot = function(){
    var ran1 = Math.random();
    var ran2 = Math.random();
    if(ran1>0.2 && ran2>0.2){
        return true
    }else{ 
        return false
}; 
var tryThreePointShot = function(){
    var ran1 = Math.random();
    var ran2 = Math.random();
    if(ran1<=0.2 || ran2>=0.8){
        return true
    }else{
        return false
    }
};
var getShotString = function (playerName,points,wasSuccessful) {
    return "attempted a pointer. It was (GOOD/ NO GOOD)"