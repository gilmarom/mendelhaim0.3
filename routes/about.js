var express = require('express');
const app = express();
var about = express.Router();

about.get('/about', function(req, res, next){
   res.render('abuot')
});
module.exports = about;