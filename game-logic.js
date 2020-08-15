// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    // if (player !== 'Player One' || player !== 'Player Two') {return}
    //if (moveOneType !== 'rock' || moveOneType !== 'paper' || moveOneType !== 'scissors') {return}
    //if (moveTwoType !== 'rock' || moveTwoType !== 'paper' || moveTwoType !== 'scissors') {return}
    //if (moveThreeType !== 'rock' || moveThreeType !== 'paper' || moveThreeType !== 'scissors') {return}
if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {return;}
   
if (!isValidMoveType(moveOneType) ||
      !isValidMoveType(moveTwoType) ||
      !isValidMoveType(moveThreeType)) {
    return;
  }


if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {return;}
    if (moveOneValue < 1 || moveOneValue > 99) {return;}
    if (moveTwoValue < 1 || moveTwoValue > 99) {return;}
    if (moveThreeValue < 1 || moveThreeValue > 99) {return;}
    

if (player === 'Player One') {
    playerOneMoveOneType = moveOneType
    playerOneMoveTwoType = moveTwoType
    playerOneMoveThreeType = moveThreeType
    playerOneMoveOneValue = moveOneValue
    playerOneMoveTwoValue = moveTwoValue
    playerOneMoveThreeValue = moveThreeValue}
if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType
    playerTwoMoveTwoType = moveTwoType
    playerTwoMoveThreeType = moveThreeType
    playerTwoMoveOneValue = moveOneValue
    playerTwoMoveTwoValue = moveTwoValue
    playerTwoMoveThreeValue = moveThreeValue}

    function isValidMoveType(moveType) {
        return (moveType === 'rock') ||
               (moveType === 'paper') ||
               (moveType === 'scissors');
      }
}

//A function called getRoundWinner, which takes a round number
//(1, 2, or 3), compares both player’s move types and values for that round,
//and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')
const getRoundWinner = roundNumber => {

if ((roundNumber < 1 || roundNumber > 3)) {return null;}
/*if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveTwoType || !playerOneMoveTwoValue
      || !playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveOneType || !playerTwoMoveOneValue
      || !playerTwoMoveTwoType || !playerTwoMoveThreeType || !playerTwoMoveThreeValue)
      {return null;} */

//Round Number 1

if ((roundNumber === 1) && (playerOneMoveOneType === playerTwoMoveOneType)) {
       if (playerOneMoveOneValue > playerTwoMoveOneValue) {return 'Player One' 
    } else if (playerOneMoveOneValue < playerTwoMoveOneValue){return 'Player Two'
} else if (playerOneMoveOneValue === playerTwoMoveOneValue) {return 'Tie';}}
   
    if ((roundNumber === 1) && (playerOneMoveOneType === 'rock'))
     {if (playerTwoMoveOneType === 'scissors') {return 'Player One'}
     else {return 'Player Two'}}

     if ((roundNumber === 1) && (playerOneMoveOneType === 'paper'))
     {if (playerTwoMoveOneType === 'rock') {return 'Player One'}
     else {return 'Player Two'}}

     if ((roundNumber === 1) && (playerOneMoveOneType === 'scissors'))
     {if (playerTwoMoveOneType === 'paper') {return 'Player One'}
     else {return 'Player Two'}}

// Round Number 2
    if ((roundNumber === 2) && (playerOneMoveTwoType === playerTwoMoveTwoType)) {
         if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {return 'Player One' 
 } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue){return 'Player Two'
} else {return 'Tie';}}

 if ((roundNumber === 2) && (playerOneMoveTwoType === 'rock'))
  {if (playerTwoMoveTwoType === 'scissors') {return 'Player One'}
  else {return 'Player Two'}}

  if ((roundNumber === 2) && (playerOneMoveTwoType === 'paper'))
  {if (playerTwoMoveTwoType === 'rock') {return 'Player One'}
  else {return 'Player Two'}}

  if ((roundNumber === 2) && (playerOneMoveTwoType === 'scissors'))
  {if (playerTwoMoveTwoType === 'paper') {return 'Player One'}
  else {return 'Player Two'}}

// Round Number 3
if ((roundNumber === 3) && (playerOneMoveThreeType === playerTwoMoveThreeType)) {
    if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {return 'Player One' 
 } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue){return 'Player Two'
} else {return 'Tie';}}

 if ((roundNumber === 3) && (playerOneMoveThreeType === 'rock'))
  {if (playerTwoMoveThreeType === 'scissors') {return 'Player One'}
  else {return 'Player Two'}}

  if ((roundNumber === 3) && (playerOneMoveThreeType === 'paper'))
  {if (playerTwoMoveThreeType === 'rock') {return 'Player One'}
  else {return 'Player Two'}}

  if ((roundNumber === 3) && (playerOneMoveThreeType === 'scissors'))
  {if (playerTwoMoveThreeType === 'paper') {return 'Player One'}
  else {return 'Player Two'}}


}

/* A function called getGameWinner, which compares both player’s move types and values
 for the whole game and returns the appropriate winner
  ('Player One', 'Player Two', or 'Tie') */

// Game winner function will need to call round winner function for each round and compare

const getGameWinner = () => {

if (!playerOneMoveOneType || !playerOneMoveTwoType ||
        !playerOneMoveThreeType || !playerOneMoveOneValue ||
        !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType ||
        !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
        !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null
        }

let playerWins = 0
let computerWins = 0

const roundOneWinner = getRoundWinner(1)
const roundTwoWinner = getRoundWinner(2)
const roundThreeWinner = getRoundWinner (3)

}
