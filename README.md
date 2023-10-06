# Bay Valley Tech Module 3: Asynchronous JavaScript Example(s)

Here are some examples of all my practices of asynchronous JavaScript. Enjoy!

## Part 1 - Pyramid of Doom (Callback Hell)

[Live Demo](https://kaleidoscopic-youtiao-c931d5.netlify.app/)

This code showcases callback hell, a situation where nested callback functions become challenging to manage and read. In this example, a button element (`btn`) is repeatedly moved to the right by 300 pixels with a 1000ms delay.

- Each success callback triggers the next `moveX` call, creating deeply nested code.
- If the button reaches the screen boundary, a failure callback displays "CANNOT MOVE FURTHER!".
- The final success callback displays "YOU HAVE A WIDE SCREEN!".

Callback hell arises due to the pyramid-shaped structure of nested callbacks, making the code hard to maintain and understand. It's a prime example of the need for cleaner async code structures like Promises or async/await to avoid such complexities.

## Part 2 - Using Promises in JavaScript.

[Live Demo](https://aquamarine-kashata-2b241d.netlify.app/)

- Here we are simulating an asynchronous operation with a setTimeout inside the makeDogPromise function. Asynchronous operations are common in JavaScript, especially when dealing with tasks like network requests, file I/O, or waiting for user interactions.

- We use Promises to handle the asynchronous operation. Promises are a clean and effective way to work with asynchronous code. They allow you to handle success (using .then()) and errors (using .catch()) in a structured manner.

- Here we handle the two possible outcomes of the Promise: resolving with 'Yay we got a dog!' & rejecting with ':( No dog'. This demonstrates how Promises can handle both successful and unsuccessful outcomes of asynchronous operations.

- Overall, this code serves as a simple and clear example of how to work with asynchronous operations using Promises, which is a fundamental concept in modern JavaScript programming.

## Part 3 - Implementing a Promise Based API

[Live Demo](https://quiet-clafoutis-163976.netlify.app/)

In this HTML and JavaScript code:

- We have an HTML button element with the id "fetchButton" and a div element with the id "result" where we'll display the result of the Promise-based API call.

- We use JavaScript to get references to these HTML elements using getElementById.

- We attach a click event listener to the "fetchButton" using addEventListener. When the button is clicked, the fetchData function is called.

- The result of the API call is displayed in the "result" div element. If the operation succeeds, the result message is shown; if it fails, the error message is displayed.

Now, when you click the "Fetch Data" button, it triggers the Promise-based API, and the result is displayed on the web page.

## Part 4 - Worker

[Live Demo](https://creative-cucurucho-cd8bff.netlify.app/)

In this example:

- We've added an HTML button with the id "startButton" and a div element with the id "result" to display the result.

- We use JavaScript to get references to these HTML elements using getElementById.

- We attach a click event listener to the "startButton." When the button is clicked, it triggers the Web Worker to start processing. We also update the "result" element's content to indicate that processing is in progress.

- When the Web Worker completes its task and sends the result back to the main thread, we update the "result" element's content to display the result.

Now, when you click the "Start Processing" button, it initiates the Web Worker, and the result is displayed on the web page. This demonstrates how to use Web Workers for asynchronous processing while keeping the user interface responsive.
