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

var startButton = document.querySelector("start-button");
var hideMain = document.querySelector('main');

// html elements to be populated with js
var question = document.querySelector('.question');
var answer1 = document.querySelector('.answer1');
var answer2 = document.querySelector('.answer2');
var answer3 = document.querySelector('.answer3');
var answer4 = document.querySelector('.answer4');



// function format(){
//     // This adds style to elements
//     question.setAttribute('style', 'font-size: 2em; text-align: center; padding: 10%');
//     answer1.setAttribute('style', 'background-color: #c2bbf0; border-radius: 8px; width: 50%; align-self: center; cursor: pointer; font-size: 1.5em; letter-spacing: 0.21px; padding: 10px');
//     answer2.setAttribute('style', 'background-color: #c2bbf0; border-radius: 8px; width: 50%; align-self: center; cursor: pointer; font-size: 1.5em; letter-spacing: 0.21px; padding: 10px');
//     answer3.setAttribute('style', 'background-color: #c2bbf0; border-radius: 8px; width: 50%; align-self: center; cursor: pointer; font-size: 1.5em; letter-spacing: 0.21px; padding: 10px');
//     answer4.setAttribute('style', 'background-color: #c2bbf0; border-radius: 8px; width: 50%; align-self: center; cursor: pointer; font-size: 1.5em; letter-spacing: 0.21px; padding: 10px');
//    }

startButton.addEventListener('click', startQuiz);


function startQuiz(){
    hideMain.style.display = 'none';
    question1();
}

startButton.addEventListener('click', startQuiz);

function question1(){
    //I added text to the buttons
    question.textContent = 'Question 1: Commonly used data types DO Not Include:';
    answer1.textContent = 'Strings';
    answer2.textContent = 'Booleans';
    answer3.textContent = 'Alerts';
    answer4.textContent = 'Numbers';
    }

   

function question2(){
    //I added text to the buttons
    question.textContent = 'Question 2: The condition in an if / else statement is enclosed with ___________.';
    answer1.textContent = 'Quotes';
    answer2.textContent = 'Curly brackets';
    answer3.textContent = 'Parenthesis';
    answer4.textContent = 'Square brackets';
   }