document.write("Welkom");

var randNum = Math.floor(Math.random() * 10);
console.log(randNum);
/*  dit is uw test geeft het random getal in uw Source code van de browser*/
var num = prompt("Enter a number between 0 and 10", "New number");
if (num == randNum) {
    alert("You have won!");
}
else {
    prompt("Wrong number, try again", "New number");
    if (num == randNum) {
        alert("You have won!");
    }
    else {
        prompt("Wrong number! Last chance, try again", "New number");
        if (num == randNum) {
            alert("You have won!");
        }
        else {
            alert("Sorry you have lost!The correct number is " + randNum);
        }
    }
}


