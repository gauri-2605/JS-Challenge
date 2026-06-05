#lecture 9,10  JavaScript Data Types & Memory Management

## Overview

JavaScript data types are mainly categorized into **two types**:

1. **Primitive Data Types**
2. **Non-Primitive (Reference) Data Types**

> Important: Data types are categorized based on **how data is stored in memory** and **how it is accessed**.

---

# 1. Primitive Data Types

Primitive data types are stored by **value**.

When a primitive value is copied, the **actual value is copied**, not its memory reference.

### Types of Primitive Data Types

There are **7 Primitive Data Types**:

| Data Type | Example |
|------------|----------|
| String | `"Hello"` |
| Number | `100`, `100.12` |
| Boolean | `true`, `false` |
| Null | `null` |
| Undefined | `undefined` |
| Symbol | `Symbol('123')` |
| BigInt | `123456789n` |

---

## String

```javascript
const name = "Gauri";
```

Stores textual data.

---

## Number

```javascript
const score = 100;
const score1 = 100.12;
```

JavaScript does **not** have separate types for integers and decimals.

```javascript
typeof score;  // number
typeof score1; // number
```

---

## Boolean

```javascript
const isLoggedIn = false;
```

Represents logical values:

- `true`
- `false`

---

## Null

```javascript
const outsideTemp = null;
```

Represents an intentional absence of value.

```javascript
typeof null; // object (historical JavaScript bug)
```

---

## Undefined

```javascript
let userEmail;
```

Variable declared but not assigned a value.

```javascript
typeof userEmail; // undefined
```

---

## Symbol

Used to create unique values.

```javascript
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
```

Output:

```javascript
false
```

Even though descriptions are same, each Symbol is unique.

```javascript
typeof id; // symbol
```

---

## BigInt

Used for very large integers.

```javascript
const bigNumber = 245565696796796797n;
```

Adding `n` at the end automatically creates a BigInt.

```javascript
typeof bigNumber; // bigint
```

---

# 2. Non-Primitive (Reference) Data Types

Non-primitive data types are stored by **reference**.

When copied, the memory reference is shared.

### Types

1. Array
2. Object
3. Function

---

## Array

```javascript
const heroes = ["Shaktiman", "Naagraj", "Doga"];
```

```javascript
typeof heroes; // object
```

Arrays are special types of objects in JavaScript.

---

## Object

Objects store data as key-value pairs.

```javascript
let obj = {
    name: "Gauri",
    age: 23
};
```

```javascript
typeof obj; // object
```

---

## Function

Functions are also objects in JavaScript.

```javascript
const myFunction = function() {
    console.log("HELLO JS");
}
```

```javascript
typeof myFunction; // function
```

---

# typeof Results

```javascript
console.log(typeof bigNumber);     // bigint
console.log(typeof score);         // number
console.log(typeof score1);        // number
console.log(typeof heroes);        // object
console.log(typeof myFunction);    // function
console.log(typeof obj);           // object
console.log(typeof id);            // symbol
console.log(typeof outsideTemp);   // object
console.log(typeof isLoggedIn);    // boolean
```

---

# JavaScript Memory

JavaScript mainly uses two types of memory:

## 1. Stack Memory

Used for:

- Primitive Data Types

Characteristics:

- Stores a copy of the value.
- Changes in copied value do not affect original value.

### Example

```javascript
let myYoutubeName = "hiteshchoudhary";

let anotherName = myYoutubeName;

anotherName = "chaiaurcode";

console.log(anotherName);
console.log(myYoutubeName);
```

Output:

```javascript
chaiaurcode
hiteshchoudhary
```

Explanation:

- `anotherName` receives a copy.
- Modifying `anotherName` does not affect `myYoutubeName`.

---

## 2. Heap Memory

Used for:

- Arrays
- Objects
- Functions

Characteristics:

- Stores reference to actual memory location.
- Changes through one reference affect all references.

### Example

```javascript
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "gauri@123";

console.log(userOne.email);
console.log(userTwo.email);
```

Output:

```javascript
gauri@123
gauri@123
```

Explanation:

- `userTwo` gets the reference of `userOne`.
- Both variables point to the same object in heap memory.
- Changing one affects the other.

---

# Memory Diagram

## Primitive (Stack)

```text
myYoutubeName
      |
      v
"hiteshchoudhary"

anotherName
      |
      v
"chaiaurcode"
```

Both hold separate copies.

---

## Non-Primitive (Heap)

```text
userOne --------\
                 \
                  ---> Object in Heap
                 /
userTwo --------/
```

Both references point to the same object.

---

# Important Interview Points

### Primitive Data Types

- Stored in Stack Memory.
- Copy by value.
- Changes do not affect original data.

### Non-Primitive Data Types

- Stored in Heap Memory.
- Copy by reference.
- Changes affect original data.

### Special `typeof` Results

```javascript
typeof null        // object
typeof []          // object
typeof {}          // object
typeof function(){} // function
typeof Symbol()    // symbol
typeof 123n        // bigint
```

---

# Quick Revision

### Primitive

```text
String
Number
Boolean
Null
Undefined
Symbol
BigInt
```

### Non-Primitive

```text
Array
Object
Function
```

### Memory

```text
Primitive      → Stack → Copy
Non-Primitive  → Heap  → Reference
```

---

## Key Takeaway

> Primitive data types are copied by value (Stack Memory), while Non-Primitive data types are copied by reference (Heap Memory). Understanding this concept is essential for mastering JavaScript behavior and memory management.
