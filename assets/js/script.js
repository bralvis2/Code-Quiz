// Array storing 10 Quiz Questions, answer choices, and correct asnwer. 
let questions = [
    {
        title: 'Commonly used data types DO Not Include:',
        alternatives: ['Strings', 'Booleans', 'Alerts', 'Numbers',],
        answer: 2
    },
    {
        title: 'The condition in an if/else statement is enclosed with __________.',
        alternatives: ['quotes', 'curly brackets', 'parenthesis', 'square brackets',],
        answer: 1
    },
    {
        title: 'Arrays in JavaScript can be used to store',
        alternatives: ['numbers and strings', 'other arrays', 'booleans', 'all of the above',],
        answer: 3
    },
    {
        title: 'String values must be enclosed within ________ when being assigned to variables.',
        alternatives: ['commas', 'curly brackets' , 'quotes', 'parenthesis',],
        answer: 2
    },
    {
        title: 'A very useful tool used during developent and debugging for printing content to the debugger is:',
        alternatives: ['JavaScript','terminal/bash', 'for loops', 'console.log',],
        answer: 3
    },
    {
        title: 'What is JavaScript?',
        alternatives: ['programing language', 'HTML tags', 'CSS', 'A web page',],
        answer: 0
    },
    {
        title: 'JavaScript can:',
        alternatives: ['Interact with HTML', 'Can make your web pages dynamic', 'Check or validate user input', 'All of the above',],
        answer:  3
    },
    {
        title: 'A variable is used to:',
        alternatives: ['Store a value in memory', 'Store value that does not change', 'Draw a circle', 'Draw a rectangle',],
        answer: 0
    },
    {
        title: 'A string is used for storing:',
        alternatives: ['Numbers', 'Images', 'Text', 'Integers',],
        answer: 2
    },
    {
        title: 'JavaScript uses the _________ keyword to define variables.',
        alternatives: ['vrb', 'var', 'vari', 'va',],
        answer: 1
    },
]

// Targeting HTML Elements
var header = document.getElementById('header');
var highScoreButton = document.querySelector('.linktohighscores');
var timerEl = document.querySelector('.timer');
var startButton = document.querySelector(".start-button");
var hideMain = document.querySelector('main');
var quizEl = document.querySelector('.questionCard');
var titleEl = document.querySelector('.title');
var alts = document.querySelector('.alternatives');
var endEl = document.querySelector('.end');
var btnA = document.querySelector('#a');
var btnB = document.querySelector('#b');
var btnC = document.querySelector('#c');
var btnD = document.querySelector('#d');
var feedback = document.querySelector('#feedback-text');
var finalScore = document.querySelector('.finalScore')
var saveButton = document.querySelector('.submit-btn');
var highScoreEl = document.querySelector('#highScores');
var highScoreTitle = document.querySelector('#highScoreTitle');
var highScoreList = document.querySelector('#userHighScores');
var playAgain = document.querySelector('.play-again-btn');

// Variables for Question progression and check answers
var finalQuestion = questions.length;
var currentQuestion = 0;
var correct = '';

// Variables for a Timer
var timeLeft;
var interval;


// Variables for total score
var score = 0;

// Sets up the timer function
function startTimer(){
    timeLeft = 100;

    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
            timerEl.innerHTML = 'Seconds Remaining: ' + timeLeft;
            timeLeft--;
        }else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endQuiz();
        }

    }, 1000);
}

// High Score Link in the Header takes you to the High Score page
highScoreButton.addEventListener('click', highScore);
highScoreButton.setAttribute


// Populates the quiz with the 10 question, answer choices, and correct answer Array
function showQuizQuestions(){
    if (currentQuestion === finalQuestion){
        return  endQuiz();
    }

    let currentQuestions = questions[currentQuestion];
    titleEl.innerHTML = currentQuestions.title;
    btnA.innerHTML = currentQuestions.alternatives[0];
    btnB.innerHTML = currentQuestions.alternatives[1];
    btnC.innerHTML = currentQuestions.alternatives[2];
    btnD.innerHTML = currentQuestions.alternatives[3];


    }

// This is suppose to compare the correct answer from the question array with the user selected option.
function checkAnswers(answ){
  let correctAnswer = questions[currentQuestion].answer;

  if(answ !== correctAnswer){
    feedback.innerHTML = 'Correct!';
    currentQuestion++;
    showQuizQuestions();
    score = +10;
  } else {
    feedback.innerHTML = 'Incorrect try again';
    timeLeft = timeLeft - 10;
    score = -5;
  }  
}

// added event listners to buttons to check answers when clicked
btnA.addEventListener('click',checkAnswers);
btnB.addEventListener('click',checkAnswers);
btnC.addEventListener('click',checkAnswers);
btnD.addEventListener('click',checkAnswers);



/* This function has users eneter and save their name. It also hides the 
header element and progresses to the high scores section*/
function endQuiz(){
    endEl.style.display = 'block';
    quizEl.style.display= 'none';
    header.style.display='none';
    finalScore.innerHTML = score;
    saveButton.addEventListener('click', highScore);
}

// this is suppose to save the username into the local storage
saveButton.addEventListener('click', function(event){
    event.preventDefault();
    var userName = document.querySelector('#username').value;
    localStorage.setItem('name',userName);
    console.log(userName);
})
// Display the high scores from local Storage
function highScore(event){
    event.preventDefault();
    endEl.remove();
    highScoreEl.style.display = 'block';
    var hs = localStorage.getItem('name');
    var attempts = document.createElement('li');
    attempts.textContent = hs + ':' + score;
    attempts.setAttribute('style','font-size: 1em; color: #f1e3f3; margin-bottom: 10px')
    highScoreList.appendChild(attempts);
}

// This will hide the start game elements and display the questions.
function startQuiz(){
    hideMain.style.display = 'none';
    quizEl.style.display = 'block';
    timerEl.style.display = 'block';
    showQuizQuestions();
    startTimer();
};

// Play Again Button 
playAgain.addEventListener('click', restartQuiz);

function restartQuiz(){
hideMain.style.display = 'block';
header.style.display = 'block';
highScoreEl.style.display = 'none';
startQuiz();
}

// Hides the Start main element of the HTML
startButton.addEventListener('click', startQuiz);
// playAgain.addEventListener('click', );