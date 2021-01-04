// Opdracht 6
// console.log('Er is gegooid!')

// opdracht 7
function gooi(){
    // console.log('Er is gegooid!')
    
    // opdracht 8
    // console.log(Math.ceil(Math.random()*6));
    
    // opdracht 9
    let THROW = [];
    let DIE_COUNT = 8
    
    for (let index = 0; index < DIE_COUNT; index++) {
        THROW.push(Math.ceil(Math.random()*6))
    }

    // opdracht 10
    const WORP = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    }

    for (let NUMBER in WORP) {
        const COUNTNUMBER = THROW.filter(THROWNDIE => THROWNDIE == NUMBER).length;
        WORP[NUMBER] = COUNTNUMBER;
        // opdracht 12
        document.getElementById(`dieRow${NUMBER}`).innerHTML = COUNTNUMBER;
    }
}

// opdracht 8
const KNOP = document.getElementById('button');

KNOP.addEventListener('click', gooi);