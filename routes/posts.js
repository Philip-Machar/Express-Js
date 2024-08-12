import {
    getPosts, 
    getPost, 
    createPost, 
    updatePost, 
    deletePost
} from '../controllers/postControllers.js';
import express from 'express';
const router = express.Router();

//Get all posts
router.get('/', getPosts);

//Get a single post
router.get('/:id', getPost);

//Create new post
router.post('/', createPost);

//Update existing post
router.put('/:id', updatePost);

//Delete a post
router.delete('/:id', deletePost);

export default router;

