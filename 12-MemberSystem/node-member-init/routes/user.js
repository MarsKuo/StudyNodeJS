var express = require('express');
var router = express.Router();
var firebaseDb = require('../Connections/firebase_admin');

router.get('/', function (req, res) {

    console.log(req.session.uid);
    // console.log('aaaa');
    // res.render('user', { title: '會員專區', nickname: '暱稱'});
    firebaseDb.ref('user/' + req.session.uid).once('value',
        function (snapshot) {
            console.log(snapshot.val());
            res.render('user', { title: '會員專區', nickname: snapshot.val().nickname });
            // res.render('user', { title: '會員專區', nickname: '暱稱'});
        })

})
module.exports = router; 