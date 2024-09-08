const board = document.getElementById('board')
const cells = []
const cellValues = []
const shapeCont = document.getElementById('shapes-cont')
const shapes = [
  // single bock
  [
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // vertical line with 2 cells
  [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // horizontal line with 2 cells
  [
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // vertical line with 3 cells
  [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // horizontal line with 3 cells
  [
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // vertical line with 4 cells
  [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // horizontal line with 4 cells
  [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // vertical line with 5 cells
  [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0]
  ],
  // horizontal line with 5 cells
  [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // L shape
  [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // Reverse L shape
  [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // 2X2 shape
  [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  // 3X3 shape
  [
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
]

const initBoard = () => {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div')
    board.appendChild(cell)
    cells.push(cell)
  }
  for (let i = 0; i < 10; i++) {
    cellValues.push([])
    for (let j = 0; j < 10; j++) {
      cellValues[i].push(0)
    }
  }
  console.log(cellValues)
}

const renderShapes = () => {
  // clear the prev shapes
  shapeCont.innerHTML = ''
  //select 3 new shapes
  for (let i = 0; i < 3; i++) {
    const shape = shapes[Math.floor(Math.random() * shapes.length)]
    console.log(shape) //temp
    createShape(shape)
  }
}

const createShape = (shape) => {
  const shapeElem = document.createElement('div')
  shapeElem.style.display = 'grid'
  shapeElem.style.gap = '5px'
  shapeElem.style.gridTemplateColumns = `repeat(  5  , 40px)`
  shapeElem.style.gridTemplateRows = `repeat(  5  , 40px)`
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      const shapeCell = document.createElement('div')
      shapeElem.appendChild(shapeCell)
      if (shape[i][j] === 1) shapeCell.style.backgroundColor = 'pink'
    }
  }
  shapeCont.appendChild(shapeElem)
}

initBoard()
renderShapes()
