/* Advent of Code Day 1! 
Part 1 Goal: Count the number of times the dial lands on zero after a rotation
Part 2 Goal: Count number of times the dial passes or lands on zero
- Dial starts at 50
- each action is described with a direction R or L and a number for amount to turn
*/

// Retrieve input file
const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const turns = data.split("\n");

// Store variables
var zeros = 0;
var dialStop = 50; // Starts at 50

function mod100(n) { return (((n%100)+100)%100) } // For convenience

for(const turn of turns) {
    var rotation = turn.at() == 'L' ?  Number(turn.slice(1))*-1 : Number(turn.slice(1));  
    var loops = Math.floor(Math.abs(rotation)/100);

    if (((rotation<0 && Math.abs(rotation%100)>=dialStop) || (rotation>0 && Math.abs(rotation%100)>=(100-dialStop))) && dialStop != 0) {zeros++}
    zeros+=loops;

    dialStop = mod100(dialStop+(rotation%100));
}

console.log(zeros);