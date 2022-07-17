const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'lizard' || userInput === 'spock') {
      return userInput;
    } else {
      console.log('Error!');
    }
  }
  
  const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 5);
   switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    case 3:
      return 'lizard';
    case 4:
      return 'spock';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return "Tie!";
      }
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          return "Paper covers rock. Computer wins!";
        }
      }
      if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          return "Scissors cuts paper. Computer wins!";
        }
      }
      if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          return "Rock crushes scissors. Computer wins!";
        }
      }
      if (userChoice === "lizard") {
        if (computerChoice === "rock") {
          return "Rock crushes lizard. Computer wins!";
        }
      }
      if (userChoice === "lizard") {
        if (computerChoice === "scissors") {
          return "Scissors decapitates lizard. Computer wins!";
        }
      }
      if (userChoice === "paper") {
        if (computerChoice === "lizard") {
          return "Lizard eats paper. Computer wins!";
        }
      }
      if (userChoice === "spock") {
        if (computerChoice === "lizard") {
          return "Lizard poisons Spock. Computer wins!";
        }
      }
      if (userChoice === "spock") {
        if (computerChoice === "paper") {
          return "Paper disproves Spock. Computer wins!";
        }
      }
      if (userChoice === "rock") {
        if (computerChoice === "spock") {
          return "Spock vaporizes rock. Computer wins!";
        }
      }
      if (userChoice === "scissors") {
        if (computerChoice === "spock") {
          return "Spock smashes scissors. Computer wins!";
        }
      }
      // opposite answers
      if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          return 'Paper covers rock. You won!';
        } 
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
          return 'Scissors cuts paper. You won!';
        }
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
          return 'Rock crushes scissors. You won!';
        } 
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'lizard') {
          return 'Rock crushes lizard. You won!';
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'lizard') {
          return 'Scissors decapitates lizard. You won!';
        }
      }
      if (userChoice === 'lizard') {
        if (computerChoice === 'paper') {
          return 'Lizard eats paper. You won!';
        }
      }
      if (userChoice === 'lizard') {
        if (computerChoice === 'spock') {
          return 'Lizard poisons Spock. You won!';
        } 
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'spock') {
          return 'Paper disproves Spock. You won!';
        }
      }
      if (userChoice === 'spock') {
        if (computerChoice === 'rock') {
          return 'Spock vaporizes rock. You won!';
        }
      }
      if (userChoice === 'spock') {
        if (computerChoice === 'scissors') {
          return 'Spock smashes scissors. You won!';
        }
      }
    };
  
    const playGame = () => {
      const userChoice = getUserChoice('scissors');
      const computerChoice = getComputerChoice();
      console.log(`You threw: ${userChoice}.`);
      console.log(`The computer threw: ${computerChoice}.`);
      
      console.log(determineWinner(userChoice, computerChoice))
  };
  
  playGame()
  