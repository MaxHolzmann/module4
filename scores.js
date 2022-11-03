const highScoreContainer = document.getElementById("highscores");


const sortScores = () => {
    let highScores = {};
    for(let i = 0; i < localStorage.length; i++) {
        highScores[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
    }

    let scoreArray = Object.entries(highScores)

    let sortedArray = scoreArray.sort((a, b) => a[1] - b[1]);

    return sortedArray;
}

const displayScores = (scores) => {
    for(let i = 0; i < scores.length; i++) {

        let newScore = document.createElement('p');
        console.log(scores[i]);
        newScore.textContent = scores[i];

        highScoreContainer.appendChild(newScore);

        
    }
}

displayScores(sortScores());


// add scores to an array by highest score number 