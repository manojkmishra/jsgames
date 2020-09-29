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

//The Tetrominoes--------------------
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
//------------combile all tetromino-------------
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
    console.log('all theTetrominoes',theTetrominoes)
//------------draw first roation of L tetromino-----ie add div with 4 values------
console.log('theTetrominoes',theTetrominoes[0][0])
let currentPosition=4
let current=theTetrominoes[0][0]
function draw()
{   current.forEach(index=>{squares[currentPosition+index].classList.add('tetromino')})
}
draw()

})