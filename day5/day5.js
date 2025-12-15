/* Advent of Code Day 5! 
Part 1 Goal: Count all fresh ingredients
Part 2 Goal: ??
- The source data provides ranges of fresh ingredient IDs followed by IDs of ingredients to check
- The ranges are inclusive and IDs must appear in at least one list to be fresh
*/

// Retrieve input file
const fs = require('fs');
const data = (fs.readFileSync('input.txt', 'utf8')).split("\n\n");
const ranges = data[0].split("\n");
const ingredients = data[1].split("\n");

// Store variables
var fresh = 0;

for(const ingredient of ingredients) {
    var ID = Number(ingredient);
    for (const range of ranges) {
        var span = range.split('-');
        var min = Number(span[0]);
        var max = Number(span[1]);
        if ((min <= ID) && (ID <= max)) { 
            fresh++;
            break
         }
    }
}

console.log(fresh);