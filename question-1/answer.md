1) Node.js Internals Theory

Node.js Architecture:
    Node.js is a runtime that allows JavaScript to run outside the browser. It is mainly used to build server side applications. Node.js uses a single main thread but it can handle many requests at the same time by using asynchronous operations. It does not wait for one task to finish before starting another. This makes Node.js fast and efficient.

JavaScript Engine V8:
    V8 is the JavaScript engine developed by Google. It is used by Node.js to execute JavaScript code. V8 converts JavaScript into machine code so it runs very fast. V8 only understands JavaScript. It does not handle files, networking, or timers. These are handled by Node.js.

Node.js Core APIs:
    Node.js provides built in modules called core APIs. These APIs help JavaScript interact with the operating system. Examples include file system, HTTP, path, events, and crypto. Using these APIs we can read files, create servers, and handle requests. Internally many core APIs use C or C plus plus code for better performance.

Native Bindings:
    Native bindings connect JavaScript code with low level system code written in C or C plus plus. When JavaScript uses a core API, native bindings pass the request to libuv or the operating system. This helps Node.js perform system level tasks efficiently.

Event Loop:
    The event loop is the main working mechanism of Node.js. It continuously checks for completed tasks and executes their callbacks. Node.js does not block while waiting for slow operations. Instead it registers a callback and continues executing other code. When the operation is finished, the callback is pushed to the event loop.

2) libuv:
    libuv is a library written in C language. Node.js uses it to handle asynchronous operations and system tasks.

Why Node.js needs libuv:
    JavaScript cannot directly interact with the operating system. libuv handles file operations, networking, timers, and background tasks. It allows Node.js to work in a non blocking way across different operating systems.

Responsibilities of libuv:
    It manages the event loop.
    It handles asynchronous input and output operations.
    It manages the thread pool.
    It handles timers and network operations.

3) Thread Pool:
    A thread pool is a group of background threads used to perform slow or blocking operations. Node.js uses a thread pool managed by libuv.

Why Node.js uses a thread pool:
    Some tasks cannot be handled asynchronously by the operating system. If these tasks run on the main thread, the event loop will get blocked. The thread pool runs these tasks in the background and keeps the main thread free.

Operations handled by the thread pool:
    File system operations.
    Cryptography operations.
    Compression tasks.
    DNS lookups.

4) Worker Threads:
    Worker threads allow JavaScript code to run in separate threads. Each worker thread has its own event loop and memory.

Why worker threads are needed:
    Heavy calculations can block the main thread. Worker threads allow CPU intensive tasks to run in parallel. This improves performance and keeps the application responsive.

Difference between thread pool and worker threads:
    The thread pool is used for system level tasks.
    Worker threads are used to execute JavaScript code.
    Thread pool threads are managed automatically.
    Worker threads are controlled by the developer.

5) Event Loop Queues:

Macro Task Queue:
    The macro task queue contains tasks that are scheduled to run later. Examples include timers, file input output callbacks, and network callbacks.

Micro Task Queue:
    The micro task queue contains high priority tasks. These tasks are executed immediately after the current JavaScript code finishes. Examples include promise callbacks and next tick functions.

Execution Priority:
    First the current JavaScript code runs.
    Then micro tasks are executed.
    After that macro tasks are executed.
    Micro tasks always run before macro tasks.