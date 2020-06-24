/* 9. Find ALL the ways out of the maze ------------------------------------------------------------------ */

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let myBigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];  

let ticks = 0

function findMazeExit(maze, row=0, column=0, path=[]){
        
    if(maze[row][column]=='e'){
        ticks++
        //console.log(`Exit found at row ${row} column ${column}`);
        //console.log(maze)
        //console.log(path)
        return path
    }

    if(maze[row][column]==' '){
        ticks++

        maze[row][column]='v'
        
        //R
        if(column < maze[0].length-1){
            ticks++
            findMazeExit(maze, row, column+1, [...path, 'R'])
        }
        
        //D
        if(row < maze.length-1){
            ticks++
            findMazeExit(maze, row+1, column, [...path, 'D'])
        }

        //L
        if(column > 0){
            ticks++
            findMazeExit(maze, row, column-1, [...path, 'L'])
        }   

        //U
        if(row > 0){
            ticks++
            findMazeExit(maze, row-1, column, [...path, 'U'])
        }

        maze[row][column]=' '
    }
    ticks++

}

findMazeExit([[' ','e']])
console.log({n: '1x2=2', ticks})
ticks=0

findMazeExit([
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
])
console.log({n: '3x3=9', ticks})
ticks=0

findMazeExit([
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
])
console.log({n: '5x7=35', ticks})
ticks=0



//node 9-maze-allpaths.js


