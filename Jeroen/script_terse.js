const btnTrowDices = document.getElementById('btnTrowDices');
const dicesOutput = document.getElementById('dicesOutput');
const diceCountTableCells = document.getElementsByClassName('diceCount');

btnTrowDices.addEventListener('click', () => {
    diceCounter = {};

    dices = Array(8).fill().map(() => {
        const randomDice = ~~(Math.random() * 6) + 1;
        diceCounter[randomDice] = ++diceCounter[randomDice] || 1;
        return randomDice;
    });

    dicesOutput.innerHTML = dices.sort();
    [].slice.call(diceCountTableCells).map((cell, index) => { cell.innerHTML = diceCounter[index+1] || 0 });
});