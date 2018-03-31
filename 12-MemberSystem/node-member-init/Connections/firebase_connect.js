var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyC3yGQXgw93vpNVOn9r9ohaFQ3Z461sVbc",
  authDomain: "project-ed7f0.firebaseapp.com",
  databaseURL: "https://project-ed7f0.firebaseio.com",
  projectId: "project-ed7f0",
  storageBucket: "project-ed7f0.appspot.com",
  messagingSenderId: "334795583792"
};
firebase.initializeApp(config);


module.exports = firebase;