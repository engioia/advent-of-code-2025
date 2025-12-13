/* Advent of Code Day 1!
Goal: Count the number of times the dial lands on zero after a rotation
- Dial starts at 50
- each action is described with a direction R or L and a number for amount to turn
*/

// Retrieve input file
const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const turns = data.split(/r?\n/);

// Store variables
var zeros = 0;
var dialStop = 50 // Starts at 50

for(const turn of turns){
    dialStop += turn.at() == 'L' ? Number(turn.slice(1))*-1 : Number(turn.slice(1)) // If left, subtract, else, add
    dialStop = ((dialStop%100)+100)%100 // Modulo workaround for negative numbers
    if (dialStop == 0) {
        zeros++
    }
}
console.log(zeros)