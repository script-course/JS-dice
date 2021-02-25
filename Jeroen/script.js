const btnTrowDices = document.getElementById('btnTrowDices');
const dicesOutput = document.getElementById('dicesOutput');
const diceCountTableCells = document.getElementsByClassName('diceCount');

function throwDices() {
    let dices = [];
    let diceCounter = {};

    for(let i=0; i<8; i++) {
        const randomDice = Math.round(Math.random() * 5) + 1;
        dices.push(randomDice);
        diceCounter[randomDice] = (diceCounter[randomDice]+1) || 1;
    }

    dices.sort();
    dicesOutput.innerHTML = dices;

    for(let i=0; i<diceCountTableCells.length; i++) {
        diceCountTableCells[i].innerHTML = diceCounter[i+1] || 0;
    }
}

btnTrowDices.addEventListener('click', throwDices);