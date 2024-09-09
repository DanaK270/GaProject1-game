const board = document.getElementById('board')
const cells = []
const cellValues = []
const shapeCont = document.getElementById('shapes-cont')
let selectedShape = null
let selectedShapeLogic = []
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
  ],
  // S shape
  [
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
]

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
  shapeElem.style.gridTemplateColumns = `repeat(  5  , 30px)`
  shapeElem.style.gridTemplateRows = `repeat(  5  , 30px)`
  shapeElem.style.cursor = 'pointer'

  const shapeCells = []

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      const shapeCell = document.createElement('div')
      shapeElem.appendChild(shapeCell)
      if (shape[i][j] === 1) shapeCell.style.backgroundColor = 'pink'
      shapeCells.push(shapeCell)
    }
  }

  shapeElem.addEventListener('click', () => {
    // remove shadow from the prev selected shape
    if (selectedShape) {
      selectedShape.forEach((cell) => (cell.style.boxShadow = 'none'))
    }

    // add shadow to the clicked shape
    shapeCells.forEach((cell) => {
      if (cell.style.backgroundColor === 'pink') {
        cell.style.boxShadow = '0 0 15px 3px rgba(0, 0, 0, 0.5)'
      }
    })

    // Update the selected shape
    selectedShape = shapeCells
    selectedShapeLogic = shape
  })

  shapeCont.appendChild(shapeElem)
}

const highlightShape = (row, col) => {
  console.log('here')
  console.log('row: ' + row)
  console.log('col: ' + col)
  if (selectedShape) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (selectedShapeLogic[i][j] === 1) {
          updatedRow = row + i
          updatedCol = col + j
          if (
            updatedRow >= 0 &&
            updatedRow < 10 &&
            updatedCol >= 0 &&
            updatedCol < 10
          )
            cells[updatedRow * 10 + updatedCol].style.backgroundColor = 'pink'
        }
      }
    }
  }
}

const removeHighlightShape = (row, col) => {
  console.log('here')
  console.log('row: ' + row)
  console.log('col: ' + col)
  if (selectedShape) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (selectedShapeLogic[i][j] === 1) {
          updatedRow = row + i
          updatedCol = col + j
          cells[updatedRow * 10 + updatedCol].style.backgroundColor =
            'rgb(205, 189, 166)'
        }
      }
    }
  }
}

const initBoard = () => {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div')
    board.appendChild(cell)
    cells.push(cell)
    console.log(cell)
    console.log('at ' + i)

    cell.addEventListener('mouseover', () => {
      const cellRow = parseInt(i / 10)
      const cellCol = i % 10
      highlightShape(cellRow, cellCol)
    })

    cell.addEventListener('mouseout', () => {
      const cellRow = parseInt(i / 10)
      const cellCol = i % 10
      removeHighlightShape(cellRow, cellCol)
    })
  }
  for (let i = 0; i < 10; i++) {
    cellValues.push([])
    for (let j = 0; j < 10; j++) {
      cellValues[i].push(0)
    }
  }
}

initBoard()
renderShapes()
