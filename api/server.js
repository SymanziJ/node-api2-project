// implement your server here
// require your posts router and connect it here

const express = require('express');

const server = express();

server.use(express.json());

const postsRouter = require('./posts/posts-router');

//const Post = require('./posts/posts-model');

server.use('/api/posts', postsRouter);



module.exports = server;