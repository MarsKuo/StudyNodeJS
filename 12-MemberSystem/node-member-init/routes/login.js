var express = require('express');
var firebase = require('../Connections/firebase_connect');
var firebaseDb = require('../Connections/firebase_admin');
var fireAuth = firebase.auth();

var router = express.Router();
router.get('/', function (req, res) {
    res.render('login', { title: '登入' });
})
router.post('/', function (req, res) {

console.log(req.body.email);
console.log(req.body.passwd);

    fireAuth.signInWithEmailAndPassword(req.body.email, req.body.passwd)
    .then(function(user){
        console.log('登入成功');
        req.session.uid = user.uid;
        res.redirect('/');
    })
    .catch(function(error){
        // console.log(error)
        console.log('登入失敗');
        res.redirect('/');
    })
    
})
module.exports = router;