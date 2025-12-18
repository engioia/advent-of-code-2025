/* Advent of Code Day 7! 
Part 1 Goal: Count how many times the tachyon beam splits
Part 2 Goal: 
- The beam starts from S and always moves down
- When the beam reaches a splitter '^', it splits to the left and right and continues downward
*/

// Retrieve input file
const fs = require('fs');
const diagram = (fs.readFileSync('input.txt', 'utf8')).split("\n");


// Store variables
var splits = 0;

function replace(str,char_i,char) {
    if ((char_i < 0) || (char_i > str.length-1)) {
        return str
    }
    return str.slice(0,char_i)+char+str.slice(char_i+1)
}

function fillRow(row_i) {
    var prevRow = diagram[row_i-1];
    var row = diagram[row_i]
    for (let char_i = 0; char_i < row.length; char_i++) { 
        if ((prevRow[char_i] == '.') || (prevRow[char_i] == '^')) {
            continue
        } else if (row[char_i] == '^') {
            splits++
            diagram[row_i] = replace(diagram[row_i], char_i+1, '|')
            diagram[row_i] = replace(diagram[row_i], char_i-1, '|')
        } else {
            diagram[row_i] = replace(diagram[row_i], char_i, '|')
        }
    }
}

function fillDiagram() {
    for (let row_i = 1; row_i < diagram.length; row_i++) {
        fillRow(row_i)
    }
}

fillDiagram()
console.log(splits)