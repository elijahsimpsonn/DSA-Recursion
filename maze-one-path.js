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

// ------------------------------------------------------------------------------------------------------------------