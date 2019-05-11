var express = require('express');
const app = express();
var donationRouter = express.Router();
var Donation = require('../models/donation.model.js');




/* SAVE NEWS */
donationRouter.route('/add').post(function (req, res) {
   console.log(Date.now());
 
   let donation = new Donation(req.body);
   
   console.log('sucees is me', donation);
   donation.save()
    .then(donation => {
      res.status(200).json({'donation': 'item in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


module.exports = donationRouter;