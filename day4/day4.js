/* Advent of Code Day 4! 
Part 1 Goal: Count how many paper rolls are accessible to the forklift
Part 2 Goal: Count how many rolls are accessible after removing accessible rolls
- A roll is accessible if there are fewer than 4 rolls around it (in the 8 adjacent spots)
*/

// Retrieve input file
const fs = require('fs');
const data = (fs.readFileSync('input.txt', 'utf8')).split("\n");

// Store variables
var rolls = 0;
const array = []

for (const row of data) {
    var tempArr = [];
    for (const elt of row) {
        tempArr.push(elt);
    }
    array.push(tempArr);
}

function countAdj(i,j) {
    var counter = 0;

    for (const mod of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) {
        if (((0<=i+mod[0] && i+mod[0]<array.length) && (0<=j+mod[1] && j+mod[1]<array[i].length)) && (array[i+mod[0]][j+mod[1]]=='@')) {
            counter++;
        }
    }
    return counter;
}

while(true) {
    var removeLoop = 0;
    for (let i = 0; i < array.length; i++) {
        var row = array[i];
        for (let j = 0; j < row.length; j++) {
            var elt = row[j];
            if (elt == '@' && countAdj(i,j) < 4) { 
                removeLoop++;
                array[i][j]='X'
            }
        }
    }
    if (removeLoop == 0) break;
    rolls += removeLoop;
}

console.log(rolls);