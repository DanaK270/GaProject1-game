# 1010 Game!

## Date: 5/9/2024

### By: Dana Alebrahim

[Github](https://github.com/DanaK270) |
[Linkdin](https://www.linkedin.com/in/dana-alebrahim-a22716267/)

##

### The idea of the game is to get the highest possible score. your score increases when you make a full row or column of objects. you lose when you have no enough space to put any of your objects.

### 1. How to Play?

- the game starts by an empty 10X10 grid of blocks.
- each round, you will be provided with 3 objets with usually different shapes.
- you should place your objects in the grid to reach a full row or column. When you do that, this row or column will become empty again to add new object! (NOTE: whenever you add an objects you will get points, one point per block)
- keep doing that to reach highest score possible.
- you lose when you have no enough space to put any of your objects.

### 2. Wireframes

view the wirefarmes folder to see how the game would look like!

### 3. Pseudocode

- Define the different types of objects
- Initialize the game by making the grid empty and the score zero
- Create a function that suggest 3 new objects each round
- Enable the user to select an object to put, highlight the space it might allocate when the user hovers over the different blocks, and place the object in that place when the user clicks
- Increase the score each time the user adds an object
- Create a function that checks for full rows/columns and empty them
- Create a "lose" function that ends the game when the user have no enough space to put any of the 3 presented objects
