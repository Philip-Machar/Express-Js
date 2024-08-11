import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set up static folder
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running at port ${port}...`));

