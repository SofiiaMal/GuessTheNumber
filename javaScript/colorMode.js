export function enableLightMode(){
    document.body.classList.add('lightMode')
    localStorage.setItem('lightMode', 'active')
    document.body.style.backgroundImage = "url('./Images/lightBackground.png')"; 
    document.getElementById('resultLostIcon').src = "./Images/lightDiceGuess.png"; 
    document.getElementById('diceGuessGame').src = "./Images/lightDiceGuess.png";
    document.getElementById('heart1').src = "./Images/lightHeart.png"; 
    document.getElementById('heart2').src = "./Images/lightHeart.png"; 
    document.getElementById('heart3').src = "./Images/lightHeart.png"; 
    for(let i =0; i<=5; i++){
        document.getElementsByClassName('diceClassic')[i].src = `./Images/lightDice${i+1}.png`
    }
    for(let i =0; i<=8; i++){
        document.getElementsByClassName('diceHinted')[i].src = `./Images/lightDice${i+1}.png`
    }
    colorModeBtn.textContent = "Light";
}

export function disableLightMode(){
    document.body.classList.remove('lightMode')
    localStorage.setItem('lightMode', null) 
    document.body.style.backgroundImage = "url('./Images/darkBackground.png')"; 
    document.getElementById('resultLostIcon').src = "./Images/darkDiceGuess.png"; 
    document.getElementById('diceGuessGame').src = "./Images/darkDiceGuess.png";
    document.getElementById('heart1').src = "./Images/darkHeart.png"; 
    document.getElementById('heart2').src = "./Images/darkHeart.png";
    document.getElementById('heart3').src = "./Images/darkHeart.png";
    for(let i =0; i<=5; i++){
        document.getElementsByClassName('diceClassic')[i].src = `./Images/darkDice${i+1}.png`
    }
    for(let i =0; i<=8; i++){
        document.getElementsByClassName('diceHinted')[i].src = `./Images/darkDice${i+1}.png`
    }
    colorModeBtn.textContent = "Dark";
}
