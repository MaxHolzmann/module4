const highScoreContainer = document.getElementById("highscores");


const sortScores = () => {
    let highScores = {};
    for(let i = 0; i < localStorage.length; i++) {
        highScores[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
    }

    let scoreArray = Object.entries(highScores)

    return scoreArray.sort((a, b) => b[1] - a[1]);

}

const displayScores = (scores) => {
    for(let i = 0; i < scores.length; i++) {

        let newScore = document.createElement('p');
        newScore.textContent = scores[i].join(" - ");

        highScoreContainer.appendChild(newScore);

    }
}

displayScores(sortScores());


// add scores to an array by highest score number 