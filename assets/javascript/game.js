// alert("Open Console to view random numbers assigned to crystals.");

var counter = 0;
var wins = 0;
var losses = 0;
var score = counter;

var blueCrystal = [1, 3, 4, 5, 6, 7];
var pinkCrystal = [1, 3, 4, 5, 6, 7];
var greenCrystal = [1, 3, 4, 5, 6, 7];
var purpleCrystal = [1, 3, 4, 5, 6, 7];

var increment1 = blueCrystal[Math.floor(Math.random() * blueCrystal.length)];
var increment2 = pinkCrystal[Math.floor(Math.random() * pinkCrystal.length)];
var increment3 = greenCrystal[Math.floor(Math.random() * greenCrystal.length)];
var increment4 = purpleCrystal[Math.floor(Math.random() * purpleCrystal.length)];

console.log("blue: " + increment1);
console.log("--------------");
console.log("pink: " + increment2);
console.log("--------------");
console.log("green: " + increment3);
console.log("--------------");
console.log("purple: " + increment4);
console.log("--------------");

var targetNumber = [20, 23, 28, 35, 37, 39, 44, 58, 69, 70];
var randomTarget = targetNumber[Math.floor(Math.random() * targetNumber.length)];

$("#number-to-guess").text(randomTarget);
$("#score").text(score);
$("#wins").text(wins);
$("#losses").text(losses);

function resetScore() {
    counter = 0;
    score = 0;
    $("#score").text(score);
    increment1 = blueCrystal[Math.floor(Math.random() * blueCrystal.length)];
    increment2 = pinkCrystal[Math.floor(Math.random() * pinkCrystal.length)];
    increment3 = greenCrystal[Math.floor(Math.random() * greenCrystal.length)];
    increment4 = purpleCrystal[Math.floor(Math.random() * purpleCrystal.length)];

    console.log("blue: " + increment1);
    console.log("--------------");
    console.log("pink: " + increment2);
    console.log("--------------");
    console.log("green: " + increment3);
    console.log("--------------");
    console.log("purple: " + increment4);
    console.log("--------------");

    randomTarget = targetNumber[Math.floor(Math.random() * targetNumber.length)];
    $("#number-to-guess").text(randomTarget);

}

$(".blue").on("click", function () {
    counter += increment1;
    score = counter;
    $("#score").text(score);
    console.log(score);
    if (score === randomTarget) {
        wins++;
        alert("Great job! Click OK to Play Again!");
        $("#wins").text(wins);
        console.log("wins: " + (wins));
        setTimeout(resetScore(), 3000);
        
    }
    if (score > randomTarget) {
        losses++;
        alert("Better luck next time! Click OK to Play Again!");
        $("#losses").text(losses);
        console.log("losses: " + (losses));
        setTimeout(resetScore(), 3000);
    }
});

$(".pink").on("click", function () {
    counter += increment2;
    score = counter;
    $("#score").text(score);
    console.log(score);
    if (score === randomTarget) {
        wins++;
        alert("Great job! Click OK to Play Again!");
        $("#wins").text(wins);
        console.log("wins: " + (wins));
        setTimeout(resetScore(), 3000);
    }
    if (score > randomTarget) {
        losses++;
        alert("Better luck next time! Click OK to Play Again!");
        $("#losses").text(losses);
        console.log("losses: " + (losses));
        setTimeout(resetScore(), 3000);
    }
});

$(".green").on("click", function () {
    counter += increment3;
    score = counter;
    $("#score").text(score);
    console.log(score);
    if (score === randomTarget) {
        wins++;
        alert("Great job! Click OK to Play Again!");
        $("#wins").text(wins);
        console.log("wins: " + (wins));
        setTimeout(resetScore(), 3000);
    }
    if (score > randomTarget) {
        losses++;
        alert("Better luck next time! Click OK to Play Again!");
        $("#losses").text(losses);
        console.log("losses: " + (losses));
        setTimeout(resetScore(), 3000);
    }
});

$(".purple").on("click", function () {
    counter += increment4;
    score = counter;
    $("#score").text(score);
    console.log(score);
    if (score === randomTarget) {
        wins++;
        alert("Great job! Click OK to Play Again!");
        $("#wins").text(wins);
        console.log("wins: " + (wins));
        setTimeout(resetScore(), 3000);
    }
    if (score > randomTarget) {
        losses++;
        alert("Better luck next time! Click OK to Play Again!");
        $("#losses").text(losses);
        console.log("losses: " + (losses));
        setTimeout(resetScore(), 3000);
    }
});