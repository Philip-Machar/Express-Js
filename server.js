import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import error from './middleware/error.js'

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Logger middleware
app.use(logger);

//set up static folder
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts);

//Error handler middleware
app.use(error);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running at port ${port}...`));

