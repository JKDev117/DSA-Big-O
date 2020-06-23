/* 8. Find a way out of the maze ------------------------------------------------------------------ */
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

function findMazeExit(maze, row=0, column=0, path=[]){
        if(maze[row][column]=='e'){
            console.log(`Exit found at row ${row} column ${column}`);
            console.log(maze)
            console.log(path)
            return path
        }
        
        if(maze[row][column] == ' '){
            maze[row][column] = 'v';

            //R
            if(column < maze[0].length-1){
                findMazeExit(maze, row, column+1, [...path, 'R'])
            }
            
            //D
            if(row < maze.length-1){
                findMazeExit(maze, row+1, column, [...path, 'D'])
            }

            maze[row][column] = ' '
        }

}

//findMazeExit(mySmallMaze)
//findMazeExit(myBigMaze)

findMazeExit([[' ', 'e']])

/*
    input to program: 
        [[' ','e']]

    output of the program: 
        Exit found at row 0 column 1
        [ [ 'v', 'e' ] ]
        [ 'R' ]

    input to each recursive call: 
        (maze, 0, 1, ['R'])

    output of each recursive call:
        Exit found at row 0 column 1
        [ [ 'v', 'e' ] ]
        [ 'R' ]

-------------------------------------------------------------------------------------- */

//node 8-maze.js

    

