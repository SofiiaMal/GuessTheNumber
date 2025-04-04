const giveUpBtn = document.getElementById('giveUpBtn');
const theHint = document.getElementById('theHint');

const diceHinted1 = document.getElementsByClassName('diceHinted1')[0];
const diceHinted2 = document.getElementsByClassName('diceHinted2')[0];
const diceHinted3 = document.getElementsByClassName('diceHinted3')[0];
const diceHinted4 = document.getElementsByClassName('diceHinted4')[0];
const diceHinted5 = document.getElementsByClassName('diceHinted5')[0];
const diceHinted6 = document.getElementsByClassName('diceHinted6')[0];
const diceHinted7 = document.getElementsByClassName('diceHinted7')[0];
const diceHinted8 = document.getElementsByClassName('diceHinted8')[0];
const diceHinted9 = document.getElementsByClassName('diceHinted9')[0];

let lives;
let tries;
let answer;

export function gameHinted(){
    lives = 3;
    tries = 3;
    answer = Math.floor(Math.random() * 9) + 1;

    giveUpBtn.onclick = gameLost;

    diceHinted1.onclick = function(){
        if(answer == 1){
            gameWon()
        }
        else{
            if(answer>1){
                theHint.textContent = `It's Higher`
            }
            if(answer<1){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted1')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceHinted2.onclick = function(){
        if(answer == 2){
            gameWon()
        }
        else{
            if(answer>2){
                theHint.textContent = `It's Higher`
            }
            if(answer<2){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted2')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceHinted3.onclick = function(){
        if(answer == 3){
            gameWon()
        }
        else{
            if(answer>3){
                theHint.textContent = `It's Higher`
            }
            if(answer<3){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted3')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceHinted4.onclick = function(){
        if(answer == 4){
            gameWon()
        }
        else{
            if(answer>4){
                theHint.textContent = `It's Higher`
            }
            if(answer<4){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted4')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceHinted5.onclick = function(){
        if(answer == 5){
            gameWon()
        }
        else{
            if(answer>5){
                theHint.textContent = `It's Higher`
            }
            if(answer<5){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted5')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceHinted6.onclick = function(){
        if(answer == 6){
            gameWon()
        }
        else{
            if(answer>6){
                theHint.textContent = `It's Higher`
            }
            if(answer<6){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted6')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceHinted7.onclick = function(){
        if(answer == 7){
            gameWon()
        }
        else{
            if(answer>7){
                theHint.textContent = `It's Higher`
            }
            if(answer<7){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted7')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceHinted8.onclick = function(){
        if(answer == 8){
            gameWon()
        }
        else{
            if(answer>8){
                theHint.textContent = `It's Higher`
            }
            if(answer<8){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted8')[0].classList.add('wrongDice');
            livesTracking();
        } 
    }
    diceHinted9.onclick = function(){
        if(answer == 9){
            gameWon()
        }
        else{
            if(answer>9){
                theHint.textContent = `It's Higher`
            }
            if(answer<9){
                theHint.textContent = `It's Lower`
            }
            document.getElementsByClassName('hinted9')[0].classList.add('wrongDice');
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
