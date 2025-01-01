# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js applications using Express.js: an unhandled promise rejection caused by an error thrown within an asynchronous operation inside a route handler.  The code simulates an asynchronous operation (using `setTimeout`) that may throw an error.  If the error occurs, the application crashes because the error is not properly handled.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows how to properly handle the error using async/await and try...catch blocks, preventing the application from crashing.

## How to reproduce
1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js`. Observe that the server often crashes after a few requests.
5. Run `node bugSolution.js`. Observe that the server now handles errors gracefully without crashing.