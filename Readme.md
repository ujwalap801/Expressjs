# Library vs Framework

## Library
A **library** is a collection of pre-written code that can be used to perform specific tasks. Libraries provide utility functions, making it easier to achieve common tasks without reinventing the wheel.

### Example:
- **Axios** is a popular JavaScript library used for making HTTP requests from a web browser or Node.js.

In short, **a library is a collection of functions or utilities you use to perform specific tasks**.

## Framework
A **framework** is a set of pre-written code that provides a structure for developing software applications. Frameworks define a foundation for how an application should be built and often handle a lot of the control flow.

### Example:
- **Express** is a popular framework for building web applications in Node.js. It provides a robust routing system, middleware handling, and more, offering a solid foundation for web development.

In short, **a framework provides a broader structure and dictates how you build your application**.




# Express.js

**Express.js** is a minimal and flexible web application framework for **Node.js** that provides a robust set of features for building web and mobile applications. It is widely used to create server-side applications and APIs, making it an essential tool for server-side programming.

## Common Use Cases:
- **Building REST APIs**
- **Creating web applications** with backend logic
- **Handling HTTP requests and responses**
- **Integrating with databases** to serve dynamic content



# Express.js Example

This is a simple example of an Express.js application that listens for incoming requests, parses them, matches responses with routes, and sends the appropriate response.

## Uses o Expressjs:
1. **Listen for Incoming Requests**
2. **Parse the Request** (e.g., body data for POST requests)
3. **Match the Request with Routes**
4. **Send the Response**

### Code Example:
```javascript
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route for GET request to root
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route for POST request with JSON body
app.post('/data', (req, res) => {
    const receivedData = req.body; // Parsing the request body
    res.json({ message: "Data received", data: receivedData });
});

// Start server and listen for requests
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


### Explanation:

- **Middleware**: The `app.use(express.json())` middleware parses incoming JSON request bodies.
- **GET Route**: Responds with a simple "Hello, World!" message when a GET request is made to the root (`/`).
- **POST Route**: Accepts a JSON body, parses it, and responds with the received data.
- **Server**: The server listens on port 3000 and logs a message when it's running.


### Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client


### Example of Middleware Using `app.use()`

The `app.use()` method can be utilized to create custom middleware functions that execute for incoming requests. Below is an example that logs a message for every incoming request.

#### Code Example:
```javascript
const express = require('express');
const app = express();

// Custom middleware to log incoming requests
app.use((req, res, next) => {
    console.log("Incoming request");
    next(); // Call the next middleware or route handler
});

// Route for GET request to root
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server and listen for requests
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


### Sending a Response Using Request and Response Objects

In Express.js, you can send responses to client requests using the `res` (response) object provided in your route handlers.


In Express.js, you can send various types of responses using the response object (`res`). This can include strings, objects, and arrays.

## Nodemon
To automatically restart sever with code changes 
npm install -g nodemon 
nodemon index.js