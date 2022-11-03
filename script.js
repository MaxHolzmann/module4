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

startButton.addEventListener("click", () => {
    console.log('Event listener worked');
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
});