document.addEventListener('DOMContentLoaded', () => { 
//will load after all content in DOM=html is loaded

    const grid = document.querySelector('.grid')
    let squares=Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')
    //console.log('grid',grid)
    //console.log('squares',squares)
    //console.log('score',scoreDisplay)
    //console.log('startBtn',startBtn)

//=========define--The Tetrominoes=================
  const width = 10
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ]

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]
//==================draw the tetominos and undraw========================
//------------combile all tetromino-------------
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
    console.log('all theTetrominoes',theTetrominoes)
//------------draw first roation of L tetromino-----ie add div with 4 values------
let currentPosition=4//start from fourth square
let currentRotation=0 //always choose first rotation of all shapes 
    let random = Math.floor(Math.random() * theTetrominoes.length)
    console.log('random',random);
    //console.log('L theTetrominoes',theTetrominoes[0][0]) //random-- 0-L,1-Z,2-T,3-O,4-I
    //let current=theTetrominoes[0][0] // L tetromino
    let current=theTetrominoes[random][currentRotation] //random-- 0-L,1-Z,2-T,3-O,4-I ; currentRotation=0 first one
    console.log('current theTetrominoes',current) 
    function draw()
    {   current.forEach(index=>{squares[currentPosition+index].classList.add('tetromino')})}
    //draw()
    function undraw()
    {   current.forEach(index=>{squares[currentPosition+index].classList.remove('tetromino')})}
    //undraw()
//================move down==========================================
timerId=setInterval(moveDown,1000)
    function moveDown(){
        undraw()
        currentPosition += width
        draw()
        console.log('movedown-currentpos=',currentPosition)
        freeze()
    }
//-----------------freeze/stop falling tetrominos---------------------------
function freeze() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) 
    { console.log('freeze at bottom-,currentpos=',currentPosition)
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      //start a new tetromino falling
      random = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      draw()
    }
  }

  
})