var express = require('express');
var app = express();
//console.log(app);



//路由，類似守門員，必須要有next才會去下一層
app.use(function (req, res, next) {
  console.log('有人進來了')
  //kk();
  next();
})


// 直接塞入middle，增加守門員
var login = function (req, res, next) {
  console.log('你是登入狀態2');
  next()
}
app.get('/', login, function(req, res){
  res.send('<html><body><h1>AAAAAA</h1></body></html>');
})
// 直接塞入middle

//常用的middleware
app.use(function (req, res, next) {
  res.status(404).send('抱歉，您的頁面找不到');

})
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('程式有點問題，請稍後嘗試')
})


// app.use(function(req,res,next){
//   console.log('已經是登入狀態')
// })

app.use(function (req, res, next) {
  console.log('已經是登入狀態')
  next();
})



app.get('/', function (req, res) {
  res.send('<html><body><h1>AAAAAA</h1></body></html>')
})





//監聽port

//var port = process.env.PORT || 3000;
var port = 3000;
app.listen(port);