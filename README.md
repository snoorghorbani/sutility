# SUtility - A Functional JavaScript Utility Library

[![NPM Version](https://img.shields.io/npm/v/sutility.svg?style=flat-square)](https://www.npmjs.com/package/sutility)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

SUtility is a comprehensive functional programming library for JavaScript, providing over 180 utility functions that operate without modifying native prototypes. Designed for both browser and Node.js environments, it also includes a lightweight MV* framework to promote organized code structure. A key innovation of this library is its ability to parse a target project's codebase and generate an optimized, tree-shaken build containing only the required functions for a minimal production footprint.

As the sole author and maintainer of the library, I was responsible for its full lifecycle from conception to ongoing support. My key contributions included engineering its innovative tree-shaking feature for optimized builds, developing a comprehensive unit test suite to ensure code quality, and writing detailed API and end-user documentation for all 180+ functions.

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

npm install sutility

## Basic Usage

Import the functions you need and start using them right away.

import { capitalize, get } from 'sutility';

// Example 1: String manipulation
console.log(capitalize('hello world'));
// => 'Hello world'

// Example 2: Safely access nested object properties
const user = { profile: { name: 'John Doe' } };
console.log(get(user, 'profile.name', 'Default Name'));
// => 'John Doe'

---

## The Optimizer: Custom Production Builds

One of the most powerful features of SUtility is its ability to create a lightweight, optimized build for your production environment. The optimizer tool parses your project's source code, detects which SUtility functions are being used, and generates a new library file that includes *only* those functions.

This results in the smallest possible production footprint, improving your application's load time and performance.

### How to use the Optimizer:

Run the following command from your project's root directory:

npx sutility build --input ./src --output ./sutility.custom.js

You can then import the custom, smaller build in your production code.

---

## API Reference

The full API is extensively documented within the source code itself. Each function includes comments explaining its parameters, return values, and usage examples. Please feel free to explore the `lib` directory to see all available functions.

---

## Testing

This library uses a comprehensive suite of unit tests.

To run the tests yourself, clone the repository and run:

npm install
npm test

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
