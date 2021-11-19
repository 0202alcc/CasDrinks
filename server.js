var express = require('express');
var app = express();

// Mapping the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res) {
 res.render(__dirname + '/home.html');
})

app.get('/payment', function(req,res) {
    res.render(__dirname + '/payment.html');
   })
app.listen(8080);
console.log('Express App is running on port 8080...');
