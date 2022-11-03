// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


/* 

mental notes:
i want to use local storage to keep high scores and view them
i want to learn how to timer
dynamically update timer
update answers (thats just button text, but change the value of the html button depending on the correct answer, maybe using an if statement with an object or something?)

*/

const startButton = document.getElementById("start");
const startContainer = document.getElementById('start-hidden');
const questionContainer = document.getElementById('question-hidden');

const questionText = document.getElementById('question');
const buttonOne = document.getElementById('ans1');
const buttonTwo = document.getElementById('ans2');
const buttonThree = document.getElementById('ans3');
const buttonFour = document.getElementById('ans4');

let questionNumber = 1;


const timerText = document.getElementById('timer');
let time = 60;
let allQuestionsAnswered;


// Questions object

let questionOne = {
    question: "What is this question?",
    answerOneText: "This answer is correct",
    answerTwoText: "This answer is wrong",
    answerThreeText: "This answer is wrong",
    answerFourText: "This answer is wrong",
    answerOne: false,
    answerTwo: false,
    answerThree: false,
    answerFour: false
}

let questionTwo = {
    question: "What is this question 2?",
    answerOneText: "This answer is correct",
    answerTwoText: "This answer is wronggg",
    answerThreeText: "This answer is wronggg",
    answerFourText: "This answer is wronggg",
    answerOne: false,
    answerTwo: false,
    answerThree: false,
    answerFour: false
}

let questionThree = {
    question: "What is this question 3?",
    answerOneText: "This answer is correct",
    answerTwoText: "This answer is wrong",
    answerThreeText: "This answer is wrong",
    answerFourText: "This answer is wrong",
    answerOne: false,
    answerTwo: false,
    answerThree: false,
    answerFour: false
}





startButton.addEventListener("click", () => {


    console.log('Event listener worked');
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    
    timerText.textContent = time;

    const timer = setInterval(() => {

        if (time === 0) {
            clearInterval(timer);
        }

        if(allQuestionsAnswered) {
            clearInterval(timer)
        }

        timerText.textContent = time;
        time--;
    }, 1500)

    // questionText.textContent = questionOne.question;
    // buttonOne.textContent = questionOne.answerOneText;
    // buttonTwo.textContent = questionOne.answerTwoText;
    // buttonThree.textContent = questionOne.answerThreeText;
    // buttonFour.textContent = questionOne.answerFourText;

    if(questionNumber == 2) {
        questionText.textContent = questionTwo.question;
        buttonOne.textContent = questionTwo.answerOneText;
        buttonTwo.textContent = questionTwo.answerTwoText;
        buttonThree.textContent = questionTwo.answerThreeText;
        buttonFour.textContent = questionTwo.answerFourText;
    }
    

});

buttonOne.addEventListener("click", () => {
    if(questionOne.answerOne == true) {
        console.log("Correct!")
        questionNumber++;
        checkQuestionNumber();
    } else {
        console.log("incorrect")
        time = time - 4;
        questionNumber++;
        console.log(questionNumber);
        checkQuestionNumber();
    }
})

// to check question number and set to correct question? 

const checkQuestionNumber = () => {
    if(questionNumber == 2) {
        questionText.textContent = questionTwo.question;
        buttonOne.textContent = questionTwo.answerOneText;
        buttonTwo.textContent = questionTwo.answerTwoText;
        buttonThree.textContent = questionTwo.answerThreeText;
        buttonFour.textContent = questionTwo.answerFourText;
    }
    if(questionNumber == 3) {
        questionText.textContent = questionThree.question;
        buttonOne.textContent = questionThree.answerOneText;
        buttonTwo.textContent = questionThree.answerTwoText;
        buttonThree.textContent = questionThree.answerThreeText;
        buttonFour.textContent = questionThree.answerFourText;
    }
}