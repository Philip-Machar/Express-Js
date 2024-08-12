import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: 'one'},
    {id: 2, title: 'two'},
    {id: 3, title: 'three'}
];

//Get all posts
router.get('/', (req, res, next) => {
    let limit = parseInt(req.query.limit);
    if (!isNaN(limit) & limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    } 

    res.status(200).json(posts);
});

//Get a single post
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id === id);

    if (!post){
        const error = new Error(`The post with id: ${id} was not found!`);
        error.status = 404;
        return next(error)
    } 

    res.status(200).json(post);
});

//Create new post
router.post('/', (req, res, next) => {
    const new_post = req.body;

    if(!new_post.title){
        const error = new Error('please include title');
        error.status = 400;
        return next(error);
    } 

    posts.push(new_post);
    res.status(201).json(posts);
});

//Update existing post
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id === id);

    if (!post){
        const error = new Error(`The post with id: ${id} was not found!`);
        error.status = 400;
        return next(error);
    }

    post.id = req.body.id;
    post.title = req.body.title;
    res.status(200).json(posts);
});

//Delete a post
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`The post with id: ${id} was not found!`);
        error.status = 404;
        return next(error);
    } 
    
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

export default router;

