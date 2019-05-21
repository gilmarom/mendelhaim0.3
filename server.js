
//require('./config/config');
//require('./models/db');
//require('./config/passportConfig');
const express = require('express');
const path = require('path');
const http = require('http');//.Server(app);
const crypto = require('crypto');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

// saving video files//
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const rtsIndex = require('./routes/index');
//const donate = require('./routes/donation');
const about = require('./routes/about');
//const contactRoute = require('./routes/contact');
//const donationRoute = require('./routes/donation'); 
//const dashboardRoute = require('./routes/dashboard');

const mongoose = require('mongoose');
const cors = require('cors');
var session = require('express-session');
var passport = require('passport');

//config = require('./DB');
 
//mongoose.Promise = require('bluebird');
//mongoose.connect(config.DB, { promiseLibrary: require('bluebird')})
 //.then((res) => console.log('connection succesful')).catch((err) => console.error(err));
//var db = mongoose.connection;
let gfs;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'html'); 
 
app.use(cookieParser());


// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(session({secret:'app12123e', resave:false,saveUninitialized:true}));
// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());
app.use(passport.session());
// [SH] Bring in the data model
//require('./models/db');



//var routesApi = require('./routes/users');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));

app.use(express.static(path.join(__dirname, 'dist/client')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/',rtsIndex );
app.use('/about',about );
//app.use('/contact',contactRoute);
//app.use('/donate/:id', donationRoute);
//app.use('/dashboard', dashboardRoute,rtsIndex);






app.use('/',function(req,res){
  res.sendFile(path.join(__dirname,'dist/client','index.html'))
});
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);

});