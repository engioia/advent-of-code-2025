/* Advent of Code Day 2! 
Part 1 Goal: Determine the sum of all invalid IDs
Part 2 Goal: ???
- Invalid IDs consist of a number repeated twice, e.g. 22 is '2' twice, 123123 is '123' twice
- Must find all invalid IDs within ranges provided, separated by commas
*/

// Retrieve input file
const fs = require('fs');
const data = (fs.readFileSync('input.txt', 'utf8')).split(",");

// Store variables
var ID_sum = 0;

// Main loop
for (const range of data) {
    // Check only IDs of even character length
    var start = Number(range.split('-')[0]);
    var end = Number(range.split('-')[1]);
    for (let i = start; i <= end; i++) {
        var i_str = i.toString();
        if ((i_str.length%2 == 0) && (i_str.slice(0,i_str.length/2) == i_str.slice(i_str.length/2))) {ID_sum+=i}
    }

}
console.log(ID_sum);