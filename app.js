const express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send('hello world');
// });

app.use(express.static('.'));

app.listen(3000);