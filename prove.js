const express = require('express')
var app = express()
var getRate = require('./getRates')

app.set('port', process.env.PORT || 5000)
  .use(express.static(__dirname + "/public"))
  .set('views', __dirname + "/views")
  .set('view engine', 'ejs')
  // calculate the rate
  .get('/calculate', getRate.handleRate)
  // send to postal form
  .get('/', function(req, res) {
    res.sendFile('postal.html', {root: __dirname + "/public"});
  })
  .listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'));
  });