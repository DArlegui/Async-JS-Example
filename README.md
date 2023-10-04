#Bay Valley Tech Module 3: Asynchronous JavaScript Example

Here are some examples of asynchronous JavaScript code. These codes are all my practices of asynchronous JavaScript.

## Part 1 - Pyramid of Doom (Callback Hell)

This code showcases callback hell, a situation where nested callback functions become challenging to manage and read. In this example, a button element (`btn`) is repeatedly moved to the right by 300 pixels with a 1000ms delay. 

- Each success callback triggers the next `moveX` call, creating deeply nested code.
- If the button reaches the screen boundary, a failure callback displays "CANNOT MOVE FURTHER!".
- The final success callback displays "YOU HAVE A WIDE SCREEN!".

Callback hell arises due to the pyramid-shaped structure of nested callbacks, making the code hard to maintain and understand. It's a prime example of the need for cleaner async code structures like Promises or async/await to avoid such complexities.

## Part 2 - Using Promises in JavaScript.

- Here we are simulating an asynchronous operation with a setTimeout inside the makeDogPromise function. Asynchronous operations are common in JavaScript, especially when dealing with tasks like network requests, file I/O, or waiting for user interactions.

- We use Promises to handle the asynchronous operation. Promises are a clean and effective way to work with asynchronous code. They allow you to handle success (using .then()) and errors (using .catch()) in a structured manner.

- Here we handle the two possible outcomes of the Promise: resolving with 'Yay we got a dog!' & rejecting with ':( No dog'. This demonstrates how Promises can handle both successful and unsuccessful outcomes of asynchronous operations.

- Overall, this code serves as a simple and clear example of how to work with asynchronous operations using Promises, which is a fundamental concept in modern JavaScript programming.
