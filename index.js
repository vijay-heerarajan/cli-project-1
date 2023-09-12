var readlineSync = require('readline-sync');

var score = 0;

// data of high score
var highScores = [
  {
    name: "Raj",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

var userName = readlineSync.question("what's your name? ");

console.log(userName + " Do you know Vijay? ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("you are right!");
    score = score + 1;
  } else {
    console.log("you are wrong!");
  }
  console.log("current score: ", score);
  console.log("----------");

}

var questionOne = {
  question: "where do I live? ",
  answer: "dhanbad"
}

var questionTwo = {
  question: "my favorite superhero would be? ",
  answer: "ironman"
}

var questionThree = {
  question: "my favorite sprots would be? ",
  answer: "cricket"
}

var questionFour = {
  question: "my favorite movie would be? ",
  answer: "ironman"
}

var questionFive = {
  question: "my favorite food would be? ",
  answer: "paneer"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

showScores();

