### Routing in Express.js

Routing refers to how an application responds to client requests to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.). In Express.js, you can define routes to handle different HTTP methods and endpoints, allowing you to create a structured application. It is processing of selecting a path  for traffic in a network or between or across multiple networks

#### Defining Routes

You can define routes using `app.get()`, `app.post()`, `app.put()`, `app.delete()`, and other methods provided by Express. Here’s a brief overview of each method:

- **GET**: Retrieve data from the server (e.g., `app.get('/path', callback)`).
- **POST**: Send data to the server (e.g., `app.post('/path', callback)`).
- **PUT**: Update existing data on the server (e.g., `app.put('/path', callback)`).
- **DELETE**: Remove data from the server (e.g., `app.delete('/path', callback)`).

#### Code Example:
```javascript
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route for GET request to the root
app.get('/', (req, res) => {
    res.send('Welcome to the Express Routing Example!');
});

// Route for GET request to /about
app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

// Route for POST request to /submit
app.post('/submit', (req, res) => {
    const { name, age } = req.body; // Accessing data from request body
    res.send(`Received submission: Name - ${name}, Age - ${age}`);
});

// Route for handling 404 errors
app.use((req, res) => {
    res.status(404).send('404 Not Found'); // Sending a 404 error response
});

// Start server and listen for requests
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
