console.log("connected~~");

// winning combos
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//set up click event listeners on every boxes
const box = () => Array.from(document.getElementsByClassName("b"));
const clickFn = $event => {
  console.log($event.target);
};

const enableEventListener = () =>
  box().forEach(_bEl => _bEl.addEventListener("click", clickFn));

const disableEventListener = () =>
  box().forEach(_bEl => _bEl.removeEventListener("click", clickFn));

enableEventListener();
