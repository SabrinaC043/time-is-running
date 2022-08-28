// console.log ("Hello Goggins!");

// variable declarations

var ticker = document.getElementById("count"); // seconds remeaining countdown for user to see 
var introContainer = document.getElementById("introduction"); // David Goggins Quiz Intro 
var start = document.getElementById("start"); // Start Quiz Button 
var questionContainer = document.getElementById("questions"); // Question Container 
var questionTitle = document.getElementById("questionOne");// Question One
var answerOptions = document.getElementById("answers"); // Options to select from (buttons will be created for these with events that will take away time or add time based off of response from user-> this will require an event handler for with a function of an if-else statement bound to it if () {add time and continue to next question} {else=take time away and stay on same page})
var endPage = document.getElementById("allSet"); // last page of quiz 
var highScore = document.getElementById("score");
var score =60
 // display scores 
//var inputInitials = document.getElementById("initials"); // need to store Initials in local storage --> will need a form element to for initials but it will also need prevent default to keep form from -
var goBack = document.getElementById("goBack"); // button that goes back to previous page 
var submit = document.getElementById("submit"); // closes out page 
var questionIndex = 0;
var outOfTime = "The game is Over";
var timer = 100;
var intervalId;
var questions = [
  {
    question: "What is the name of David's autobiography?",
    answers: [
      "The Road to Somewhere",
      "Green Lights",
      "Finding Me",
      "Can't Hurt Me"
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

  ticker.textContent = timer;
  intervalId = setInterval(
    
    setTimeLeft,
    1000);

  if(timer===0){clearInterval(intervalId)}

  // the intro container needs to be hidden and the question container needs to be shown and the first question needs to be displayed
  introContainer.setAttribute("class", "hide");
  questionContainer.removeAttribute('class')
  showQuestion();
}


function showQuestion() {

  var currentQuestions = questions[questionIndex];
  questionTitle.textContent = currentQuestions.question;

  answerOptions.innerHTML = '';
  for (let i = 0; i < currentQuestions.answers.length; i++) {
    // create buttons
    var btn = document.createElement('button')
    btn.textContent = currentQuestions.answers[i]
    btn.setAttribute('value', currentQuestions.answers[i])

    btn.addEventListener('click', answers)
    answerOptions.append(btn)

  };

};

function answers(e) {

  // conditional to check if the answer is wrong deduct time.
  if (questions[questionIndex].onlyRight !== e.target.value) {
    timer -= 15;
    score -=5
    ticker.textContent = timer;

    if (ticker < 0) {
      ticker = 0;
    }
  };
  // move to the next question

  questionIndex++

  // if you run out of questions the game is over

  if (ticker <= 0 || questions.length === questionIndex) {
    clearInterval(intervalId)
    alert('The Game is Over')
    lastPage()
    //return false
  } else {
    showQuestion()



  }
}

//var endPage = document.getElementById("allSet"); // last page of quiz 
//var highScore = document.getElementById("score"); // display scores 
//var inputInitials = document.getElementById("initials"); // need to store Initials in local storage --> will need a form element to for initials but it will also need prevent default to keep form from -
//var goBack = document.getElementById("goBack"); // button that goes back to previous page 
//var submit = document.getElementById("submit"); // closes out page //
function lastPage() {
  
  document.getElementById('questions').style.display="none"
    allSet.removeAttribute('class');
    document.getElementById('submit').onclick= mylocalStorage
    
 
  // the intro container needs to be hidden and the question container needs to be shown and the first question needs to be displayed
  //allSet.setAttribute("class", "hide");
  
};

function mylocalStorage(e){
  e.preventDefault()
  var initials =document.getElementById('initials').value;
  localStorage.setItem("initials", JSON.stringify(initials));
  localStorage.setItem("score", JSON.stringify(score));


//endPage.textContent = inputInitials;
//inputInitials.value = "";

}


function setTimeLeft() {
  timer--;
  ticker.textContent = timer;

};

introContainer.addEventListener("click", startQuiz);
