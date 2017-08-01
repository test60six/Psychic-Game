var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letter = letters[Math.floor(Math.random()*letters.length)];
var wins = 0;
var losses = 0;
var left = 10;
var sofar = 0;
console.log(letters);
console.log(letter);
var sofardiv = document.getElementById("so-far"); // <--- notice we moved your sofar element to up here
document.onkeyup = function(event) {
    console.log(event.key);
    console.log(letter)
    if(event.key === letter) {
        wins++;
        reset();
    } else {
        left--;
        if (left === 0){
            losses++ ;
            reset();
        }

    }

    var windiv = document.getElementById("wins");
    windiv.textContent = wins;
    var leftdiv = document.getElementById("left");
    leftdiv.textContent = left;
    var lossdiv = document.getElementById("losses");
    lossdiv.textContent = losses;
    sofardiv.textContent+= event.key + ', ';

};
function reset(){
     letter = letters[Math.floor(Math.random()*letters.length)];
     left=10;
     sofardiv.textContent = '';
}