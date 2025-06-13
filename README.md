# SUtility - A Functional JavaScript Utility Library

[![NPM Version](https://img.shields.io/npm/v/sutility.svg?style=flat-square)](https://www.npmjs.com/package/sutility)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

SUtility is a comprehensive functional programming library for JavaScript, providing over 180 utility functions that operate without modifying native prototypes. It is designed to be a business-independent, zero-dependency toolkit for any project.

This library is isomorphic, supporting both **browser** and **Node.js** environments.

---

## Key Features

* **180+ Functions:** A rich collection of helpers for arrays, objects, functions, and more.
* **Functional-First:** Encourages a clean, functional programming style.
* **Zero Dependencies:** Lightweight and will not bloat your project with other packages.
* **Safe:** Does not extend or modify any built-in JavaScript objects.
* **Lightweight MVW Framework:** Includes a simple Model-View-* framework to help organize code.
* **Unique Optimizer:** Includes a built-in tool to create a production build of the library that only contains the functions your project actually uses.
* **Compatibility:** Compatible with multiple JavaScript environments, including Node.js, AngularJS, and Vanilla JavaScript.

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

## Design Patterns & Architecture

SUtility is built with proven design patterns to ensure the code is clean, maintainable, and predictable. The library primarily follows a functional-first approach but also includes structural patterns for better application organization.

### Functional Programming Patterns

At its core, SUtility provides tools that enable a functional style of programming:

* **Higher-Order Functions:** Many functions in the library are higher-order, meaning they take functions as arguments or return them as results. This allows for powerful and reusable abstractions, similar to `Array.prototype.map` or `.filter`.
* **Composition:** The utilities are designed to be easily composed, allowing you to build complex logic by chaining together simple, pure functions to solve more significant problems.
* **Immutability:** All functions are designed to be non-destructive. They do not modify your input data; instead, they always return new arrays or objects, preventing side effects and making your application's state more predictable.

### Structural Patterns

* **Module Pattern:** Each function is encapsulated in its own module. This allows developers to import only the specific functions they need, which works hand-in-hand with the library's custom optimizer to keep production builds as small as possible.
* **MV\* (Model-View-*) Framework:** The library includes a lightweight MV\* framework that helps organize your application's code by separating data logic (Model), presentation (View), and user input (Controller/ViewModel). This promotes a clean and scalable application architecture.

## API Reference

The full API is extensively documented within the source code itself. Each function includes comments explaining its parameters, return values, and usage examples. Please feel free to explore the `lib` directory to see all available functions.

---
You are absolutely right to clarify. Implementing classic design patterns as reusable functions is a key feature of a high-quality utility library. My apologies for not understanding that nuance initially.

Based on your clarification, here is a professionally written Markdown section for your `README.md` file. It explains that your library provides helpers to implement specific, well-known design patterns.

---

## Design Pattern Utilities

Beyond its core functional helpers, SUtility provides functions to easily implement common software design patterns, helping you write robust, scalable, and efficient code without the boilerplate.

### Memoization (Flyweight Pattern)

The Memoization pattern is a performance optimization technique used to cache the results of expensive function calls and avoid redundant computations. It's a specific implementation of the Flyweight pattern's goal of sharing common data. SUtility provides a `memoize` helper that wraps any function and stores its return values.

```javascript
import { memoize } from 'sutility';

// An expensive function that we don't want to re-run with the same arguments
const expensiveCalculation = (num) => {
  console.log('Performing expensive calculation...');
  return num * 2;
};

const memoizedCalc = memoize(expensiveCalculation);

memoizedCalc(5); // Logs "Performing expensive calculation..." and returns 10
memoizedCalc(5); // Returns 10 instantly from cache
memoizedCalc(10); // Logs "Performing expensive calculation..." and returns 20
memoizedCalc(10); // Returns 20 instantly from cache
```

### Observer Pattern (Publish/Subscribe)

Decouple different parts of your application with a simple event bus. The Observer pattern allows objects (subscribers) to be notified automatically when another object's state (the publisher) changes.

```javascript
import { createEventBus } from 'sutility';

const appEvents = createEventBus();

// Subscriber 1
appEvents.subscribe('user:login', (user) => {
  console.log(`Analytics service notified: ${user.name} logged in.`);
});

// Subscriber 2
appEvents.subscribe('user:login', (user) => {
  console.log(`UI service notified: Welcome, ${user.name}!`);
});

// Publishing an event
appEvents.publish('user:login', { name: 'John Doe' });
```

### Singleton Pattern

Ensure that a class has only one instance and provide a global point of access to it. This is perfect for managing shared state like a configuration object, a database connection, or a service.

```javascript
import { createSingleton } from 'sutility';

class AppConfig {
  constructor() {
    this.apiUrl = '[https://api.example.com](https://api.example.com)';
    this.timestamp = Date.now(); // Will be the same on every call
  }
}

const getConfig = createSingleton(AppConfig);

const config1 = getConfig();
const config2 = getConfig();

// Both constants point to the exact same instance
console.log(config1 === config2); // => true
console.log(config1.timestamp === config2.timestamp); // => true
```

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
```
