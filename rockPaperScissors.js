const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb'){
        return userInput;
    } else {
        console.log('error');
    }
}

const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb'){
        return 'Player wins!'
    }
    if (userChoice === computerChoice) {
        return 'Tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'Player wins!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'Player wins!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'Player wins!';
        }
    }

}

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(userChoice)
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()
