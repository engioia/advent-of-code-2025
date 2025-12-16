/* Advent of Code Day 6! 
Part 1 Goal: Calculate the grand total sum of the strangely written arithmetic problems
Part 2 Goal: ??
- Problems are either addition or multiplication on a series of numbers
- The numbers in each problem are stacked vertically, with the operation beneath
*/

// Retrieve input file
const fs = require('fs');
const data = (fs.readFileSync('input.txt', 'utf8')).split("\n");
const array = []; for (const row of data) { array.push((row.trim()).split(/\s+/)) }

// Store variables
var grandTotal = 0;
const problems = transpose(array);

function transpose(array) {
    var rows = array.length;
    var cols = array[0].length;
    var tempArray = [];
    for (let j=0; j<cols; j++) {
        var tempRow=[];
        for (let i=0; i<rows; i++) {
            tempRow.push(array[i][j]);
        }
        tempArray.push(tempRow);
    }
    return tempArray;
}

function calcRow(index) {
    var num1 = Number(problems[index][0]);
    var num2 = Number(problems[index][1]);
    var num3 = Number(problems[index][2]);
    var num4 = Number(problems[index][3]);
    if (problems[index].at(-1) == '+') {
        return Number(num1+num2+num3+num4);
    } else {
        return Number(num1*num2*num3*num4);
    }
}

for (const problem in problems) {
    grandTotal += calcRow(problem);
}

console.log(grandTotal);
