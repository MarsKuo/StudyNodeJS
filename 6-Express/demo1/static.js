var express =require('express');
var app = express();
//增加靜態檔案的路徑
app.use(express.static('public'))


app.get('/',function(req,res){
  res.send('<html><head></head><body><img src="/images/logo.png"></body></html>')
})

//監聽port

var port = process.env.PORT || 3000;
app.listen(port);