/* Advent of Code Day 5! 
Part 1 Goal: Count all fresh ingredients
Part 2 Goal: Count all possible fresh ingredients
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
var counted = [];


for (const range of ranges) {
    var span = range.split('-');
    var min = Number(span[0]);
    var max = Number(span[1]);
    var contained = false;
    for (const c_i in counted) { 
        var c_span = (counted[c_i]).split('-');
        var c_min = Number(c_span[0]);
        var c_max = Number(c_span[1]);

        if (min>=c_min && max <= c_max){ // New range contained in a counted range
            contained=true;
            break;
        } else if (min<c_min && max>c_max) { // New range contains a counted range
            ranges.push((min+'-'+(c_min-1)),((c_max+1)+'-'+max))
            contained=true;
            break;
        } else if (min<c_min && max>=c_min) { // New range overlaps a counted range (lower)
            counted = counted.with(c_i,(max+1)+"-"+c_max);
            fresh-=(max-c_min+1);
        } else if (max>c_max && min<=c_max) { // New range overlaps a counted range (upper)
            counted = counted.with(c_i,c_min+"-"+(min-1));
            fresh-=(c_max-min+1);
        } else { continue }
    }
    if (contained == false) { 
        fresh += max-min+1;
        counted.push(range);
    }
}

console.log(fresh);