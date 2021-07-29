// Rock, Paper, Scissor game
function play() {
    
    let userChoice = prompt('Rock, paper or scissors?').toLowerCase();

    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = options[randomNum];

    if (options.indexOf(userChoice) == -1) {
        return 'Please select a valid option.';
    }

    // Outcomes
    const draw = 'Draw!';
    const win = 'You win!';
    const lose = 'You lose!';
    const messagePC = 'The computer played:';
    const messageUser = 'You played:';

    switch(userChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'rock':
                    console.log(`${messageUser} ${userChoice}`); 
                    console.log(`${messagePC} ${computerChoice}`); 
                    console.log(draw);
                    break;
                case 'paper':
                    console.log(`${messageUser} ${userChoice}`); 
                    console.log(`${messagePC} ${computerChoice}`);
                    console.log(lose);
                    break;
                case 'scissors':
                    console.log(`${messageUser} ${userChoice}`); 
                    console.log(`${messagePC} ${computerChoice}`);
                    console.log(win);
                    break;
            }
            break;
    case 'scissors':
            switch(computerChoice) {
                case 'rock':
                    console.log(`${messageUser} ${userChoice}`); 
                    console.log(`${messagePC} ${computerChoice}`); 
                    console.log(lose);
                    break;
                case 'paper':
                    console.log(`${messageUser} ${userChoice}`); 
                    console.log(`${messagePC} ${computerChoice}`);
                    console.log(win);
                    break;
                case 'scissors':
                    console.log(`${messageUser} ${userChoice}`); 
                    console.log(`${messagePC} ${computerChoice}`);
                    console.log(draw);
                    break;
            }
            break;
    case 'paper':
        switch(computerChoice) {
            case 'rock':
                console.log(`${messageUser} ${userChoice}`); 
                console.log(`${messagePC} ${computerChoice}`);
                console.log(win);
                break;
            case 'paper':
                console.log(`${messageUser} ${userChoice}`); 
                console.log(`${messagePC} ${computerChoice}`);
                console.log(draw);
                break;
            case 'scissors':
                console.log(`${messageUser} ${userChoice}`); 
                console.log(`${messagePC} ${computerChoice}`);
                console.log(lose);
                break;
        }
        break;
    }
}
