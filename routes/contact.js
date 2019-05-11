var express = require('express');
const app = express();
var contactRouter = express.Router();
var Contact = require('../models/contact.model.js');




/* SAVE NEWS */
contactRouter.route('/send').post(function (req, res) {
   let contact= new Contact(req.body);
   console.log('sucees is me', contact);
   contact.save()
    .then(contact => {
      res.status(200).json({'donation': 'item in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


module.exports = contactRouter;