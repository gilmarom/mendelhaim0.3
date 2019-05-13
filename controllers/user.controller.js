const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const User = mongoose.model('User');
    //this will give auto lab_id//
let data = Number;
const x =  User.aggregate([{ $group: { _id: "", max: { $max: "$labId" } } }]);
    x.exec(function (err, docs) {
     // called when the `query.complete` or `query.error` are called
     // internally
      if (err)
           res.status(422).send(['Duplicate email adrress found.']);
      else
           console.log(docs);
           return data = docs[0]['max'];
      });
module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.labName = req.body.labName;
    // User.aggregate([{ $group: { _id: "", total: { $max: "$labId" } } }]);//
       //this will give auto lab_id//
   
      user.labId = data + 1;
      //db.users.aggregate([{ $group: { _id: "", total: { $max: "$labId" } } }]);//
      user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                req.session.user = user;
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email','labName','labId']) });
        }
    );
}