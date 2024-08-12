let posts = [
    {id: 1, title: 'one'},
    {id: 2, title: 'two'},
    {id: 3, title: 'three'}
];

//@desc - get all posts
//@route - GET /api/posts/

export const getPosts = ('/', (req, res, next) => {
    let limit = parseInt(req.query.limit);
    if (!isNaN(limit) & limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    } 

    res.status(200).json(posts);
});


//@desc - get a single post
//@route - GET /api/posts/:id

export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id === id);

    if (!post){
        const error = new Error(`The post with id: ${id} was not found!`);
        error.status = 404;
        return next(error)
    } 

    res.status(200).json(post);
}

//@desc - create new post
//@route - POST /api/posts/

export const createPost = (req, res, next) => {
    const new_post = req.body;

    if(!new_post.title){
        const error = new Error('please include title');
        error.status = 400;
        return next(error);
    } 

    posts.push(new_post);
    res.status(201).json(posts);
}

//@desc - update post
//@route - PUT /api/posts/:id

export const updatePost = (req, res, next) => {
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
}

//@desc - delete post
//@route - DELETE /api/posts/:id

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`The post with id: ${id} was not found!`);
        error.status = 404;
        return next(error);
    } 

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}
