
/* 
TODO:

clean console logs

add dynamic text that fades away, displaying whether you were correct or incorrect.

*/

const startButton = document.getElementById("start");
const startContainer = document.getElementById('start-hidden');
const questionContainer = document.getElementById('question-hidden');

const questionText = document.getElementById('question');
const buttonOne = document.getElementById('ans1');
const buttonTwo = document.getElementById('ans2');
const buttonThree = document.getElementById('ans3');
const buttonFour = document.getElementById('ans4');
let correctText = document.getElementById('correct-text');
let incorrectText = document.getElementById('incorrect-text');

let questionNumber = 1;

const timerText = document.getElementById('timer');
let time = 90;
let allQuestionsAnswered;

const scoreSaveContainer = document.getElementById('save-score');
let scoreText = document.getElementById('score-text')
const saveScoreButton = document.getElementById('save-button');
const userInput = document.getElementById('username');


// Question objects

let questionOne = {
    question: "Which method adds items to the end an array?",
    answerOneText: "push()",
    answerTwoText: "pop()",
    answerThreeText: "splice()",
    answerFourText: "unshift()",
    answerOne: true,
    answerTwo: false,
    answerThree: false,
    answerFour: false
}

let questionTwo = {
    question: "Which one of these is not a variable keyword?",
    answerOneText: "var",
    answerTwoText: "let",
    answerThreeText: "if",
    answerFourText: "const",
    answerOne: false,
    answerTwo: false,
    answerThree: true,
    answerFour: false
}

let questionThree = {
    question: "What method will combine two strings?",
    answerOneText: "combine()",
    answerTwoText: "concat()",
    answerThreeText: "add()",
    answerFourText: "append()",
    answerOne: false,
    answerTwo: true,
    answerThree: false,
    answerFour: false
}

let questionFour = {
    question: "Which one of these accesses an HTML element by its ID?",
    answerOneText: "getElementById()",
    answerTwoText: "grabElementById()",
    answerThreeText: "elementId()",
    answerFourText: "findElementById()",
    answerOne: true,
    answerTwo: false,
    answerThree: false,
    answerFour: false
}


let questionFive = {
    question: "How do you access an HTML elements classes with JavaScript?",
    answerOneText: ".class",
    answerTwoText: ".cssClasses",
    answerThreeText: ".classes",
    answerFourText: ".classList",
    answerOne: false,
    answerTwo: false,
    answerThree: false,
    answerFour: true
}




startButton.addEventListener("click", () => {
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    
    timerText.textContent = time;

    const timer = setInterval(() => {

        if (time === 0) {
            clearInterval(timer);
        }

        if(allQuestionsAnswered) {
            clearInterval(timer);
            questionContainer.classList.add("hide");
            saveScore(time);
        }

        timerText.textContent = time;
        time--;

    }, 1000)

    questionText.textContent = questionOne.question;
    buttonOne.textContent = questionOne.answerOneText;
    buttonTwo.textContent = questionOne.answerTwoText;
    buttonThree.textContent = questionOne.answerThreeText;
    buttonFour.textContent = questionOne.answerFourText
    
});

// Button event listeners, checks if answer is correct/incorrect

buttonOne.addEventListener("click", () => {
    if(questionOne.answerOne && questionNumber === 1) {
        correctText.textContent = "Correct!";
        questionNumber++;
        checkQuestionNumber();
    } else if (questionFour.answerOne && questionNumber === 4) {
        correctText.textContent = "Correct!";
        questionNumber++;
        checkQuestionNumber();
    } else {
        incorrectText.textContent = "Incorrect.";
        time = time - 4;
        questionNumber++;
        checkQuestionNumber();
    }
});

buttonTwo.addEventListener("click", () => {
    if(questionThree.answerTwo && questionNumber == 3) {
        correctText.textContent = "Correct!";
        questionNumber++;
        checkQuestionNumber();
    } else {
        incorrectText.textContent = "Incorrect.";
        time = time - 4;
        questionNumber++;
        checkQuestionNumber();
    }
})

buttonThree.addEventListener("click", () => {
    if(questionTwo.answerThree && questionNumber == 2) {
        correctText.textContent = "Correct!";
        questionNumber++;
        checkQuestionNumber();
    } else {
        incorrectText.textContent = "Incorrect.";
        time = time - 4;
        questionNumber++;
        checkQuestionNumber();
    }
})

buttonFour.addEventListener("click", () => {
    if(questionFive.answerFour && questionNumber == 5) {
        correctText.textContent = "Correct!";
        questionNumber++;
        checkQuestionNumber();
    } else {
        incorrectText.textContent = "Incorrect.";
        time = time - 4;
        questionNumber++;
        checkQuestionNumber();
    }
});



// to check question number and set to correct question? 

const checkQuestionNumber = () => {

    setTimeout(() => {
        correctText.textContent = "";
        incorrectText.textContent = "";
    }, 2000)

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
    if(questionNumber == 4) {
        questionText.textContent = questionFour.question;
        buttonOne.textContent = questionFour.answerOneText;
        buttonTwo.textContent = questionFour.answerTwoText;
        buttonThree.textContent = questionFour.answerThreeText;
        buttonFour.textContent = questionFour.answerFourText;
    }
    if(questionNumber == 5) {
        questionText.textContent = questionFive.question;
        buttonOne.textContent = questionFive.answerOneText;
        buttonTwo.textContent = questionFive.answerTwoText;
        buttonThree.textContent = questionFive.answerThreeText;
        buttonFour.textContent = questionFive.answerFourText;
    } else if (questionNumber > 5) {
        allQuestionsAnswered = true; 
    }
}

//function to display enter initials screen 
const saveScore = (score) => {
    scoreSaveContainer.classList.remove("hide");
    scoreText.textContent = "Your score was " + score;
}

saveScoreButton.addEventListener("click", () => {
    localStorage.setItem(userInput.value, time);
    window.location.reload();
});

const getAllStorage = () => {
    let values = [];
    keys = Object.keys(localStorage),
    i = keys.length;

    while(i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    return values;
}
