const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Post = require('../models/post');
const multer = require('multer');
const bcrypt = require('bcryptjs');


// Post
router.post('/', (req, res) => {

    const { title, photo, desc, adr } = req.body;
    let errors = [];
    const newPost = new Post({
        title,
        photo,
        desc
        // createdBy
    });
    newPost
        .save()
        .then(post => {
            return res.json({ success: true, msg: 'Post done' });
        })
        .catch(err => console.log(err));
    console.log(newPost)
});

module.exports = router;
