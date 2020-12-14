// Step 5
// console.log('Er is gegooid');

// Step 6
// document.getElementById('click').onclick = () => console.log('Er is gegooid');

// Step 7
// Using Math.ceil here, because you want from 1 to 6
// document.getElementById('click').onclick = () => console.log(Math.ceil(Math.random() * 6));

// Step 8
// const DIE_COUNT = 8;

// // Using Math.ceil here, because you want from 1 to 6
// const randomDie = () => Math.ceil(Math.random() * 6);

// document.getElementById('click').onclick = () => {
//     const dice = [];

//     for (let _ = 0; _ < DIE_COUNT; _++) dice.push(randomDie());

//     console.log(dice);
// };

// Step 9
// const DIE_COUNT = 8;

// // Using Math.ceil here, because you want from 1 to 6
// const randomDie = () => Math.ceil(Math.random() * 6);

// document.getElementById('click').onclick = () => {
//     const dice = [];
//     const count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

//     for (let _ = 0; _ < DIE_COUNT; _++) {
//         const die = randomDie();
//         dice.push(die);
//         count[die]++;
//     }

//     console.log(dice, count);
// };

// Step 11
// const DIE_COUNT = 8;

// // Using Math.ceil here, because you want from 1 to 6
// const randomDie = () => Math.ceil(Math.random() * 6);

// document.getElementById('click').onclick = () => {
//     const dice = [];
//     const count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

//     for (let _ = 0; _ < DIE_COUNT; _++) {
//         const die = randomDie();
//         dice.push(die);
//         count[die]++;
//     }

//     for (const nr in count) {
//         document.getElementById(nr).innerHTML = count[nr];
//     }
// };

// Ultimate

/** @type {HTMLInputElement} */
const dieCountInputElement = document.getElementById('die-count');
/** @type {HTMLInputElement} */
const dieSidesInputElement = document.getElementById('die-sides');

/** @type {HTMLTableSectionElement} */
const dieTableElement = document.getElementById('die-table');

/**
 * Create a random die
 * @param {number} sides number of sides
 */
const randomDie = sides => Math.ceil(Math.random() * sides);

document.getElementById('click').onclick = () => {
    // Clear the table first
    while (dieTableElement.firstElementChild) dieTableElement.removeChild(dieTableElement.firstElementChild);

    const count = {};
    const dieCount = dieCountInputElement.value;
    const dieSides = dieSidesInputElement.value;

    for (let dieSide = 1; dieSide <= dieSides; dieSide++) count[dieSide] = 0;

    for (let _ = 1; _ <= dieCount; _++) count[randomDie(dieSides)]++;

    for (const side in count) {
        const row = dieTableElement.insertRow();

        const sideCell = row.insertCell();
        sideCell.innerHTML = side;

        const amountCell = row.insertCell();
        amountCell.innerHTML = count[side];
    }
};
