let randomNumber = parseInt(Math.random() *100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`please enter a valid number`)
    } else if (guess<1){
        alert(`please enter a number more than 1 `)
    } else if (guess > 100){
        alert(`please enter a number less than 100 `)
    } else {
        preGuess.push(guess);
        if (numGuess === 6) {
            displayGuess(guess);
            displayMassage(`Game Over . Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMassage(`Y0u guessed it right`);
        endGame();
    } else if (guess < randomNumber){
        displayMassage(`Number is TOOO low`);
    } else if (guess > randomNumber){
        displayMassage(`Number is TOOO High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${6 - numGuess}`;
}

function displayMassage(massage){
    lowOrHi.innerHTML = `<h2>${massage}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() *100 + 1);
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${6 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true;        
    })
}