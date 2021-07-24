
var path = require('path');
var qs = require('querystring');

var async = require('async');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var moment = require('moment');
var request = require('request');
var fs = require('fs');
var timer = require('moment-timer');

var AWS = require('aws-sdk');
var s3  = new AWS.S3();

process.env.AWS_ACCESS_KEY_ID     = 'AKIAJOCPSMABDI3KRLMQ';
process.env.AWS_SECRET_ACCESS_KEY = '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';
process.env.AWS_REGION            = 'us-east-1';

AWS.config.update({
    accessKeyId: "AKIAJOCPSMABDI3KRLMQ",
    secretAccessKey: "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"
  });


/*
|--------------------------------------------------------------------------
| APP
|--------------------------------------------------------------------------
*/
var app = express();

app.set('host', process.env.NODE_IP || 'localhost');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  next()
});


var fftry = function () {

for (var i = 1; i < 3601; i++) {
var filePath = "telecut/" + i + ".png";
var params = {
  Bucket: 'bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c/public/tele',
  Body : fs.createReadStream(filePath),
  Key : i + ".png"
};
s3.upload(params, function (err, data) {
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});
}


  var timer = moment.duration(3, "minutes").timer(function() {
  console.log('timer');
  process.exit() 
})






}
fftry()










/*
 |--------------------------------------------------------------------------
 | Start the Serverr
 |--------------------------------------------------------------------------
 */
app.listen(process.env.PORT || 3001)
