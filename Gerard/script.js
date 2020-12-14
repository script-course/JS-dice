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
const DIE_COUNT = 8;

// Using Math.ceil here, because you want from 1 to 6
const randomDie = () => Math.ceil(Math.random() * 6);

document.getElementById('click').onclick = () => {
    const dice = [];
    const count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

    for (let _ = 0; _ < DIE_COUNT; _++) {
        const die = randomDie();
        dice.push(die);
        count[die]++;
    }

    for (const nr in count) {
        document.getElementById(nr).innerHTML = count[nr];
    }
};
