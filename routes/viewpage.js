var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var jadeParameters = { jadePhrase: req.query['phrase']};
  res.render('whateveryouwant', jadeParameters);
});


module.exports = router;