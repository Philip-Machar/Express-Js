const express = require('express');
const path = require('path');

const app = express();

//set up static folder
//app.use(express.static(path.join(__dirname, 'public')));

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
});
*/

let posts = [
    {id: 1, title: 'one'},
    {id: 2, title: 'two'},
    {id: 3, title: 'three'}
];

//Get all posts
app.get('/api/posts', (req, res) => {
    let limit = parseInt(req.query.limit);
    if (!isNaN(limit) & limit > 0){
        res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
});

//Get a single post
app.get('/api/post/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running at port ${port}...`));
