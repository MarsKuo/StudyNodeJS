var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
router.get('/', function(req, res) {
    res.render('contact');
});
router.get('/review', function(req, res) {
    res.render('contactReview');
});
router.post('/post', function(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user:'ts245777@gmail.com',
            pass:'Mars&Sally=1007'
        }
    })

    var mailOptions = {
        from: '"六腳學院"<ts245777@gmail.com>',
        to: "talent.seek@msa.hinet.net",
        subject: req.body.username + '寄了一封信',
        text: req.body.description

    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
           return console.log(error);
        }
        else{
            res.redirect('review')
        }
        
    })

    res.redirect('/contact/review');
});
module.exports = router;
