/*console.log(game());*/
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultsContainer = document.querySelector('.results');
let gameOver = false;

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;


function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      return "The computer has intelligence issues...";
      break;
  }
}

function playRound(playerSelection, computerSelection = computerPlay()) {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "tie,rock";
          break;
        case "paper":
          return "lose,paper";
          break;
        case "scissors":
          return "win,scissors";
          break;
        default:
          return "Something went wrong in the round...";
      }
      break;

    case "paper":
      switch (computerSelection) {
        case "rock":
          return "win,rock";
          break;
        case "paper":
          return "tie,paper";
          break;
        case "scissors":
          return "lose,scissors";
          break;
        default:
          return "Something went wrong in the round...";
      }
      break;

    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "lose,rock";
          break;
        case "paper":
          return "win,paper";
          break;
        case "scissors":
          return "tie,scissors";
          break;
        default:
          return "Something went wrong in the round...";
      }
      break;

    default:
      return `Check your spelling! You can only
        choose Rock, Paper or Scissors!`
      break;
  }

}

function game(playerSelection) {
  roundNumber++;
  let prompt = playerSelection;
  let userChoice = prompt.toLowerCase();
  let res = playRound(prompt);
  let arr;
  let computerChoice;
  if (!res.includes("Check")) {
    arr = res.split(",");
    computerChoice = arr[1];
  } else {
    computerChoice = "";
    userChoice = "";
  }
  if (res.includes("win")) {
    playerScore++;
    resultsContainer.textContent = `You win round ${roundNumber}
      ${userChoice} beats ${computerChoice}`;
  } else if (res.includes("lose")) {
    resultsContainer.textContent = `You lose round ${roundNumber}
      ${computerChoice} beats ${userChoice}`;
    computerScore++;
  } else if (res.includes("tie")) {
    resultsContainer.textContent = `Tie no points awarded`;
  } else {
    resultsContainer.textContent = `Someone messed up`;
  }
  resultsContainer.textContent += ` End of round ${roundNumber}
    Your Score: ${playerScore} Computer Score: ${computerScore}`;
  if (playerScore == 5) {
    resultsContainer.textContent += " You won!";
    gameOver = true;
  } else if (computerScore == 5) {
    resultsContainer.textContent += "You lost :(";
    gameOver = true;
  }
}

function selection(e) {
  if (playerScore < 5 && computerScore < 5) {
    game(e.target.className.toString().toLowerCase());
  } else {
    if (gameOver) {
      resultsContainer.textContent += ` Game Over Refresh the page
        to play again!`;
      gameOver = false;
    }
  }
}

rock.addEventListener('click', selection);
paper.addEventListener('click', selection);
scissors.addEventListener('click', selection);
