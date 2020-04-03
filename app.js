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

// set up click event listeners on every boxes
const box = () => Array.from(document.getElementsByClassName("b"));

// place box number from a string to an int
const bNumberId = bEl => Number.parseInt(bEl.id.replace("b", ""));

// returns empty array boxes that haave no X or O
const emptyBoxes = () => box().filter(_bEl => _bEl.innerText === "");

// checks if all the items in the array are the same
const allSame = arr =>
  arr.every(
    _bEl => _bEl.innerText === arr[0].innerText && _bEl.innerText !== ""
  );

const takeTurn = (index, letter) => (box()[index].innerText = letter);
const opponentChoice = () =>
  // Computer to input at random boxes
  bNumberId(emptyBoxes()[Math.floor(Math.random() * emptyBoxes().length)]);

const endGame = winningSequence => {
  winningSequence.forEach(_bEl => _bEl.classList.add("winner"));
  disableEventListener();
};
const checkForVictory = () => {
  let victory = false;

  winningCombos.forEach(_c => {
    const _box = box();
    const sequence = [_box[_c[0]], _box[_c[1]], _box[_c[2]]];
    if (allSame(sequence)) {
      victory = true;
      endGame(sequence);
    }
  });

  return victory;
};

const opponentTurn = () => {
  disableEventListener();
  setTimeout(() => {
    takeTurn(opponentChoice(), "o");
    if (!checkForVictory()) enableEventListener();
  }, 2000);
};

const clickFn = $event => {
  takeTurn(bNumberId($event.target), "x");
  if (!checkForVictory()) opponentTurn();

  console.log($event.target);
};

const enableEventListener = () =>
  box().forEach(_bEl => _bEl.addEventListener("click", clickFn));
const disableEventListener = () =>
  box().forEach(_bEl => _bEl.removeEventListener("click", clickFn));

enableEventListener();

function resetGame() {
  window.location.reload();
}

const reset = document
  .querySelector("#reset-btn")
  .addEventListener("click", resetGame);

// game.addEventListener("mousedown", function(e) {
//     if (e.target.className === "play-again") {
//       window.location.reload();
//     }
//   });
