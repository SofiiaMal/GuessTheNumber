const giveUpBtn = document.getElementById('giveUpBtn');

const diceClassic1 = document.getElementsByClassName('diceClassic1')[0];
const diceClassic2 = document.getElementsByClassName('diceClassic2')[0];
const diceClassic3 = document.getElementsByClassName('diceClassic3')[0];
const diceClassic4 = document.getElementsByClassName('diceClassic4')[0];
const diceClassic5 = document.getElementsByClassName('diceClassic5')[0];
const diceClassic6 = document.getElementsByClassName('diceClassic6')[0];

let lives;
let tries;
let answer;

export function gameClassic(){
    lives = 3;
    tries = 3;
    answer = Math.floor(Math.random() * 6) + 1;

    giveUpBtn.onclick = gameLost;

    diceClassic1.onclick = function(){
        if(answer == 1){
            gameWon()
        }
        else{
            document.getElementsByClassName('classic1')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceClassic2.onclick = function(){
        if(answer == 2){
            gameWon()
        }
        else{
            document.getElementsByClassName('classic2')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceClassic3.onclick = function(){
        if(answer == 3){
            gameWon()
        }
        else{
            document.getElementsByClassName('classic3')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceClassic4.onclick = function(){
        if(answer == 4){
            gameWon()
        }
        else{
            document.getElementsByClassName('classic4')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceClassic5.onclick = function(){
        if(answer == 5){
            gameWon()
        }
        else{
            document.getElementsByClassName('classic5')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceClassic6.onclick = function(){
        if(answer == 6){
            gameWon()
        }
        else{
            document.getElementsByClassName('classic6')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
}

function livesTracking(){
    lives--;
    tries--;

    if(lives == 2){document.getElementById('heart3').style.filter = 'grayscale(1)'}
    if(lives == 1){ document.getElementById('heart2').style.filter = 'grayscale(1)'}
    if(lives == 0 ){document.getElementById('heart1').style.filter = 'grayscale(1)'}

    if(tries == 0){
    gameLost();
    }
}

function gameWon(){
    document.getElementById('gameResult').classList.remove('hidden');
    document.getElementById('resultTop').textContent = 'ConGratulations!';
    document.getElementById('resultMiddle').textContent = 'You have guessed correctly!'
    document.getElementsByClassName('resultWon')[0].classList.remove('hidden')
    document.getElementsByClassName('resultLost')[0].classList.add('hidden')
    setTimeout(() => {
        window.onclick = function() {
            if (!document.getElementById('gameResult').classList.contains('hidden')) {
                location.reload();
            }
        };
    }, 1000);
}

function gameLost(){
    document.getElementById('gameResult').classList.remove('hidden');
    document.getElementById('resultTop').textContent = 'You lost!';
    document.getElementById('resultMiddle').textContent = `The answer was : ${answer}`;
    document.getElementsByClassName('resultWon')[0].classList.add('hidden')
    document.getElementsByClassName('resultLost')[0].classList.remove('hidden')
    setTimeout(() => {
        window.onclick = function() {
            if (!document.getElementById('gameResult').classList.contains('hidden')) {
                location.reload();
            }
        };
    }, 1000);
}
