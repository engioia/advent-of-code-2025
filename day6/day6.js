/* Advent of Code Day 6! 
Part 1 Goal: Calculate the grand total sum of the strangely written arithmetic problems
Part 2 Goal: Calculate the *correct* grand total sum of the *very* strangely written arithmetic problems
- Problems are either addition or multiplication on a series of numbers
- The numbers in each problem are stacked vertically, with the operation beneath
- Part 2: The numbers are read vertically
*/

// Retrieve input file
const fs = require('fs');
const data = (fs.readFileSync('input.txt', 'utf8')).split("\n");
const operators = (data.at(-1)).match(/([+*] +)/g)
const array = []; 
for (const row of data) { 
    var oldRow = row;
    var newRow = [];
    for (const operator of operators) {
        newRow.push(oldRow.slice(0,operator.length));
        oldRow = oldRow.slice(operator.length)
    }
    array.push(newRow);
}


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

function cephTranspose(problem) {
    var newVals = new Array(problem[0].length).fill("");
    var operator = problem.pop()
    newVals.push(operator)

    for (let i = 0; i < (problem[0]).length; i++) {
        for (const val in problem) {
            newVals[i] = newVals[i]+(problem[val]).at(i)
        }
    }
    return newVals
}

function calcRow(row) {
    return eval((row.filter(Number)).join(row.at(-1)))
}

function solve(problems) {
    for (const problem of problems) {
        grandTotal += calcRow(cephTranspose(problem));
    }
}

solve(problems)
console.log(grandTotal);
