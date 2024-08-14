# Post Management API

This project is a simple Node.js and Express-based API that allows users to manage a collection of posts. The API supports creating, reading, updating, and deleting posts.

## Project Structure

- **postControllers.js**: Contains the controller functions that handle the logic for the CRUD operations on posts.
- **posts.js**: Defines the routes for the API and connects them to the corresponding controller functions.
- **server.js**: Sets up the Express server, middleware, and routes.

## API Endpoints

### Get All Posts

- **URL**: `/api/posts`
- **Method**: `GET`
- **Description**: Retrieves all posts. You can limit the number of posts returned by using the `limit` query parameter.

### Get a Single Post

- **URL**: `/api/posts/:id`
- **Method**: `GET`
- **Description**: Retrieves a single post by its ID.

### Create a New Post

- **URL**: `/api/posts`
- **Method**: `POST`
- **Description**: Creates a new post. The request body should contain a JSON object with a `title` field.

### Update a Post

- **URL**: `/api/posts/:id`
- **Method**: `PUT`
- **Description**: Updates an existing post by its ID. The request body should contain the updated `id` and `title` fields.

### Delete a Post

- **URL**: `/api/posts/:id`
- **Method**: `DELETE`
- **Description**: Deletes a post by its ID.
