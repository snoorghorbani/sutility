# SUtility - A Functional JavaScript Utility Library

[![NPM Version](https://img.shields.io/npm/v/sutility.svg?style=flat-square)](https://www.npmjs.com/package/sutility)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

SUtility is a powerful, zero-dependency toolkit for professional JavaScript development. More than just a collection of helpers, SUtility provides a lightweight MV* application framework, built-in utilities for implementing design patterns (like Publisher, Singleton, and Decorator), and a unique fluent interface for conditional logic. With over 180 functions and a custom build optimizer that tree-shakes the library for a minimal production footprint, SUtility is designed to help you write clean, efficient, and scalable code without modifying native prototypes.

---

## Table of Contents

* [Key Features](#key-features)
* [Installation](#installation)
* [Basic Usage](#basic-usage)
* [The Optimizer: Custom Production Builds](#the-optimizer-custom-production-builds)
* [The Lightweight MV* Framework](#the-lightweight-mv-framework)
* [State Management & Persistence](#state-management--persistence)
* [Design Pattern Utilities](#design-pattern-utilities)
* [Assertion & Conditional Execution](#assertion--conditional-execution)
* [Function Helpers](#function-helpers)
* [Method Manipulators](#method-manipulators)
* [Array Manipulation & Querying](#array-manipulation--querying)
* [String Manipulation](#string-manipulation)
* [API Reference](#api-reference)
* [Testing](#testing)
* [Contributing](#contributing)
* [License](#license)

---

## Key Features

* **180+ Functions:** A rich collection of helpers for arrays, objects, functions, and more.
* **Functional-First:** Encourages a clean, functional programming style.
* **Zero Dependencies:** Lightweight and will not bloat your project with other packages.
* **Safe:** Does not extend or modify any built-in JavaScript objects.
* **Lightweight MVW Framework:** Includes a simple Model-View-* framework to help organize code.
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

## The Lightweight MV* Framework

SUtility includes a simple yet powerful MV* (Model-View-*) framework to help you structure your client-side applications. It provides a clear separation of concerns, making your code more organized, scalable, and easier to reason about without the overhead of a large, complex framework.

This micro-framework is built around three core concepts:

* **State (Model):** A plain JavaScript object that holds all your application's data. It is the single source of truth.
* **Actions (Controller):** Functions that are the only way to change the state. All state mutations happen through actions, making your data flow predictable.
* **Views:** Functions that subscribe to state changes. They are automatically called whenever any part of the state updates, allowing you to update the DOM or render your UI.

### Usage Example

```javascript
import { framework } from 'sutility';

const app = framework({
  state: { count: 0 },
  actions: { increment: (state) => ({ ...state, count: state.count + 1 }) },
  views: { logCount: (state) => console.log(`Count is: ${state.count}`) }
});
app.dispatch('increment'); // Logs: "Count is: 1"
```
---

## State Management & Persistence

Utilities for managing and persisting the state of your application.

### enableBackup
`_.enableBackup(appInstance, [options])`

Automatically backs up the state of an MV* framework instance to the browser's Web Storage (`localStorage` or `sessionStorage`). This utility persists the application state, allowing it to be restored across page reloads for a seamless user experience.

**Parameters**
1. `appInstance` (*Object*): The application instance returned by the `_.framework()` method.
2. `[options]` (*Object*): An optional configuration object.
    * `key` (*String*): The `localStorage` key to save the state under. Defaults to `'sutility_backup'`.
    * `storage` (*String*): The storage type to use, either `'local'` or `'session'`. Defaults to `'local'`.

**Returns**
(*undefined*): This function does not return a value. It augments the app instance with state persistence logic.

**Example**
```javascript
import { framework, enableBackup } from 'sutility';

const app = framework({
  state: { user: null, theme: 'dark' }
});

enableBackup(app, { key: 'my-app-backup' });
app.dispatch('login', { name: 'Alice' });
// Check your browser's localStorage for the key 'my-app-backup'.
```

---

## Design Pattern Utilities

SUtility provides helper functions to easily implement common software design patterns, helping you write robust and scalable code without the boilerplate.

### publisher
`_.publisher(object)`

Applies a full suite of publish/subscribe capabilities to any given object, turning it into a powerful event emitter. This function augments the target object with `publish`, `subscribe`, and `unsubscribe` methods.

**Example**
```javascript
import { publisher } from 'sutility';

const appEvents = publisher({}); // Make a plain object an event hub
appEvents.subscribe('user:login', (user) => {
  console.log(`Notification: ${user.name} has logged in.`);
});
appEvents.publish('user:login', { name: 'John Doe' });
```

### Memoization (Flyweight Pattern)
`_.memoize(func)`

Creates a new function that caches the results of the wrapped function to avoid re-computing for the same arguments.

**Example**
```javascript
import { memoize } from 'sutility';
const expensiveCalc = (num) => { /* ... time-consuming logic ... */ };
const memoizedCalc = memoize(expensiveCalc);
memoizedCalc(5); // Runs the calculation
memoizedCalc(5); // Returns the cached result instantly
```

### Decorator Pattern
`_.decorate(func, ...decorators)`

Dynamically adds new functionality to existing functions without altering their source code using the `decorate` helper.

**Example**
```javascript
import { decorate } from 'sutility';
const add = (a, b) => a + b;
const withLogging = (fn) => (...args) => { console.log(`Calling...`); return fn(...args); };
const loggedAdd = decorate(add, withLogging);
loggedAdd(5, 7);
```

### Singleton Pattern
`_.createSingleton(class)`

Ensures a class has only one instance and provides a global point of access to it.

**Example**
```javascript
import { createSingleton } from 'sutility';
class Config { /* ... */ }
const getConfig = createSingleton(Config);
const config1 = getConfig();
const config2 = getConfig(); // config1 === config2
```
---

## Assertion & Conditional Execution

### Type Checking with `is`

SUtility includes a comprehensive `is` object that provides a whole suite of convenient and readable methods for type checking. All checks are also available in a negated form under the `is.not` property (e.g., `is.not.string(val)`).

**Available Checks:**
* **Type Checks:** `string`, `number`, `boolean`, `array`, `object`, `function`, `asyncFunction`, `promise`, `date`, `regexp`, `symbol`, `error`
* **Value Checks:** `null`, `undefined`, `nan`, `truthy`, `falsy`
* **Content & Format Checks:** `empty`, `json`, `url`, `email`, `integer`, `float`
* **Environment Checks:** `browser`, `node`, `domElement`

### Conditional Execution with `_.if`

> **Note:** In JavaScript, `if` is a reserved keyword. This utility avoids syntax errors by being used as a property on the main library object (e.g., `_.if`), not as a standalone import.

SUtility provides a readable fluent interface for conditional execution by chaining with the `is` utility.

```javascript
import _ from 'sutility';

// If...else chain
_.if.is.number(42, () => {
  console.log('It is a number.');
}).else(() => {
  console.log('It is NOT a number.');
});
// => Logs: "It is a number."
```

---

## Function Helpers

Higher-order functions that add functionality to your existing functions, helping you control execution, manage arguments, and compose logic.

### debounce
`_.debounce(func, wait, [options])`

Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.

**Parameters**
1. `func` (*Function*): The function to debounce.
2. `wait` (*Number*): The number of milliseconds to delay.

**Returns**
(*Function*): Returns the new debounced function.

### throttle
`_.throttle(func, wait)`

Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.

**Parameters**
1. `func` (*Function*): The function to throttle.
2. `wait` (*Number*): The number of milliseconds to throttle invocations to.

**Returns**
(*Function*): Returns the new throttled function.

### curry
`_.curry(func)`

Creates a function that accepts arguments of `func` one at a time. This allows for partial application.

**Parameters**
1. `func` (*Function*): The function to curry.

**Returns**
(*Function*): Returns the new curried function.

### pipe
`_.pipe(...funcs)`

Performs left-to-right function composition.

**Parameters**
1. `...funcs` (*Function[]*): The sequence of functions to compose.

**Returns**
(*Function*): Returns the new composite function.

---

## Method Manipulators

A collection of higher-order functions designed to manipulate or control the execution of other functions.

### callBox
`_.callBox(func, [errorHandler])`
Wraps a function in a `try...catch` block. If the original function throws an error, the optional `errorHandler` is called.

### callConstantly
`_.callConstantly(func, interval)`
Creates a controller object that repeatedly calls `func` every `interval` milliseconds. Returns an object with `.start()` and `.stop()` methods.

### callIgnore
`_.callIgnore(func)`
Creates a new function that, when called, invokes the original `func` with no arguments, ignoring any arguments it receives.

### callVoucher
`_.callVoucher(func)`
Creates a version of a function that can only be invoked one time. Also known as `once`.

### callWhen
`_.callWhen(predicate, func)`
Creates a new function that will only execute `func` if the `predicate` function returns `true`.

### callWithDelay
`_.callWithDelay(func, delay, ...args)`
Invokes `func` after a specified `delay` in milliseconds, applying any provided `args`.

---

## Array Manipulation & Querying

A suite of functions for array manipulation, transformation, and querying.

### chunk
`_.chunk(array, [size=1])`
Creates an array of elements split into groups the length of `size`.

### compact
`_.compact(array)`
Creates an array with all falsey values removed (`false`, `null`, `0`, `""`, `undefined`, `NaN`).

### difference
`_.difference(array, [values])`
Creates an array of values from the first array that are not present in the other given arrays.

### findIndex
`_.findIndex(array, [predicate])`
Returns the index of the first element `predicate` returns truthy for.

### flatten
`_.flatten(array)`
Flattens a nested array one level deep.

### head
`_.head(array)`
Gets the first element of an array.

### tail
`_.tail(array)`
Gets all but the first element of an array.

### take
`_.take(array, [n=1])`
Creates a slice of an array with `n` elements taken from the beginning.

### union
`_.union(...arrays)`
Creates an array of unique values from all given arrays.

### uniq
`_.uniq(array)`
Creates a duplicate-free version of an array.

### zip
`_.zip(...arrays)`
Creates an array of grouped elements.

---

## String Manipulation

Utilities for common string transformations and manipulations.

### capitalize
`_.capitalize(string)`
Converts the first character of a string to upper case and the rest to lower case.

### camelCase
`_.camelCase([string=''])`
Converts a string to camelCase.

### kebabCase
`_.kebabCase([string=''])`
Converts a string to kebab-case.

### snakeCase
`_.snakeCase([string=''])`
Converts a string to snake\_case.

### pad
`_.pad([string=''], [length=0], [chars=' '])`
Pads a string on both sides with `chars`.

### startsWith
`_.startsWith([string=''], [target], [position=0])`
Checks if a string starts with the given target string.

### endsWith
`_.endsWith([string=''], [target], [position=string.length])`
Checks if a string ends with the given target string.

### trim
`_.trim([string=''], [chars=whitespace])`
Removes leading and trailing whitespace or specified characters.

### splitAndTrim
`_.splitAndTrim(string, separator)`
Splits a string by a separator and then trims the whitespace from each resulting substring.

---

## API Reference

The full API is extensively documented within the source code itself. Please feel free to explore the `lib` directory to see all available functions.

---

## Testing

This library uses a comprehensive suite of unit tests. To run the tests yourself, clone the repository and run:

```bash
npm install
npm test
```

The library currently has over 40% code coverage, with a clear roadmap to increase this significantly.

---

## Contributing

Contributions are welcome! Please feel free to fork the repository, make your changes, and open a pull request.

## License

This project is licensed under the MIT License.
