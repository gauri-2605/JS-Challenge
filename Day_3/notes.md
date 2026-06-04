# JavaScript Notes – Lecture 6 & 7

## Comparison Operators

Comparison operators return a Boolean value (`true` or `false`).

```js
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true
```

| Operator | Description |
|-----------|-------------|
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |
| `==` | Equal value |
| `!=` | Not equal |
| `===` | Strict equality |

---

## Comparing Different Data Types

JavaScript automatically converts values when comparing different data types.

```js
console.log("2" > 1);   // true
console.log("02" > 1);  // true
```

### Note

- JavaScript performs **type coercion** automatically.
- Strings containing numeric values are converted to numbers during comparison.
- TypeScript generally discourages comparing different data types.

---

## Null Comparisons

```js
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true
```

### Explanation

Comparison operators convert `null` to `0`:

```js
null >= 0
```

becomes:

```js
0 >= 0
```

which is `true`.

However, equality (`==`) behaves differently:

```js
null == 0
```

returns `false`.

### Important

- Equality (`==`) and comparison operators (`>`, `<`, `>=`, `<=`) work differently.
- Avoid such comparisons in real projects.

---

## Undefined Comparisons

```js
console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined >= 0);  // false
```

### Important

`undefined` does not convert into a meaningful numeric value during comparison.

All these comparisons return `false`.

---

## Strict Equality (`===`)

Strict equality checks both:

1. Value
2. Data Type

```js
console.log("2" === 2); // false
console.log(2 === 2);   // true
```

### Difference Between `==` and `===`

```js
"2" == 2   // true
"2" === 2  // false
```

### Best Practice

Always prefer:

```js
===
```

over

```js
==
```

---

# Type Conversion

## String to Number Conversion

```js
let score = "33";

let valueInNumber = Number(score);
```

### Examples

| Value | Result |
|---------|---------|
| `"44"` | `44` |
| `"23abc"` | `NaN` |
| `null` | `0` |
| `undefined` | `NaN` |
| `true` | `1` |
| `false` | `0` |

---

## Boolean Conversion

```js
let bool = "gauri";

let newOne = Boolean(bool);
```

### Examples

| Value | Boolean Result |
|---------|---------------|
| `1` | `true` |
| `0` | `false` |
| `""` | `false` |
| `"gauri"` | `true` |

---

## Number to String Conversion

```js
let someNumber = 45;

let stringNumber = String(someNumber);
```

### Result

```js
"45"
```

Type becomes:

```js
string
```

---

# Operations

## Negative Value

```js
let value = 3;
let negValue = -value;

console.log(negValue); // -3
```

---

## String Concatenation

```js
let str1 = "Gauri";
let str2 = " Badgujar";

let str3 = str1 + str2;

console.log(str3);
```

Output:

```js
Gauri Badgujar
```

---

## Addition with Strings and Numbers

```js
console.log("1" + 2);      // "12"
console.log(1 + "2");      // "12"
console.log(1 + 2);        // 3
console.log("1" + 2 + 2);  // "122"
console.log(1 + 2 + "2");  // "32"
```

### Rule

If a string appears first, JavaScript treats the remaining values as strings.

---

## Use Parentheses for Clarity

```js
console.log((1 + 2) * 2 % 2);
```

Using parentheses improves readability and avoids confusion.

---

## Unary Plus Operator

```js
console.log(+true); // 1
console.log(+"");   // 0
```

### Note

These conversions are valid but rarely used in production code.

---

## Multiple Assignment

```js
let num1, num2, num3;

num1 = num2 = num3 = 2 + 1;
```

Output:

```js
num1 = 3
num2 = 3
num3 = 3
```

### Note

Works correctly but is generally considered poor coding style.

---

## Increment Operator

```js
let gameCounter = 100;

gameCounter++;

console.log(gameCounter);
```

Output:

```js
101
```

### Types

#### Postfix

```js
x++;
```

Uses the current value first, then increments.

#### Prefix

```js
++x;
```

Increments first, then uses the updated value.

---
