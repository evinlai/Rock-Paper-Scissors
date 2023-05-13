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

   
    let playerSelection = "";
    
     
    const player = document.querySelector('.choices');
    player.addEventListener('click', e=>{
        // console.log(e.target);
        rps = e.target;
        playerSelection = rps.value;
        let computerSelection = getComputerChoice();  
        showPlayerUI(playerSelection);
        showComUI(computerSelection);
        

        roundResult = playRound(playerSelection, computerSelection);
                if (roundResult === "win") {
                    playerScore = playerScore + 1;
                    console.log("YOU WIN!");
                    console.log("CURRENT SCORE \nYour score is: ", playerScore, "\nCOM score is: ", comScore);    
                }
                else if (roundResult === "lost" ){
                    comScore = comScore + 1;
                    console.log("YOU LOST!");
                    console.log("CURRENT SCORE \nYour score is: ", playerScore, "\nCOM score is: ", comScore);
                }
                else if (roundResult === "draw") {
                    console.log("It's a DRAW! \nCURRENT SCORE \nYour score is: ", playerScore, "\nCOM score is: ", comScore);  
                }        
        showScoreUI(playerScore, comScore);        
    })


        
            
// function calls and validate the winner and displays 
    getWinner(playerScore, comScore);
    
}
function getWinner(playerScore, comScore) {

    console.log("Game ends with: \n", "\nYour score is:", playerScore, "\nCOM score is:", comScore); 

    if (playerScore >comScore){
        winner = "Player";
    }
    else if(playerScore < comScore) {
        winner = "COM";
    }
    else {
        winner = "None";
        console.log("\n\nNobody Wins it's a DRAW!");
        return winner;
    }

    
    console.log("\n\nThe Winner is" , winner);
    return winner;    

}
function showPlayerUI(playerSelection) {
    let res = document.querySelector('#plyChoice');
    res.innerHTML = playerSelection;

}
function showComUI(computerSelection) {
    let res = document.querySelector('#comChoice');
    res.innerHTML = computerSelection;
}
function showScoreUI(playerScore, comScore) {
pscore = document.querySelector('.plysc');
cscore = document.querySelector('.comsc');
pscore.innerHTML = playerScore;
cscore.innerHTML = comScore;
}

// start game 

let playerScore = 0;
let comScore = 0;

