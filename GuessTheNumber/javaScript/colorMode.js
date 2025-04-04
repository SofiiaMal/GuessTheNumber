export function enableLightMode(){
    document.body.classList.add('lightMode')
    localStorage.setItem('lightMode', 'active')
    document.body.style.backgroundImage = "url('/GuessTheNumber/Images/lightBackground.png')"; 
    document.getElementById('resultLostIcon').src = "/GuessTheNumber/Images/lightDiceGuess.png"; 
    document.getElementById('diceGuessGame').src = "/GuessTheNumber/Images/lightDiceGuess.png";
    document.getElementById('heart1').src = "/GuessTheNumber/Images/lightHeart.png"; 
    document.getElementById('heart2').src = "/GuessTheNumber/Images/lightHeart.png"; 
    document.getElementById('heart3').src = "/GuessTheNumber/Images/lightHeart.png"; 
    for(let i =0; i<=5; i++){
        document.getElementsByClassName('diceClassic')[i].src = `/GuessTheNumber/Images/lightDice${i+1}.png`
    }
    for(let i =0; i<=8; i++){
        document.getElementsByClassName('diceHinted')[i].src = `/GuessTheNumber/Images/lightDice${i+1}.png`
    }
    colorModeBtn.textContent = "Light";
}

export function disableLightMode(){
    document.body.classList.remove('lightMode')
    localStorage.setItem('lightMode', null) 
    document.body.style.backgroundImage = "url('/GuessTheNumber/Images/darkBackground.png')"; 
    document.getElementById('resultLostIcon').src = "/GuessTheNumber/Images/darkDiceGuess.png"; 
    document.getElementById('diceGuessGame').src = "/GuessTheNumber/Images/darkDiceGuess.png";
    document.getElementById('heart1').src = "/GuessTheNumber/Images/darkHeart.png"; 
    document.getElementById('heart2').src = "/GuessTheNumber/Images/darkHeart.png";
    document.getElementById('heart3').src = "/GuessTheNumber/Images/darkHeart.png";
    for(let i =0; i<=5; i++){
        document.getElementsByClassName('diceClassic')[i].src = `/GuessTheNumber/Images/darkDice${i+1}.png`
    }
    for(let i =0; i<=8; i++){
        document.getElementsByClassName('diceHinted')[i].src = `/GuessTheNumber/Images/darkDice${i+1}.png`
    }
    colorModeBtn.textContent = "Dark";
}
