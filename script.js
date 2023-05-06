//generates random numbers and assign it value betweek choices (rock, paper, scissors)

function getComputerChoice() {
    
    rnd = Math.round(Math.random() * 10);
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
//tests and confirms who wins the round
function playRound(playerSelection, computerSelection) {
    console.log("You chose: ", playerSelection, "\nCOM chose: ", computerSelection);

     if (playerSelection === 'paper') {
         if (computerSelection === 'paper'){
            result = 'draw';
         }
         else if (computerSelection === 'rock') {
            result = 'win';
         }
         else if (computerSelection === 'scissors'){
            result = 'lost';
         }
     }
     else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            result = 'lost';
         }
         else if (computerSelection === 'rock') {
            result = 'draw';
         }
         else if (computerSelection === 'scissors'){
            result = 'win';
         }
     }
     else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper'){
            result = 'win';
         }
         else if (computerSelection === 'rock') {
            result = 'lost';
         }
         else if (computerSelection === 'scissors'){
            result = 'draw';
         }
     } 
    
     return result; 
}
// runs 5 rounds and displays player and  COM scores
function game() {

    let playerScore = 0;
    let comScore = 0;

for (i=0; i<=4; i++){
    const playerSelections = prompt('Please enter your choice:' );
    const computerSelection = getComputerChoice();  
    const playerSelection = playerSelections.toLocaleLowerCase();
    
    


        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") 
            {
            roundResult = playRound(playerSelection, computerSelection);
                if (roundResult === "win") {
                    playerScore = playerScore + 1;
                    console.log("CURRENT SCORE \nYour score is: ", playerScore, "\nCOM score is: ", comScore);    
                }
                else if (roundResult === "lost" ){
                    comScore = comScore + 1;
                    console.log("CURRENT SCORE \nYour score is: ", playerScore, "\nCOM score is: ", comScore);
                }
                else if (roundResult === "draw") {

                    console.log("It's a DRAW! \nCURRENT SCORE \nYour score is: ", playerScore, "\nCOM score is: ", comScore);  
                }
            }
        else {
            i = i-1;
            console.log("Please choose between rock, paper and scissors only.") /* when user enters invalid choice */
        }
    }
    if (playerScore >comScore){
        winner = "Player";
    }
    else if(playerScore < comScore) {
        winner = "COM";
    }
    else {
        winner = "None";
    }

    console.log("Game ends with: \n", "\nYour score is:", playerScore, "\nCOM score is:", comScore, "\n\nThe Winner is" ,winner);
 return winner;    
}
// start game 
console.log(game())


