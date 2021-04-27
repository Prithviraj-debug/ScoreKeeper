var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Display = document.querySelector("#p1Display");
var p1Score = 0;

var p2Display = document.querySelector("#p2Display");
var p2Score = 0;

var gameOver = false;
var winningScore = 5;


p1Btn.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.toggle("green");
            gameOver = true;
            alert("Game Over, Player 1 Won");
        }
        p1Display.textContent = p1Score;
    }
    
});

p2Btn.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.toggle("green");
            gameOver = true;
            alert("Game Over, Player 2 Won");
        }
        p2Display.textContent = p2Score;
    }
    
});

reset.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("green");
    p2Display.classList.remove("green");
    gameOver = false;
    
});

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("green");
    p2Display.classList.remove("green");
    gameOver = false;
});