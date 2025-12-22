// THREADS:

// Usually javascript is a single thread language.
// It runs on single main thread to run exceution. 
// This means it can only exceute 1 operation at a time using a single call stack.
// This design was originally intended for simple web browser scripting. 
// Allowing a single thread to handle both Javascript execution and UI rendering(DOM manipulation). 
// If a single threadedapplication a long running CPU intesive tasks such a complex calculation, 
// It blocks the main thread making the web page orserve unresponsive until the task is completed.


// TO ACHIEVE MULTI-THREADING:

// To overcome the limitation of single threaded model, 
// modern Javascript environment offers APIs that allow developers to off-load tasks to separate parallel threads.

// WEB WORKERS:

// Web workers are browser API that allow you to run Javascript in a background thread, separate from the main execution thread


// USED CASE:

// Ideal for performing heavy computations: such as image procession, large data calculations or complex algorithms.


// COMMUNICATION:

// Workers can access the DOM directly. 
// The communication between the main thread and the worker happen 
// via Asycnhronoize message passing using postMessage() method and onmessage event handler.


// ISOLATION:

// Data is copied via the structured clone algorithm when send between threads.
// No concurrency problem with shared memory. Transferable objects can be used for performance optimization