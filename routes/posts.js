import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: 'one'},
    {id: 2, title: 'two'},
    {id: 3, title: 'three'}
];

//Get all posts
router.get('/', (req, res) => {
    let limit = parseInt(req.query.limit);
    if (!isNaN(limit) & limit > 0){
        res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
});

//Get a single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id === id);

    if (!post){
        res.status(404).json({msg: `The post with id: ${id} was not found!`});
    } else {
        res.status(200).json(post);
    }
});

//Create new post
router.post('/', (req, res) => {
    const new_post = req.body;

    if(!new_post.title){
        res.status(400).json({msg: 'please include title'});
    } else {
        posts.push(new_post);
    }
    
    res.status(201).json(posts);
});

//Create new post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id === id);

    if (!post){
        res.status(404).json({msg: `The post with id: ${id} was not found!`});
    } else {
        post.id = req.body.id;
        post.title = req.body.title;
    }

    res.status(200).json(posts);
});

//Delete a post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id === id);

    if(!post){
        res.status(404).json({msg: `The post with id: ${id} was not found!`});
    } else {
        posts = posts.filter((post) => post.id !== id);
    }

    res.status(200).json(posts);
});

export default router;

