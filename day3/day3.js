/* Advent of Code Day 3! 
Part 1 Goal: Calculate total output joltage, ie. the sum of the maximum joltage from each bank
Part 2 Goal: ??
- The maximum joltage for a bank is the highest number formed by joining two digits from the bank
*/

// Retrieve input file
const fs = require('fs');
const data = (fs.readFileSync('input.txt', 'utf8')).split("\n");

// Store variables
var joltageSum = 0;

function maxLTR (bank, start, end) {
    let currMax = bank[start];
    let currIndex = start;
    for (let i = start; i <= end; i++) {
        if (bank[i] > currMax) {
            currMax = bank[i];
            currIndex = i;
        }
    }
    return [currMax,currIndex];
}


for (const bank of data) {
    var firstDigit = maxLTR(bank,0,bank.length-2);
    var secondDigit = maxLTR(bank,firstDigit[1]+1,bank.length);
    var bankJoltage = firstDigit[0]+secondDigit[0];
    joltageSum += Number(bankJoltage);
}

console.log(joltageSum);