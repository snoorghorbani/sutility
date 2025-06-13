# SUtility - A Functional JavaScript Utility Library

[![NPM Version](https://img.shields.io/npm/v/sutility.svg?style=flat-square)](https://www.npmjs.com/package/sutility)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

SUtility is a comprehensive functional programming library for JavaScript, providing over 180 utility functions that operate without modifying native prototypes. It is designed to be a business-independent, zero-dependency toolkit for any project.

As the sole author and maintainer of the library, I was responsible for its full lifecycle from conception to ongoing support. My key contributions included engineering its innovative tree-shaking feature for optimized builds, developing a comprehensive unit test suite to ensure code quality, and writing detailed API and end-user documentation for all 180+ functions.

---

## Table of Contents

* [Key Features](#key-features)
* [Installation](#installation)
* [Basic Usage](#basic-usage)
* [Array Manipulation & Querying](#array-manipulation--querying)
* [The Optimizer: Custom Production Builds](#the-optimizer-custom-production-builds)
* [API Reference](#api-reference)
* [The Lightweight MV* Framework](#the-lightweight-mv-framework)
* [Design Pattern Utilities](#design-pattern-utilities)
* [Function Helpers](#function-helpers)
* [Type Checking with 'is'](#type-checking-with-is)
* [Testing](#testing)
* [Contributing](#contributing)
* [License](#license)

---

## Key Features

* **180+ Functions:** A rich collection of helpers for arrays, objects, functions, and more.
* **Functional-First:** Encourages a clean, functional programming style.
* **Zero Dependencies:** Lightweight and will not bloat your project with other packages.
* **Safe:** Does not extend or modify any built-in JavaScript objects.
* **Lightweight MV* Framework:** Includes a simple Model-View-* framework to help organize code.
* **Unique Optimizer:** Includes a built-in tool to create a production build of the library that only contains the functions your project actually uses.

## Installation

Install the library using npm:

```bash
npm install sutility
```

## Basic Usage

Import the functions you need and start using them right away.

```javascript
import { capitalize, get } from 'sutility';

// Example 1: String manipulation
console.log(capitalize('hello world'));
// => 'Hello world'

// Example 2: Safely access nested object properties
const user = { profile: { name: 'John Doe' } };
console.log(get(user, 'profile.name', 'Default Name'));
// => 'John Doe'
```

---

## Array Manipulation & Querying

A suite of functions for array manipulation, transformation, and querying.

### chunk
`_.chunk(array, [size=1])`
Creates an array of elements split into groups the length of `size`.

```javascript
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
```

### compact
`_.compact(array)`
Creates an array with all falsey values removed (`false`, `null`, `0`, `""`, `undefined`, `NaN`).

```javascript
compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

### difference
`_.difference(array, [values])`
Creates an array of values from the first array that are not present in the other given arrays.

```javascript
difference([2, 1], [2, 3]);
// => [1]
```

### findIndex
`_.findIndex(array, [predicate])`
Returns the index of the first element `predicate` returns truthy for.

```javascript
const users = [{ 'name': 'barney', 'active': false }, { 'name': 'fred', 'active': true }];
findIndex(users, user => user.active);
// => 1
```

### flatten
`_.flatten(array)`
Flattens a nested array one level deep. For recursive flattening, use `flattenDeep`.

```javascript
flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

### head
`_.head(array)`
Gets the first element of an array.

```javascript
head([1, 2, 3]);
// => 1
```

### tail
`_.tail(array)`
Gets all but the first element of an array.

```javascript
tail([1, 2, 3]);
// => [2, 3]
```

### take
`_.take(array, [n=1])`
Creates a slice of an array with `n` elements taken from the beginning.

```javascript
take([1, 2, 3], 2);
// => [1, 2]
```

### union
`_.union(...arrays)`
Creates an array of unique values, in order, from all given arrays.

```javascript
union([2, 3], [1, 2]);
// => [2, 3, 1]
```

### uniq
`_.uniq(array)`
Creates a duplicate-free version of an array.

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

### zip
`_.zip(...arrays)`
Creates an array of grouped elements, where the first element contains the first elements of the input arrays, the second contains the second, and so on.

```javascript
zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
```

---

## The Optimizer: Custom Production Builds

One of the most powerful features of SUtility is its ability to create a lightweight, optimized build for your production environment. The optimizer tool parses your project's source code, detects which SUtility functions are being used, and generates a new library file that includes *only* those functions.

This results in the smallest possible production footprint, improving your application's load time and performance.

### How to use the Optimizer:

Run the following command from your project's root directory:

```bash
npx sutility build --input ./src --output ./sutility.custom.js
```

You can then import the custom, smaller build in your production code.

---

## API Reference

The full API is extensively documented within the source code itself. Each function includes comments explaining its parameters, return values, and usage examples. Please feel free to explore the `lib` directory to see all available functions.

---
## The Lightweight MV* Framework

SUtility includes a simple yet powerful MV* (Model-View-*) framework to help you structure your client-side applications. It provides a clear separation of concerns, making your code more organized, scalable, and easier to reason about without the overhead of a large, complex framework.

This micro-framework is built around three core concepts:

* **State (Model):** A plain JavaScript object that holds all your application's data. It is the single source of truth.
* **Actions (Controller):** Functions that are the only way to change the state. All state mutations happen through actions, making your data flow predictable.
* **Views:** Functions that subscribe to state changes. They are automatically called whenever any part of the state updates, allowing you to update the DOM or render your UI.

### Usage Example

```javascript
import { framework } from 'sutility';

// 1. Define the initial state of your application
const initialState = {
  count: 0
};

// 2. Define actions that return a new state object
const actions = {
  increment: (state) => ({ ...state, count: state.count + 1 }),
  decrement: (state) => ({ ...state, count: state.count - 1 }),
  add: (state, amount) => ({ ...state, count: state.count + amount })
};

// 3. Define views that react to any state change
const views = {
  logCountToConsole: (state) => {
    console.log(`The current count is: ${state.count}`);
  }
};

// 4. Create the application instance
const app = framework({
  state: initialState,
  actions,
  views
});

// 5. Dispatch actions to update the state.
app.dispatch('increment');       // Console logs: "The current count is: 1"
app.dispatch('add', 5);          // Console logs: "The current count is: 6"
```

---

## Design Pattern Utilities

Beyond its core functional helpers, SUtility provides functions to easily implement common software design patterns, helping you write robust, scalable, and efficient code without the boilerplate.

### Memoization (Flyweight Pattern)

The Memoization pattern is a performance optimization technique used to cache the results of expensive function calls. SUtility provides a `memoize` helper that wraps any function and stores its return values.

```javascript
import { memoize } from 'sutility';
const expensiveCalc = (num) => { /* ... time-consuming logic ... */ };
const memoizedCalc = memoize(expensiveCalc);
memoizedCalc(5); // Runs the calculation
memoizedCalc(5); // Returns the cached result instantly
```

### Observer Pattern (Publish/Subscribe)

Decouple parts of your application with a simple event bus. The Observer pattern allows objects to subscribe to events and be notified when they are published.

```javascript
import { createEventBus } from 'sutility';
const appEvents = createEventBus();
appEvents.subscribe('user:login', (user) => console.log(`${user.name} logged in.`));
appEvents.publish('user:login', { name: 'John' });
```
### Decorator Pattern

Dynamically add new functionality to existing functions without altering their source code using the `decorate` helper.

```javascript
import { decorate } from 'sutility';

// The original function
const add = (a, b) => a + b;

// A decorator to log when a function is called
const withLogging = (fn) => (...args) => {
  console.log(`Calling function '${fn.name}'...`);
  return fn(...args);
};

// Apply the decorator
const loggedAdd = decorate(add, withLogging);

const result = loggedAdd(5, 7);
// Console logs: "Calling function 'add'..."

console.log(result);
// => 12
```

### Singleton Pattern

Ensure that a class has only one instance and provide a global point of access to it. This is useful for managing shared state like a configuration object or a service.

```javascript
import { createSingleton } from 'sutility';
class Config { /* ... */ }
const getConfig = createSingleton(Config);
const config1 = getConfig();
const config2 = getConfig();
// config1 === config2
```
---

## Function Helpers

Higher-order functions that add functionality to your existing functions, helping you control execution, manage arguments, and compose logic.

### debounce
`_.debounce(func, wait, [options])`

Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked. This is useful for preventing a function from firing too often, such as handling search input or window resizing events.

**Parameters**
1. `func` (*Function*): The function to debounce.
2. `wait` (*Number*): The number of milliseconds to delay.
3. `[options]` (*Object*): An optional options object.
    * `leading` (*boolean*): Specify invoking on the leading edge of the timeout. Defaults to `false`.
    * `trailing` (*boolean*): Specify invoking on the trailing edge of the timeout. Defaults to `true`.

**Returns**
(*Function*): Returns the new debounced function.

**Example**
```javascript
import { debounce } from 'sutility';

// A search function that would normally call an API
const performSearch = (query) => {
  console.log(`Searching for: ${query}`);
};

const debouncedSearch = debounce(performSearch, 300);

// Imagine a user typing 'hello' into a search bar quickly
debouncedSearch('hello'); // This is the only call that will execute after 300ms

// => Console logs: "Searching for: hello"
```

### throttle
`_.throttle(func, wait, [options])`

Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds. This is useful for rate-limiting functions that execute on rapidly-firing events, like scrolling or mouse movement.

**Parameters**
1. `func` (*Function*): The function to throttle.
2. `wait` (*Number*): The number of milliseconds to throttle invocations to.
3. `[options]` (*Object*): An optional options object.
    * `leading` (*boolean*): Specify invoking on the leading edge of the timeout. Defaults to `true`.
    * `trailing` (*boolean*): Specify invoking on the trailing edge of the timeout. Defaults to `true`.

**Returns**
(*Function*): Returns the new throttled function.

**Example**
```javascript
import { throttle } from 'sutility';

const onScroll = () => {
  console.log('Scroll event handled!');
};

const throttledScroll = throttle(onScroll, 1000);

// The console will log "Scroll event handled!" at most once every second.
window.addEventListener('scroll', throttledScroll);
```

### curry
`_.curry(func)`

Creates a function that accepts arguments of `func` one at a time. This allows for partial application, making it easier to create specialized functions and compose them.

**Parameters**
1. `func` (*Function*): The function to curry.

**Returns**
(*Function*): Returns the new curried function.

**Example**
```javascript
import { curry } from 'sutility';

const add = (a, b, c) => a + b + c;

const curriedAdd = curry(add);

const add5 = curriedAdd(5);
const add5and10 = add5(10);

console.log(add5and10(20)); // => 35
```

### pipe
`_.pipe(...funcs)`

Performs left-to-right function composition. Creates a new function that passes the result of each function to the next one in the sequence.

**Parameters**
1. `...funcs` (*Function[]*): The sequence of functions to compose.

**Returns**
(*Function*): Returns the new composite function.

**Example**
```javascript
import { pipe } from 'sutility';

const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;

const processNumber = pipe(add5, multiplyBy2);

console.log(processNumber(10)); // => 30
```
---

## Type Checking with `is`

SUtility includes a comprehensive `is` object that provides a whole suite of convenient and readable methods for type checking and other common assertions. All checks are also available in a negated form under the `is.not` property (e.g., `is.not.string(val)`).

### Available Checks

#### Type Checks
`string`, `number`, `boolean`, `array`, `object`, `function`, `asyncFunction`, `promise`, `date`, `regexp`, `symbol`, `error`

#### Value Checks
`null`, `undefined`, `nan`, `truthy`, `falsy`

#### Content & Format Checks
`empty` (for arrays, objects, strings), `json` (for strings), `url` (for strings), `email` (for strings), `integer`, `float`

#### Environment Checks
`browser`, `node`, `domElement`

---

## Testing

This library uses a comprehensive suite of unit tests.

To run the tests yourself, clone the repository and run:

```bash
npm install
npm test
```

The library currently has over 40% code coverage, with a clear roadmap to increase this significantly.

---

## Contributing

Contributions are welcome! If you'd like to help improve SUtility, please feel free to fork the repository, make your changes, and submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
