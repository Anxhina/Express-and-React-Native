const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const multer = require('multer');
const bcrypt = require('bcryptjs');


// Register
router.post('/register', (req, res) => {

  const { email, password } = req.body;
  let errors = [];

  if (!email || !password) {
    errors.push({ msg: 'Please fill in all fields' });
  }
  if (errors.length > 0) {
    errors,
      console.log(errors);
    email,
      password
  } else {
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          errors.push({ msg: 'Email is alredy registered' });
          errors,
            email,
            password
        } else {
          const newUser = new User({
            email,
            password
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  return res.json({ success: true, msg: 'User Regist' });
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
  }
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;


  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });
});
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({ user: req.user });
});

router.get('/users', passport.authenticate('jwt', { session: false }), function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.send('Something went really wrong!');
      next();
    }
    res.json(users);
  });
})

router.use('/post', require('./post'));

module.exports = router;
