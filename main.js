/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 ******************/
// click dice
// log random number
const d6 = document.querySelector('#d6-roll');

const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');

const d12 = document.querySelector('#d12-roll');

const d20 = document.querySelector('#d20-roll');

const resetButton = document.querySelector('#reset-button');


/*******************
 * EVENT LISTENERS *
 *******************/
d6.addEventListener("click", () => {
  const random = getRandomNumber(6);
  d6.src = `./images/d6/${random}.png`;
})


doubleD6Roll1.addEventListener("click", () => { 
  const random = getRandomNumber(6); 
  doubleD6Roll1.src = `./images/d6/${random}.png`; 
})

doubleD6Roll2.addEventListener("click", () => {
   const random1 = getRandomNumber(6);
  doubleD6Roll2.src = `./images/d6/${random1}.png`;
})

d12.addEventListener("click", () => {
  const random = getRandomNumber(12);
  d12.src = `./images/numbers/${random}.png`;
})

d20.addEventListener("click", () => { 
  const random = getRandomNumber(20);
  d20.src = `./images/numbers/${random}.png`;
})



/******************
 * RESET FUNCTION *
 ******************/
resetButton.addEventListener("click", () => { 
  sixes.length = 0; 
  doubleSixes.length = 0; 
  twelves.length = 0; 
  twenties.length = 0;
  d6.src = './images/start/d6.png'; 
  doubleD6Roll1.src = './images/start/d6.png'; 
  doubleD6Roll2.src = './images/start/d6.png'; 
  d12.src = './images/start/d12.jpeg'; 
  d20.src = './images/start/d20.jpg';
    console.log('reset button clicked'); 
})


/****************
 * MATH SECTION *
 ****************/
