var rand = Math.floor(Math.random() * 10 + 1);

var guess = Number(prompt("Guess the number between 1 to 10"));

if (rand === guess) {
  alert("Bingo! Correct answer");
} else if (guess === rand + 1 || guess === rand - 1) {
  alert("Close Enough to the Correct Answer \nCorrect Answer = " + rand);
} else {
  alert("Wrong \nCorrect Answer = " + rand);
}
