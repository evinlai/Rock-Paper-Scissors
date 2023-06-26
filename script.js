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











function getPlayerSelection() {
    
       
    start.close(); 
    player.show();

    document.getElementById('optrock').addEventListener('click', function() {
        player1.choice = "rock";
    });
    document.getElementById('optpaper').addEventListener('click', plychoice);
    document.getElementById('optscissors').addEventListener('click', plychoice);

    return;
    
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

function game() {
    let playerSelection = getPlayerSelection();
        // let computerSelection = getComputerChoice();  
    showPlayerUI(playerSelection);
    showComUI(com.choice);
        
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
    let res2 = document.querySelector(".imgplayer");
    res.innerHTML = playerSelection;
    if (playerSelection === "paper") {
        res2.src= './images/player paper.png';
    }
    else if (playerSelection === "rock") {
        res2.src = './images/player rock.png';
    }
    else if  (playerSelection === "scissors") {
        res2.src = '/images/player scissors.png';
    }


}
function showComUI(computerSelection) {
    let res = document.querySelector('#comChoice');
    res2 = document.querySelector('.imgcom')
    res.innerHTML = computerSelection;
    if (computerSelection === "paper") {
        res2.src= './images/com paper.png';
    }
    else if (computerSelection === "rock") {
        res2.src = './images/com rock.png';
    }
    else if  (computerSelection === "scissors") {
        res2.src = '/images/com scissors.png';
    }
}
function showScoreUI(playerScore, comScore) {
pscore = document.querySelector('.plysc');
cscore = document.querySelector('.comsc');
pscore.innerHTML = playerScore;
cscore.innerHTML = comScore;
if(playerScore === 5){
    pscore.innerHTML = 'Winner';
    return playerScore;

    }
else if (comScore === 5) {
    cscore.innerHTML  = "Winner";
    return comScore;

    }
}
// function showComImg(computerSelection) {
//     const comSelct = document.getElementById('#comPick');
//     if (computerSelection === 'paper'){
//         comSelct.setAttribute("src", "images/com paper.png");
//     }
// }


// start game 
let com = { name: "Computer",
            score: 0,
            choice: getComputerChoice()
          };
let player1 = {
            name: "Player",
            score: 0,
            
};

let playerScore = 0;
let comScore = 0;
let spc = "";
const start = document.getElementById('init');  // dialogbox name
const round = document.querySelector('#roundRes');
const strtgame = document.getElementById('playbtn');

//prompts dialog with start game button
start.showModal();

// document.querySelector("opt-panel").addEventListener('click', game)
//initialize game upon clicking
strtgame.addEventListener('click', game);

