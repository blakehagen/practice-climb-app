var express    = require('express');
var bodyParser = require('body-parser');
var cors       = require('cors');
var mongoose   = require('mongoose');
var port       = 3000;

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

// DATABASE //
var mongoUri = 'mongodb://admin:admin@ds053148.mlab.com:53148/climb-app';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
  console.log('Connection to mongoDB successful!!');
});

// MONGOOSE //
var User = require('./server/user.server.model');

// ROUTES //
app.get('/api/test', function (req, res) {
  res.status(200).json('I AM ALIVE!');
});

app.post('/api/user', function (req, res) {
  console.log('req.body=======> ', req.body);
  var user = new User(req.body);
  user.save(function (err, user) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(user);
    }
  })
});

app.get('/api/users', function (req, res) {
  User.find().exec(function (err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(response);
    }
  })
});

app.get('/api/users/:id', function (req, res) {
  User.findById(req.params.id).exec(function (err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(response);
    }
  })
});


app.listen(port, function () {
  console.log('listening on port ', port);
});