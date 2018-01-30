var express = require('express');
var app = express();
//console.log(app);


app.get('/',function(req,res){
  res.send('<html><body><h1>23123456saasd</h1></body></html>')
})

app.get('/user/:name/:date',function(req,res){
  var myName = req;
  console.log(myName);

  // res.send('<html><body><h1>bbbbb</h1></body></html>')
})

app.get('/user/one',function(req,res){
  res.send('<html><body><h1>ccccc</h1></body></html>')
})

//監聽port

//var port = process.env.PORT || 3000;
var port =3000;
app.listen(port);