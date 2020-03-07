const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
//Connection to database


mongoose.connect(config.database);
  mongoose.connection.on('connected', () =>{
      console.log('Connected to database' +config.database)
  })

  mongoose.connection.on('error', () =>{
    console.log('Database error' +err);
})

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const users = require('./routes/users');

const port = 3000;

//Cors Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', require('./routes/users'));

//Index Router
app.get('/', (req, res) => {
res.send('Invadoiel');
})

app.listen(port, () => {
    console.log('Server started on port '+port);
});
