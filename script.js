
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

const scoreSaveContainer = document.getElementById('save-score');
let scoreText = document.getElementById('score-text')
const saveScoreButton = document.getElementById('save-button');
const userInput = document.getElementById('username');


// Questions object

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


    console.log('Event listener worked');
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
            console.log(time);
            saveScore(time);
        }

        timerText.textContent = time;
        time--;
    }, 1500)

    questionText.textContent = questionOne.question;
    buttonOne.textContent = questionOne.answerOneText;
    buttonTwo.textContent = questionOne.answerTwoText;
    buttonThree.textContent = questionOne.answerThreeText;
    buttonFour.textContent = questionOne.answerFourText
    
});

// Button event listeners, checks if answer is correct/incorrect

buttonOne.addEventListener("click", () => {
    if(questionOne.answerOne && questionNumber === 1) {
        console.log("Correct!")
        questionNumber++;
        checkQuestionNumber();
    } else if (questionFour.answerOne && questionNumber === 4) {
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
});

buttonTwo.addEventListener("click", () => {
    if(questionThree.answerTwo && questionNumber == 3) {
        console.log("correct");
        questionNumber++;
        checkQuestionNumber();
    } else {
        time = time - 4;
        questionNumber++;
        checkQuestionNumber();
    }
})

buttonThree.addEventListener("click", () => {
    if(questionTwo.answerThree && questionNumber == 2) {
        console.log("correct");
        questionNumber++;
        checkQuestionNumber();
    } else {
        time = time - 4;
        questionNumber++;
        checkQuestionNumber();
    }
})

buttonFour.addEventListener("click", () => {
    if(questionFive.answerFour && questionNumber == 5) {
        console.log("correct");
        questionNumber++;
        checkQuestionNumber();
    } else {
        time = time - 4;
        questionNumber++;
        checkQuestionNumber();
    }
});



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

    scoreText.textContent = "Your score was " + score + "\nEnter your name to save your score!";
    //take in time variable to save with the entered initials.

}

saveScoreButton.addEventListener("click", () => {
    console.log("hey this owrked");
    localStorage.setItem(userInput.value, time);
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
