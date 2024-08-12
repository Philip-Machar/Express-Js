import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import error from './middleware/error.js'
import notFound from './middleware/notFound.js'

const app = express();

//Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Logger middleware
app.use(logger);

//set up static folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/posts', posts);

//Error handler middleware
app.use(notFound);
app.use(error);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running at port ${port}...`));

