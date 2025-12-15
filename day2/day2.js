/* Advent of Code Day 2! 
Part 1 Goal: Determine the sum of all invalid IDs
Part 2 Goal: Determine sum again, but with more invalid IDs!
- Invalid IDs consist of a number repeated twice, e.g. 22 is '2' twice, 123123 is '123' twice
- Must find all invalid IDs within ranges provided, separated by commas
- Part 2: Invalid IDs are any repetition of numbers, ie 121212 is also an invalid ID with '12' three times
*/

// Retrieve input file
const fs = require('fs');
const data = (fs.readFileSync('input.txt', 'utf8')).split(",");

// Store variables
var ID_sum = 0;

function patternCheck(n_str,factor) {
    const segment = n_str.slice(0,n_str.length/factor);
    return n_str == segment.repeat(factor)
}
function factor(n) { 
    const array = []
    for (let i = 2; i <= n; i++) { // Skipping 1 because not needed for this usecase
        if ( n % i == 0 ) { array.push(i) }
    }
    return array
}

// Main loop
for (const range of data) { 
    // Check only IDs of even character length
    var start = Number(range.split('-')[0]);
    var end = Number(range.split('-')[1]);
    for (let i = start; i <= end; i++) {
        var i_str = i.toString();
        const factors = factor(i_str.length);
        for (const factor of factors) { 
            if (patternCheck(i_str, factor)) {ID_sum+=i; break} 
        }
        
    }

}
console.log(ID_sum);