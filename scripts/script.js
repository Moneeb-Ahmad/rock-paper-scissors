console.log(game());

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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let prompt = window.prompt("Enter: Rock, Paper or Scissors: ");
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
      console.log("You win round " + i + " " + userChoice +
        " beats " + computerChoice);
    } else if (res.includes("lose")) {
      console.log("You lose round " + i + " " + computerChoice +
        " beats " + userChoice);
      computerScore++;
    } else if (res.includes("tie")) {
      console.log("Tie no points awarded");
    } else {
      console.log("Someone messed up");
    }
    console.log("End of round " + i + " Your Score: " + playerScore +
      " Computer Score: " + computerScore);
  }
  if (playerScore == computerScore) {
    return "Tie";
  } else if (playerScore > computerScore) {
    return "You win!";
  } else {
    return "You lose :(";
  }
}
