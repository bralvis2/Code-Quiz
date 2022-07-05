/* code quiz js

landing page with start button 
when start button is clicked remove welcome msg and append question 1
    addEvent listener to button
        activity 12
    start timer
    user answers question read chosen element, data value, compare to answer key.
        activity 19
    if correct next question
    if incorrect subtract 10 seconds from timer
    end quiz
        add up user score 
        display input for my user to type their name
        second html and disply user name and score - read object from local storage/activity 24*/

// Array storing 10 Quiz Questions, answer choices, and correct asnwer. 
let questions = [
    {
        title: 'Commonly used data types DO Not Include:',
        alternatives: ['Strings', 'Booleans', 'Alerts', 'Numbers',],
        correctAnswer: 'Alerts'
    },
    {
        title: 'The condition in an if/else statement is enclosed with __________.',
        alternatives: ['quotes', 'curly brackets', 'parenthesis', 'square brackets',],
        correctAnswer: 'curly brackets'
    },
    {
        title: 'Arrays in JavaScript can be used to store',
        alternatives: ['numbers and strings', 'other arrays', 'booleans', 'all of the above',],
        correctAnswer: 'all of the above'
    },
    {
        title: 'String values must be enclosed within ________ when being assigned to variables.',
        alternatives: ['commas', 'curly brackets' , 'quotes', 'parenthesis',],
        correctAnswer: 'quotes'
    },
    {
        title: 'A very useful tool used during developent and debugging for printing content to the debugger is:',
        alternatives: ['JavaScript','terminal/bash', 'for loops', 'console.log',],
        correctAnswer: 'console.log'
    },
    {
        title: 'What is JavaScript?',
        alternatives: ['programing language', 'HTML tags', 'CSS', 'A web page',],
        correctAnswer: 'programing language'
    },
    {
        title: 'JavaScript can:',
        alternatives: ['Interact with HTML', 'Can make your web pages dynamic', 'Check or validate user input', 'All of the above',],
        correctAnswer:  'All of the above'
    },
    {
        title: 'A variable is used to:',
        alternatives: ['Store a value in memory', 'Store value that does not change', 'Draw a circle', 'Draw a rectangle',],
        correctAnswer: 'Store a value in memory'
    },
    {
        title: 'A string is used for storing:',
        alternatives: ['Numbers', 'Images', 'Text', 'Integers',],
        correctAnswer: 'Text'
    },
    {
        title: 'JavaScript uses the _________ keyword to define variables.',
        alternatives: ['vrb', 'var', 'vari', 'va',],
        correctAnswer: 'var'
    },
]

// Targeting HTML Elements
var header = document.querySelector('#header');
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
var feedback = document.querySelector('#feedback-text')



// Global variables
var finalQuestionIndex = questions.length;
var currentQuestionIndex = 0;
var timeRemaining = 100;
var timerInterval;
var score = 0;
var correct;


// This will hide the start game elements and display the questions.
function startQuiz(){
    hideMain.style.display = 'none';
}

// Hides the Start main element of the HTML
startButton.addEventListener('click', startQuiz);


// Populates the quiz with the 10 question, answer choices, and correct answer Array
function showQuizQuestions(){
    if (currentQuestionIndex === finalQuestionIndex){
        return  endQuiz();
    
    }
    let currentQuestion = questions[currentQuestionIndex];
    titleEl.innerHTML = currentQuestion.title;
    btnA.innerHTML = currentQuestion.alternatives[0];
    btnB.innerHTML = currentQuestion.alternatives[1];
    btnC.innerHTML = currentQuestion.alternatives[2];
    btnD.innerHTML = currentQuestion.alternatives[3];
    };

function checkAnswers(event){
    let correct = questions[currentQuestionIndex].correctAnswer;

    if (event === correct){
        feedback.innerHTML = 'Correct!'
        currentQuestionIndex++;
        showQuizQuestions();
    }else{
        feedback.innerHTML = 'Incorrect'
        currentQuestionIndex++;
        showQuizQuestions();
    }
}

function endQuiz(){
    endEl.style.display = 'block';
    quizEl.style.display= 'none';
    header.style.display='none';

}
// function answerChoices (answer){
//     correct = questions[currentQuestionIndex].correctAnswer;
    
//     if(answer === correct && currentQuestionIndex !== finalQuestionIndex){
//         score++;
//         feedback.innerHTML = 'Correct!';
//         currentQuestionIndex++;
//         showQuizQuestions();
//     }else {
//         score--;
//         feedback.innerHTML = 'Incorrect';
//         currentQuestionIndex++;
//         showQuizQuestions();
//     }
      
//     }


// This will hide the start game elements and display the questions.
function startQuiz(){
    hideMain.style.display = 'none';
    quizEl.style.display = 'block';
    showQuizQuestions();
};

// Hides the Start main element of the HTML
startButton.addEventListener('click', startQuiz);