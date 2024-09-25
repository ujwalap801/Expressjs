### Route Parameters (`req.params`)

In Express.js, route parameters are named segments of a route that can capture values from the URL. You can access these values using the `req.params` object within your route handlers. This feature allows you to create dynamic routes that can respond to different inputs.

#### Accessing Route Parameters

When defining a route, you can specify parameters by prefixing a segment of the URL with a colon (`:`). For example, in the route `/users/:id`, `:id` is a route parameter that can match any value.

#### Code Example:
```javascript
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route for GET request to /users/:id
app.get('/users/:id', (req, res) => {
    const userId = req.params.id; // Accessing the route parameter
    res.send(`User ID: ${userId}`); // Sending the user ID in the response
});

// Route for GET request to /posts/:postId/comments/:commentId
app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const { postId, commentId } = req.params; // Destructuring parameters
    res.send(`Post ID: ${postId}, Comment ID: ${commentId}`);
});

// Start server and listen for requests
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

