
myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    randomPlay =  myArray[Math.floor(Math.random()*myArray.length)];

    if (randomPlay == "Rock") {
        computerHand.src = "Images/rock.png";
        return "Rock";
    } else if (randomPlay == "Paper") {
        computerHand.src = "Images/paper.png";
        return "Paper";
    } else if (randomPlay == "Scissors") {
        computerHand.src = "Images/scissors.png";
        return "Scissors";
    }
};

const computerHand = document.getElementById("computer's hand");

let playerScore = document.getElementById("Player-score");
let computerScore = document.getElementById("Computer-score");

let playerStartingScore = 0;
let computerStaringScore = 0;
let pScore;
let cScore;
let result = document.getElementById("result");
let roundWinner = document.getElementById("round-winner");

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

rock.addEventListener("click", function() {
    playRound(this.id, computerPlay());
    changeToRock();
});

paper.addEventListener("click", function() {
    playRound(this.id, computerPlay());
    changeToPaper();
});

scissors.addEventListener("click", function() {
    playRound(this.id, computerPlay());
    changeToScissors();
});

function changeToRock() {
    const playerHand = document.getElementById("player's hand");
    playerHand.src = "Images/rock.png";
};

function changeToPaper() {
    const playerHand = document.getElementById("player's hand");
    playerHand.src = "Images/paper.png";
};

function changeToScissors() {
    const playerHand = document.getElementById("player's hand");
    playerHand.src = "Images/scissors.png";
};

let playRound = (playerSelection, computerSelection) => {

    const playerVsComputer = playerSelection + computerSelection;
    switch (playerVsComputer) {
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
            pScore = parseInt(playerStartingScore += 1);
            playerScore.innerHTML = pScore;
            result.innerHTML = playerSelection + " beats " + computerSelection
                    + ". You Win!"; 
            break;
        case "PaperScissors":
        case "ScissorsRock":
        case "RockPaper":
            cScore = parseInt(computerStaringScore += 1);
            computerScore.innerHTML = cScore;
            result.innerHTML = computerSelection + " beats " + playerSelection
                    + ". Computer Wins!";
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            result.innerHTML = playerSelection + " Vs " + computerSelection
                    + ". Draw";
            break; 
    }

    if (pScore == 5) {
        roundWinner.innerHTML = "You won this round!";
        setTimeout(function() { resetGame(); }, 5000);
    } else if (cScore == 5) {
        roundWinner.innerHTML = "Computer won this round!";
        setTimeout(function() { resetGame(); }, 5000);
    }
};

function resetGame() {
    playerStartingScore = 0;
    computerStaringScore = 0;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    roundWinner.innerHTML = "";
};