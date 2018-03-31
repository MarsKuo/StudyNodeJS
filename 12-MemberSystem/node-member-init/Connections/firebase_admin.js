var admin = require("firebase-admin");

var serviceAccount = require("../project-ed7f0-firebase-adminsdk-wp3k3-a0d04cb7ff.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-ed7f0.firebaseio.com"
});


var db = admin.database();
module.exports = db;