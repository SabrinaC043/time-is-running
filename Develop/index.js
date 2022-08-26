// console.log ("Hello Goggins!");

// variable declarations
// array with    0                                               1                                    2                index and 3 for length 
var startQuiz= document.getElementsByClassName(".btnstart"); 
// let button= document.createElement("goback");
const submit = "";
var highScore="";
let buttonBack= document.getElementsByClassName("goback");
var bodyEl= document.getElementsByTagName("body");
var outOfTime= "You are out of time, the quiz has ended";
var timer= 15;

// number= input.value;

// what are we going to do with this?//
//a variable that is an array of object, each with a key value pair of: questions, answers, and the correct answer
var questions= [ {
    question: "What is the name of David's autobiography?",
    answers: ["The Road to Somewhere", "Green Lights", "Finding Me", "Can't Hurt Me"],
   onlyRight: "Can't Hurt Me",
}, 
{question: "What was David's previous job before he joined the Navy SEALs?",
answers: ["Firefighter", "Security Officer", "Exterminator", "Computer Administrator" ],
onlyRight:"Exterminator",
},
{
question: "What SEAL team was David a part of?",
answers: ["SEAL Team 5", "SEAL Team 3", "SEAL Team 2", "SEAL Team 7", ],
onlyRight:"SEAL Team 5",
},]

function timerTick(){
    var timer= setInterval(function () {
    
    timer--; 
    timeEl.textContent="You have", +  timer + "seconds left";
    if (timer===0) {
        clearInterval(timer);
        // stops execution of action at setInterval
        outOfTime();
  }
 }, 15000);
}

timerTick();

function startQuiz () {

    
}





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



























































// add listener to Start Quiz
// window.startQuiz.addEventListener("click", "startQuiz")