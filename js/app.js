/*-------------------------------- Constants --------------------------------*/
const winningCombo = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7]
];


  



/*---------------------------- Variables (state) ----------------------------*/
let turn , winner, board;




/*------------------------ Cached Element References ------------------------*/
const cells =document.querySelectorAll('.cell')
const gameBoardElement =document.querySelector('.board');
const gameStatus= document.getElementById("message")
const resetBtn =document.getElementById('reset');





/*----------------------------- Event Listeners -----------------------------*/
cells.forEach(element => {
element.addEventListener('click',handleClick)
});
resetBtn.addEventListener('click',init)



/*-------------------------------- Functions --------------------------------*/
init();
// initialize function should initialize the state variables
function init() {
  board =[null,null,null,null,null,null,null,null,null]
  gameStatus.textContent ="It is player x's turn"
  turn =1
  winner =null;
  render();
}
// render function to change the state of the Game Board
function render() {
  let cellColor , cellLetter;
  board.forEach((cell,index) => {
    
    
    if(cell===1){
      cellColor ="yellow"
      cellLetter ="X"
    } else if (
      cell === -1
    ){
      cellLetter ="O";
      cellColor ="blue";
    }else if(cell === null){
      cellColor ="white";
      cellLetter="";
    }
    cells[index].style.background = cellColor;
    
    cells[index].innerText = cellLetter;
    
  });
  if (!winner){
    gameStatus.innerText =`It is Player ${turn ===1 ? "X" : "O"}'s turn ` ;

  } else if ( winner === "T"){
    gameStatus.innerText =" It is a TIE , Try agian! ";

  } else{
    gameStatus.innerText =`Congrats ${winner === 1 ? "Player X" : "Player O" } won  `
    confetti.start(2000)
  }

  }
  // function to handel 
function handleClick(event) {

  let cellIndex = parseInt(event.target.id.replace('sq',''))
    if(board[cellIndex] || winner) {
      return;
    }
    board[cellIndex]=turn;
    turn = turn * -1;
  
    winner = findTheWinner();
    render()
  }


 //  function to find the winner of the game if there is no winner it will be a tie game
    
  function findTheWinner() {
  
  if (Math.abs(board[0]+board[1]+board[2]) ===3) return board[0]
  if (Math.abs(board[3]+board[4]+board[5])=== 3) return board[3];
  if (Math.abs(board[6]+board[7]+board[8])=== 3) return board[6]
  if (Math.abs(board[0]+board[3]+board[6])=== 3) return board[0]
  if (Math.abs(board[1]+board[4]+board[7])=== 3) return board[1]
  if (Math.abs(board[2]+board[5]+board[8])=== 3) return board[2]
  if (Math.abs(board[0]+board[4]+board[8])=== 3) return board[0]
  if (Math.abs(board[2]+board[4]+board[6])=== 3) return board[2]
if (board.includes(null)){
  return null
} else {
  return "T"
}
    
}

