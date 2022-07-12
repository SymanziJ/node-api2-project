// implement your posts router here
const express = require('express');

const Post = require('./posts-model');

const router = express.Router();

router.get('/', (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving the posts'})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Post.findById(id)
        .then(post => {
            if (post) {
                res.status(200).json(post);
                return;
            }            
            res.status(404).json({ message: 'Post does not exist'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error retrieving the post'});
        })
})


module.exports = router;