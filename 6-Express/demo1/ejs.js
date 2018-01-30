var express = require('express');
var app = express();
//增加靜態檔案的路徑
app.use(express.static('public'))

//固定的，不能打錯
var engine = require('ejs-locals');
app.engine('ejs', engine)
app.set('views', './Views');
app.set('view engine', 'ejs')
//固定的，不能打錯



app.get('/', function (req, res) {
  res.render('Lindex', { 'title': '<h2>六角學院</h2>' ,'boss':'Kuo','course':['html','js','bs']});
})

app.get('/user', function (req, res) {
  res.render('user');
})


//監聽port

var port = process.env.PORT || 3000;
app.listen(port);