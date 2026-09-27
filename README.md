# Recursion Practice — Sum of Digits

## Question 5 🟡

Write a recursive function that calculates the **sum of all digits** of a given number.

### Problem

```js
function sumDigits(n) {
    // your code
}

console.log(sumDigits(12345));
```

### Expected Output

```text
15
```

Because:

```text
1 + 2 + 3 + 4 + 5 = 15
```

---

## Hint

You already know how to get:

### Last digit

```js
n % 10
```

For example:

```js
12345 % 10 // 5
```

### Remaining number

```js
Math.floor(n / 10)
```

For example:

```js
Math.floor(12345 / 10) // 1234
```

Think about how recursion can repeatedly remove the last digit.

---

## Solution

```js
function sumDigits(n) {

    if (n === 0) return 0;

    let lastDigit = Math.floor(n % 10);

    return lastDigit + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(12345));
```

### Output

```text
15
```

---

## How It Works

For:

```js
sumDigits(12345)
```

The function breaks the number down recursively:

```text
12345
 ↓
lastDigit = 5
remaining = 1234

1234
 ↓
lastDigit = 4
remaining = 123

123
 ↓
lastDigit = 3
remaining = 12

12
 ↓
lastDigit = 2
remaining = 1

1
 ↓
lastDigit = 1
remaining = 0
```

When `n` becomes `0`, the recursion stops:

```js
if (n === 0) return 0;
```

Then the recursive calls return back upward:

```text
sumDigits(0)     → 0
sumDigits(1)     → 1 + 0 = 1
sumDigits(12)    → 2 + 1 = 3
sumDigits(123)   → 3 + 3 = 6
sumDigits(1234)  → 4 + 6 = 10
sumDigits(12345) → 5 + 10 = 15
```

Therefore:

```text
15
```

---

## Key Recursion Pattern

The important pattern is:

```js
if (baseCase) return baseValue;

return currentValue + recursiveCall(smallerProblem);
```

For this problem:

```js
if (n === 0) return 0;

return lastDigit + sumDigits(remainingNumber);
```

Where:

```js
lastDigit = n % 10;
remainingNumber = Math.floor(n / 10);
```

---

## Important Learning

This problem demonstrates how to:

* Identify a **base case**
* Extract the last digit using `%`
* Remove the last digit using `Math.floor(n / 10)`
* Reduce a problem into a smaller version of itself
* Build the final answer while recursion **unwinds**

### Complexity

For a number with `d` digits:

```text
Time:  O(d)
Space: O(d)
```

The space is `O(d)` because each recursive call remains on the call stack until the base case is reached.

---

## Practice

Try solving these without looking at the solution:

```js
sumDigits(123)      // 6
sumDigits(999)      // 27
sumDigits(1001)     // 2
sumDigits(7)        // 7
sumDigits(0)        // 0
```

### Next Challenge

Try writing a recursive function to **count the number of digits** in a number:

```js
function countDigits(n) {
    // your code
}

console.log(countDigits(12345));

// Expected: 5
```
