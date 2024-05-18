let humanScore = 0;
let computerScore = 0;


  const divText = document.querySelector(".displayEvents");

  const btnRock=document.querySelector(".rock");
  
  const btnPaper=document.querySelector(".paper");
  const btnScissors=document.querySelector(".scissors");

  btnRock.addEventListener("click", () => {
    playRound("rock",getComputerChoice());
    
  });

  btnPaper.addEventListener("click", () => {
    playRound("paper",getComputerChoice());
    
  });

  btnScissors.addEventListener("click", () => {
    playRound("scissors",getComputerChoice());
    
  });

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter Rock, Paper or Scissors");
  if (
    choice.toLowerCase() == "rock" ||
    choice.toLowerCase() == "paper" ||
    choice.toLowerCase() == "scissors"
  ) {
    return choice.toLowerCase();
  } else {
    return "an Invalid choice, pick Rock, Paper or Scissors!";
  }
}


  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      divText.textContent += "You Win! Rock beats Scissors\n";
      humanScore += 1;
      divText.textContent += `Score: You=${humanScore} to Computer=${computerScore} \n`;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      divText.textContent+="You Lose! Paper beats Rock\n";
      computerScore += 1;
      divText.textContent += `Score: You=${humanScore} to Computer=${computerScore} \n`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      divText.textContent+="You Win! Paper beats Rock\n";
      humanScore += 1;
      divText.textContent += `Score: You=${humanScore} to Computer=${computerScore} \n`;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      divText.textContent+="You Lose! Scissors beats Paper\n";
      computerScore += 1;
      divText.textContent += `Score: You=${humanScore} to Computer=${computerScore} \n`;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      divText.textContent+="You Win! Scissors beats Paper\n";
      humanScore += 1;
      divText.textContent += `Score: You=${humanScore} to Computer=${computerScore} \n`;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      divText.textContent+="You Lose! Rock beats Scissors\n";
      computerScore += 1;
      divText.textContent += `Score: You=${humanScore} to Computer=${computerScore} \n`;
    } else if (
      (humanChoice == "rock" && computerChoice == "rock") ||
      (humanChoice == "paper" && computerChoice == "paper") ||
      (humanChoice == "scissors" && computerChoice == "scissors")
    ) {
      divText.textContent+="It's a Tie!\n";
    } else {
      divText.textContent+="You Made an Invalid Choice, This Round Goes to No one!\n";
    }
  }

  
