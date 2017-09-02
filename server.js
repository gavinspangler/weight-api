var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./api/models/weightModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://spanglgj:Nivag713@ds161823.mlab.com:61823/weight', {
  useMongoClient: true
});


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var routes = require('./api/routes/weightRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

app.listen(port);

console.log('weight RESTful API server started on: ' + port);
