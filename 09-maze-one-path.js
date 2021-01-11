// You have entered a Maze and need to find your way out of it. 
// There are more than one possible paths through the Maze to the single exit point. 
// Write a recursive function that will help you find a possible path through the maze.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). 
// The starting point is the top left corner and the exit is indicated by e. 
// For simplicity purpose, use the bottom right corner of the maze as the exit. 
// You can't go outside the boundaries of the maze. 
// The maze has passages that are blocked and you can't go through them. 
// These blocked passages are indicated by *. 
// Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR


let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
        [' ', ' ', ' ', '*', ' ', ' ', ' '],
        ['*', '*', ' ', '*', ' ', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', '*', '*', '*', '*', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'e']
    ];

const mazeOnePath = (x = 0, y = 0, maze) => {
    const rows = maze.length - 1
    console.log('Row -', rows)
    const columns = maze[0].length - 1
    console.log('Column - ', columns)

    // Base Cases
    if (x < 0 || x > columns || y < 0 || y > rows)
        return 'Please input values for x and y that are >= 0'
    
    if (maze[y][x] === 'e')
        return ` --- Reached exit at ${x}:${y}`

    // Recursive Cases
    if (maze[y][x + 1] !== '*' && x < columns) {
        maze[y][x] = '*'
        return 'R' + mazeOnePath(x + 1, y, maze)
    }

    if (maze[y][x - 1] !== '*' && x >= 0) {
        maze[y][x] = '*'
        return 'L' + mazeOnePath(x - 1, y, maze)
    }

    if (maze[y + 1][x] !== '*' && y < rows) {
        maze[y][x] = '*'
        return 'D' + mazeOnePath(x, y + 1, maze)
    }

    if (maze[y - 1][x] !== '*' && y >= 0) {
        maze[y][x] = '*'
        return 'U' + mazeOnePath(x, y - 1, maze)
    }
}

console.log(mazeOnePath(0, 0, mySmallMaze))
console.log(mazeOnePath(6, 0, maze))
