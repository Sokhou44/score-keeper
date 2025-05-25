"use strict";

const score1Span = document.querySelector(".score1");
const score2Span = document.querySelector(".score2");
const scoreInput = document.querySelector(".scoreInput");

const btn1 = document.querySelector(".btnPlayer1");
const btn2 = document.querySelector(".btnPlayer2");
const btnReset = document.querySelector(".btnReset");

let score1 = 0;
let score2 = 0;
let gameOver = false;

function getMaxScore() {
  return parseInt(scoreInput.value);
}

function updateScores() {
  score1Span.textContent = score1;
  score2Span.textContent = score2;
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  gameOver = false;
  updateScores();
  score1Span.classList.remove("gagnant", "perdant");
  score2Span.classList.remove("gagnant", "perdant");
  
}

btn1.addEventListener("click", () => {
   
    if (gameOver === false) {
     
      score1 = score1 + 1;
  
      if (score1 === getMaxScore()) {
        gameOver = true;
        score1Span.classList.add("gagnant"); 
        score2Span.classList.add("perdant");  
      }
  
      updateScores();
    }
  });

  btn2.addEventListener("click", () => {
    
    if (gameOver === false) {
    
      score2 = score2 + 1;
  
      if (score2 === getMaxScore()) {
        gameOver = true;
        score2Span.classList.add("gagnant");
        score1Span.classList.add("perdant"); 
      }
  
      updateScores();
    }
  });
  

btnReset.addEventListener("click", resetGame);
