var express = require('express');
var app = express();

var user = require('./routes/user')

app.use('/user', user)

var port = 3000;
app.listen(port);