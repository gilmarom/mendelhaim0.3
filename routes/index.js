var express = require('express');
const app = express();
var indexRouter = express.Router();

var user = require('../models/user.model.js');


const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');


indexRouter.get('/', function(req, res, next){
    res.render('index.html');
});

indexRouter.post('/register', ctrlUser.register);
indexRouter.post('/authenticate', ctrlUser.authenticate);
indexRouter.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
console.log(ctrlUser.userProfile.prototype)

module.exports = indexRouter;


