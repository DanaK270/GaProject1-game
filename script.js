const board = document.getElementById('board')
const cells = [] //an array of cells DOM
const cellValues = [] //an array of cells 0's and 1's
const shapeCont = document.getElementById('shapes-cont')
let selectedShape = null //selected shape DOM
let selectedShapeLogic = [] //selected shape in 0's and 1's
const scoreElem = document.getElementById('score').lastElementChild
presentedShapes = []
let score = 0
scoreElem.textContent = score
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
let numOfShapes // to keep track of how many shapes are displayed now

// a func to render the 3 shapes
const renderShapes = () => {
  // clear the prev shapes
  shapeCont.innerHTML = ''
  // select 3 new shapes
  numOfShapes = 3
  for (let i = 0; i < 3; i++) {
    const shape = shapes[Math.floor(Math.random() * shapes.length)]
    console.log(shape) //temp
    createShape(shape)
    presentedShapes.push(shape)
  }
  console.log('p shapes ')
  console.log(presentedShapes)
}

// a func to create the shapes and keep track of the selected shape
const createShape = (shape) => {
  const shapeElem = document.createElement('div')
  shapeElem.style.display = 'grid'
  shapeElem.style.gap = '5px'
  shapeElem.style.gridTemplateColumns = `repeat(  5  , 30px)`
  shapeElem.style.gridTemplateRows = `repeat(  5  , 30px)`
  shapeElem.style.cursor = 'pointer'

  const shapeCells = [] //an array of all the cells of the shape

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      const shapeCell = document.createElement('div') //a cell of the shape
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

// a func to highlight the space the shape would allocte it the board when hover over the board cells
const highlightShape = (row, col) => {
  console.log('here')
  console.log('row: ' + row)
  console.log('col: ' + col)
  const startCell = cells[row * 10 + col] //the cell where the shape placement starts
  startCell.addEventListener('click', () => {
    placeShape(row, col)
  })
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
            if (cellValues[updatedRow * 10 + updatedCol] === 0) {
              cells[updatedRow * 10 + updatedCol].style.backgroundColor = 'pink'
            }
        }
      }
    }
  }
}

// a func to remove highlight of the shape when un-hover over the board cells
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
          if (cellValues[updatedRow * 10 + updatedCol] === 0) {
            //to check if the cell is placed or not
            cells[updatedRow * 10 + updatedCol].style.backgroundColor =
              'rgb(205, 189, 166)'
          }
        }
      }
    }
  }
}

// a func to initlize the board
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
    //cellValues.push([])
    for (let j = 0; j < 10; j++) {
      cellValues.push(0)
    }
  }
}

// a func to place the selected shape in the board
const placeShape = (row, col) => {
  let canPlace = true
  let shapePoints = 0

  if (selectedShape) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (selectedShapeLogic[i][j] === 1) {
          updatedRow = row + i
          updatedCol = col + j
          if (
            //check if the cell is within the borders of the grid
            updatedRow < 0 ||
            updatedRow >= 10 ||
            updatedCol < 0 ||
            updatedCol >= 10 ||
            cellValues[updatedRow * 10 + updatedCol] === 1
          ) {
            canPlace = false
            break
          }
        }
      }
    }

    if (canPlace) {
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
            ) {
              cells[updatedRow * 10 + updatedCol].style.backgroundColor =
                'palevioletred'
              cellValues[updatedRow * 10 + updatedCol] = 1
              shapePoints++
            }
          }
        }
      }
      score += shapePoints
      scoreElem.textContent = score
      numOfShapes--
      const index = presentedShapes.indexOf(selectedShapeLogic)
      console.log('ind ' + index)
      console.log('sle presentedShapes: ')
      console.log(selectedShapeLogic)

      if (index > -1) {
        presentedShapes.splice(index, 1)
      }

      console.log('updated presentedShapes: ')
      console.log(presentedShapes)

      // check for full rows/cols
      checkRowCol()

      //hide the placed shape and deselect it
      selectedShape.forEach((cell) => (cell.style.display = 'none'))
      selectedShape = null
      selectedShapeLogic = []

      // render shapes again if all the presented shapes are placed
      if (numOfShapes == 0) {
        renderShapes()
      }

      lose()
    } else {
      alert("shape can't be placed here")
    }
    console.log(cellValues)
  }
}

// a func that checks fo full rows or cols
const checkRowCol = () => {
  let fullRows = []
  let fullCols = []

  for (let i = 0; i < 10; i++) {
    let fullRow = true
    for (let j = 0; j < 10; j++) {
      if (cellValues[i * 10 + j] === 0) {
        fullRow = false
        break
      }
    }
    if (fullRow) {
      for (let j = 0; j < 10; j++) {
        cellValues[i * 10 + j] = 0
        cells[i * 10 + j].style.backgroundColor = 'rgb(205, 189, 166)'
      }
    }
  }
  for (let i = 0; i < 10; i++) {
    let fullCol = true
    for (let j = 0; j < 10; j++) {
      if (cellValues[j * 10 + i] === 0) {
        fullCol = false
        break
      }
    }
    if (fullCol) {
      for (let j = 0; j < 10; j++) {
        cellValues[j * 10 + i] = 0
        cells[j * 10 + i].style.backgroundColor = 'rgb(205, 189, 166)'
      }
    }
  }

  console.log('full rows: ' + fullRows)
  console.log('full cols: ' + fullCols)
}

// losing funcion
const lose = () => {
  let thereIsSpace = false

  // check all presented shapes
  for (let i = 0; i < presentedShapes.length; i++) {
    const shape = presentedShapes[i]

    // try placing the shape at every possible position on the board
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        let canPlace = true

        // check if the shape can be placed at the startinf cell at (row, col)
        for (let j = 0; j < 5; j++) {
          for (let k = 0; k < 5; k++) {
            if (shape[j][k] === 1) {
              let updatedRow = row + j
              let updatedCol = col + k

              if (
                updatedRow < 0 ||
                updatedRow >= 10 ||
                updatedCol < 0 ||
                updatedCol >= 10 ||
                cellValues[updatedRow * 10 + updatedCol] === 1 //if the cell of the grid is already occupied
              ) {
                canPlace = false
                break
              }
            }
          }
          if (!canPlace) break
        }

        if (canPlace) {
          thereIsSpace = true
          break
        }
      }
      if (thereIsSpace) break
    }

    if (thereIsSpace) break
  }

  if (!thereIsSpace) {
    alert(`Game Ended! \nYour score is ${score}`)
    location.href = 'home.html'
  }
}

initBoard()
renderShapes()
