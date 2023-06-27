
function getComputerChoice() {
    
    rnd = Math.round(Math.random() * 10);
    if (rnd === 1 || rnd === 4 || rnd ===7) {
        com.choice = 'paper';
        }
    else if (rnd === 2 || rnd === 5 || rnd ===8) {
        com.choice = 'rock';
        }    
    else if (rnd === 3 || rnd === 6 || rnd ===9) {
        com.choice = 'scissors';
        }    
    else {
        getComputerChoice();
    }
    showComUI();
    
}

function showComUI() {
    let res = document.querySelector('#comChoice');
    res2 = document.querySelector('.imgcom')
    res.innerHTML = com.choice;
    if (com.choice === "paper") {
        res2.src= './images/com paper.png';
    }
    else if (com.choice === "rock") {
        res2.src = './images/com rock.png';
    }
    else if  (com.choice === "scissors") {
        res2.src = '/images/com scissors.png';
    }
}

function getPlayerChoice () {

bannerEl.innerHTML = 'Pick your choice!';  
    
enableOptBtns(); // disables the start button

showScoreUI();

setBothOptToRock(); // calls function to set both player gui choice as rock


}

function setBothOptToRock() {
  const coimg= document.querySelector('.imgcom');
  const plimg = document.querySelector('.imgplayer');
  
  coimg.src = './images/com rock.png';
  plimg.src = '/images/player rock.png';
}

function showPlayerUI() {
    let res = document.querySelector('#plyChoice');
    let res2 = document.querySelector('.imgplayer');
    res.innerHTML = player1.choice;
    if (player1.choice === "paper") {
        res2.src= '/images/player paper.png';
    }
    else if (player1.choice === "rock") {
        res2.src = '/images/player rock.png';
    }
    else if  (player1.choice === "scissors") {
        res2.src = '/images/player scissors.png';
    }
}

function playRound() {
    console.log("You chose: ", player1.choice, "\nCOM chose: ", com.choice);

     if (player1.choice === 'paper') {
         if (com.choice === 'paper'){
            result = 'draw';
            bannerEl.innerHTML = 'It\'s a draw!';
         }
         else if (com.choice === 'rock') {
            result = 'win';
            bannerEl.innerHTML = 'You win this round, click again for next round!';
         }
         else if (com.choice === 'scissors'){
            result = 'lost';
            bannerEl.innerHTML = 'You lose this round, try again!';
         }
     }
     else if (player1.choice === 'rock') {
        if (com.choice === 'paper'){
            result = 'lost';
            bannerEl.innerHTML = 'You lose this round, try again!';
         }
         else if (com.choice === 'rock') {
            result = 'draw';
            bannerEl.innerHTML = 'Its a draw!'
         }
         else if (com.choice === 'scissors'){
            result = 'win';
            bannerEl.innerHTML = 'You win this round, click again for next round!';
         }
     }
     else if (player1.choice === 'scissors') {
        if (com.choice === 'paper'){
            result = 'win';
            bannerEl.innerHTML = 'You win this round, click again for next round!';
         }
         else if (com.choice === 'rock') {
            result = 'lost';
            bannerEl.innerHTML = 'You lose this round, try again!';
         }
         else if (com.choice === 'scissors'){
            result = 'draw';
            bannerEl.innerHTML = 'Its a draw!';
         }
     } 

    if (result === 'win') {
        player1.score = player1.score + 1;
        com.score = com.score;
          } 
    else if(result === 'lost') {
        com.score = com.score + 1;
        player1.score = player1.score;
        }
    else if (result = 'draw') {
        console.log('it\'s a', result);
    }
    showScoreUI()
}
function showScoreUI() {
    pscore = document.querySelector('.plysc');
    cscore = document.querySelector('.comsc');
    pscore.innerHTML = player1.score;
    cscore.innerHTML = com.score;
    
    if(player1.score >= 5){
        pscore.innerHTML = 'Winner';
        bannerEl.innerHTML = 'You Won the game! click "START" button to play again.'
        disableOptBtns();
        resetScore();
        }
    else if (com.score >= 5) {
        cscore.innerHTML  = "Winner";
        disableOptBtns();
        resetScore();
        bannerEl.innerHTML = 'You Lost the game! Click "START" button to play again.'
        }
}

function disableOptBtns() {
    rockbtn.setAttribute("disabled", ""); 
    paperbtn.setAttribute("disabled", "");
    scissorsbtn.setAttribute("disabled", "");
    startbtn.removeAttribute("disabled", ""); 
}

function enableOptBtns() {
    rockbtn.removeAttribute("disabled", ""); 
    paperbtn.removeAttribute("disabled", "");
    scissorsbtn.removeAttribute("disabled", "");
    startbtn.setAttribute("disabled", ""); 
}

function resetScore() {
    player1.score = 0;
    com.score = 0;
}

let startbtn = document.querySelector('#playbtn');
let rockbtn = document.querySelector('#rockopt');
let paperbtn = document.querySelector('#paperopt');
let scissorsbtn = document.querySelector('#scissorsopt');
let bannerEl = document.querySelector('.banner');

const playe = document.getElementById('player');
let pChoiceIs = document.querySelector('#opts');
var com = { name: "Computer",
            score: 0,
            choice: 'none'
          };
var player1 = {
            name: "Player",
            score: 0,
            choice: "none"
          };
      
document.querySelector('#playbtn').addEventListener('click', getPlayerChoice);

disableOptBtns(); 

player1.score = 0;
com.score = 0;

pChoiceIs.addEventListener('click', e=>{
    
    getVal = e.target;
    player1.choice = getVal.value;
    if (player1.choice != undefined) {
    getComputerChoice();
    showPlayerUI();
    playRound();
    }   
});

