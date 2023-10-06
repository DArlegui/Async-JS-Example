self.addEventListener('message', (event) => {
  const messageFromMainThread = event.data;

  // Simulate an asynchronous task
  setTimeout(() => {
    const result = messageFromMainThread + ' - Task completed!';

    // Send the result back to the main thread
    self.postMessage(result);
  }, 2000); // Simulate a 2-second delay
});
