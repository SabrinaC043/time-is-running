// console.log ("Hello Goggins!");

// variable declarations

var ticker = document.getElementById("count");
var introContainer=document.getElementById("introduction");
var start = document.getElementById("start");
var questionContainer= document.getElementById("questions")
var title =document.getElementById("question1");
var answerOptions= document.getElementById("answers");
var endPage= document.getElementById("allSet");
var highScore= document.getElementById("score");
var inputInitials= document.getElementById("initials");
var goBack = document.getElementById("goBack");
var submit = document.getElementById("submit");
var questionIndex= 0; 
var outOfTime = "You are out of time, the Quiz has ended";
var timer = 100;
var intervalId;

var questions = [
  {
    question: "What is the name of David's autobiography?",
    answers: [
      "The Road to Somewhere",
      "Green Lights",
      "Finding Me",
      "Can't Hurt Me",
    ],
    onlyRight: "Can't Hurt Me",
  },
  {
    question: "What was David's previous job before he joined the Navy SEALs?",
    answers: [
      "Firefighter",
      "Security Officer",
      "Exterminator",
      "Computer Administrator",
    ],
    onlyRight: "Exterminator",
  },
  {
    question: "What SEAL team was David a part of?",
    answers: ["SEAL Team 5", "SEAL Team 3", "SEAL Team 2", "SEAL Team 7"],
    onlyRight: "SEAL Team 5",
  },
];

// Then a timer starts and I am presented with a question
function startQuiz() {
  ticker.textContent = timer 
  intervalId = setInterval(setTimeLeft,1000);
  // the intro container needs to be hidden and the question container needs to be shown and the first question needs to be displayed
  introContainer.setAttribute('class', 'hide');
  introContainer.removeAttribute('class', 'hide');
  questionContainer.setAttribute('class', 'show');
}

function showQuestion(){
 
  var currentQuestion= questions[questionIndex];

  title.textContent= currentQuestion.question

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    // create the buttons for the choices and add the text content to the buttons then append them to the answer container

    
  }
}

function setTimeLeft() {
    timer--;
    ticker.textContent = timer;
if(timer<=0){
  timer = 0
}

}

// wherever I put functionality for button click, it incriments the array -> make another variable that goes from 1-3 , incriments it up by one. (replaces the text content)

// WHEN I ANSWER A QUESTION THEN I AM PRESENTED WITH ANOTHER QUESTION
// for loop to iterate over the questions but how do you display them on new pages?
// do you have to  add an event listener to page load each time they hit submit?

//questions will have a class on them and make buttons static on page and the answer would become the text on the buttons.
// buttons will take new data and have a comparison function when clicked.
// IF I ANSWER QUESTIONS INCORRECTLY then time is docked from clock
// timer--
// WHEN ALL QUESTIONS HAVE BEEN ANSWERED OR TIMER HITS 0 -- then the GAME IS OVER
//
// prompt ("Enter your initials below:")
//
// console.log("HighScore")
//};

// THEN I CAN SAVE MY INITIALS AND SCORE
// INITIALS AND SCORE == KEEP TALLY OF SCORE IN GLOBAL MEMORY.
// prompt for initials and display to user high score (window.body.highScore)
//function displayQuestions(){
//     for (questions,question1) {
// document.write(question)
// function startQuiz () {
// if (questions[2]===true) {
//     // if question at the 2nd index position is true, then I want the user to keep the amount of time on there timer and add 2 seconds

// }

//1 .functionality of button
//2.
//3. Timer logic work
// PUSH scoreboard to LOCAL Storage //

// document.getElementsByClassName("btnstart").startQuiz;
// console.log("btnstart");
// document.getElementById("question1");
// document.getElementById("question2");
// document.getElementById("question3");
// bodyEl.appendChild("btnstart");

// // function showHighScore() {}

// // What does the user need to see when we append it?

// document.body.appendChild(startQuiz);
// document.body.appendChild(questions);
// document.body.appendChild(button);
// document.write("highScore");

// Issues encountered- tried to display questions

// add listener to Start Quiz
// document.getElementById("start").addEventListener("click", "startQuiz")
start.addEventListener("click", startQuiz);
