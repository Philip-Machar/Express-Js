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

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running at port ${port}...`));
