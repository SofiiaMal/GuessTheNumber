//import * as [name] from 'way'; to import all or //import {name what to import} from 'way';
import * as colorModule from '../javaScript/colorMode.js';
import * as gameClassicBit from '../javaScript/gameClassic.js';
import * as gameHintedBit from '../javaScript/gameHinted.js';

//color mode change
const colorModeBtn = document.getElementById("colorModeBtn");
let lightMode = localStorage.getItem('lightMode');

if(lightMode === "active") colorModule.enableLightMode();

colorModeBtn.onclick = function(){
    lightMode = localStorage.getItem('lightMode');
    lightMode !== "active" ? colorModule.enableLightMode() : colorModule.disableLightMode();
}

//game start
const startClassicBtn = document.getElementById('startClassicBtn');
const startHintedBtn = document.getElementById('startHintedBtn');

startClassicBtn.onclick = function(){
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    document.getElementById('guessPanelClassic').classList.remove('hidden');
    document.getElementById('guessPanelHinted').classList.add('hidden');
    document.getElementById('gameModeName').textContent = 'Classic';

    gameClassicBit.gameClassic();
}

startHintedBtn.onclick = function(){
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    document.getElementById('guessPanelClassic').classList.add('hidden');
    document.getElementById('guessPanelHinted').classList.remove('hidden');
    document.getElementById('gameModeName').textContent = 'Hinted';

    gameHintedBit.gameHinted();
}