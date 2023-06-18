var express = require('express');
var router = express.Router();

const firebaseInit = require("../Firebase/firebase")
const upload = require("../middleware/upload")


/* GET home page. */
router.get('/', upload.single("icon"),async function(req, res, next) {

req,file.filename

  var db = await firebaseInit;
  console.log(db);

  res.render('index', { title: 'Express' });
});

module.exports = router;
