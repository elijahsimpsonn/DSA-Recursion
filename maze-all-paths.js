// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. 
// To find all possible exit paths through the maze,
// Think about how many places you can move at each turn. 
// Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. 
// Your recursive function should print all three of the paths with the proper directions. 
// For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];

  let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];

  const copyMaze = (maze) => {
    const mazeCopy = [];
    maze.forEach(row => {
        mazeCopy.push([...row])
    });
    return mazeCopy
  }

  const mazeAllPath = (maze, x = 0, y = 0, currentPath = '', paths = []) => {
    const currentRow = maze[y];
    const directions = {
        'R': (x, y) => [x + 1, y],
        'D': (x, y) => [x, y + 1],
        'L': (x, y) => [x - 1, y],
        'U': (x, y) => [x, y - 1]
    };

    if(!currentRow) return false;

    const currentSpace = currentRow[x]

    if(!currentSpace) return false;

    if(currentSpace === '*') return false;

    if(currentSpace == 'e') {
        console.log(`Path to exit`, currentPath)
        paths.push(currentPath)
        return true
    }

    currentRow[x] = '*'

    for (const [direction, func] of Object.entries(directions)) {
        mazeAllPath(copyMaze(maze), ...func(x, y), currentPath + direction, paths)
    }
    return paths;
  }

  console.log(mazeAllPath(bigMaze))



