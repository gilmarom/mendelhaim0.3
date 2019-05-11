const express = require('express');
const app = express();
const dashboardRouter = express.Router();
const dashboard = require('../models/dashboard.model.js');
var User = require('../models/user.model.js');
const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');
 
let DashboardSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email:{type:String},
    phone:{type:String },
    description: { type:String, required:true},
    website: { type:String, required:true },
    university:{type: String}  
    
},{
    collection: 'donation'
});

var dashboardModel = mongoose.model('Dashboard' , DashboardSchema);

/* total amount raised */
dashboardRouter.route('/').get(function (req, res) {

   console.log(req.session.user.email,"hellooooooooooooooooooooooooooooooooooooo");
   dashboardModel.aggregate([{ $group: { _id: "rasing", total: { $sum: "$amount" } } }], function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
      
   console.log(res);
   res.json(data);
});
});


/*  */
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

dashboardRouter.route('/upload').post(function (req, res) {
    console.log('uploading');
    console.log(typeof(req.body));
     
});
module.exports = dashboardRouter;