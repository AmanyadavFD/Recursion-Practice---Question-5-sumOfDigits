/*
    Question 5 🟡

Now try this without me giving you the formula:

Sum of digits

Write:

function sumDigits(n) {
    // your code
}

console.log(sumDigits(12345));

Expected:

15

Because:

1 + 2 + 3 + 4 + 5 = 15

Hint: You already know how to get:

the last digit
the remaining number

Think about:

n % 10
Math.floor(n / 10)

You figure out the base case and recursive return yourself.
*/

function sumDigits(n) {
    if(n === 0) return 0;
    let lastDigit = Math.floor(n%10);
    return lastDigit + sumDigits(Math.floor(n/10));
}

console.log(sumDigits(12345));