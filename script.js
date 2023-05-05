function getComputerChoice() {
    
    rnd = Math.round(Math.random() * 10);
    // console.log('Number generated is : ', rnd);
    if (rnd === 1 || rnd === 4 || rnd ===7) {
        choiceIs = 'paper';
        }
    else if (rnd === 2 || rnd === 5 || rnd ===8) {
        choiceIs = 'rock';
        }    
    else if (rnd === 3 || rnd === 6 || rnd ===9) {
        choiceIs = 'scissors';
        }    
    else {
        getComputerChoice();
    }
    return choiceIs;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection,computerSelection);

     if (playerSelection === 'paper') {
         if (computerSelection === 'paper'){
            result = 'draw'
         }
         else if (computerSelection === 'rock') {
            result = 'win'
         }
         else if (computerSelection === 'scissors'){
            result = 'lost';
         }
     }
     else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            result = 'lost'
         }
         else if (computerSelection === 'rock') {
            result = 'draw'
         }
         else if (computerSelection === 'scissors'){
            result = 'win';
         }
     }
     else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper'){
            result = 'win'
         }
         else if (computerSelection === 'rock') {
            result = 'lost'
         }
         else if (computerSelection === 'scissors'){
            result = 'draw';
         }
     }
     return result; 
}

 function compareWithCom(playerSelection) {
     console.log(playerSelection, computerSelection)
     if (playerSelection === computerSelection) {
         console.log('nobody wins, try again!')
     }
 }


function game() {
    const playerSelection = prompt('Please enter your choice:' );
    const computerSelection= getComputerChoice();
    console.log('You' ,playRound(playerSelection, computerSelection))
    
}


