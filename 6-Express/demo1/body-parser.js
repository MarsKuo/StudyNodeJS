var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//固定的，不能打錯
var engine = require('ejs-locals');
app.engine('ejs', engine)
app.set('views', './Views');
app.set('view engine', 'ejs')
//固定的，不能打錯


//增加靜態檔案的路徑
app.use(express.static('public'))

//曾加body的解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}))




app.get('/search', function (req, res) {
  res.render('search', { 'title': '<h2>六角學院</h2>' ,'boss':'Kuo','course':['html','js','bs']});
})

app.post('/searchList',function(req,res){
  console.log(req.body);
  //server需要回應，不然前端會一值轉
  res.redirect('search');
})

app.post('/searchAJAX',function(req,res){
  console.log(req.body)
  res.send('hello');
})
//監聽port

var port = process.env.PORT || 3000;
app.listen(port);