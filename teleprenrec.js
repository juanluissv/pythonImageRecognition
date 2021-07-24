
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

var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();


//teleprensa noticias 

var spawn = require('child_process').spawn;

var cmd = 'ffmpeg';

var args = [
    '-y', 
    '-i', 'https://5d32e2b9b7eed.streamlock.net:4443/tv33sv/live/playlist.m3u8 ',
    '-t', '01:00:00',
    '-c', 'copy',
    '-preset', 'ultrafast -threads 0',
    '-f', 'mp4', 'telecut/record3.mp4'
];



var proc = spawn(cmd, args);

proc.stdout.on('data', function(data) {
    console.log(data);
});

proc.stderr.on('data', function(data) {
    console.log(data);
});

proc.on('close', function() {
console.log('finished');


var filePath = "telecut/record3.mp4";
var params = {
  Bucket: 'bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c/public',
  Body : fs.createReadStream(filePath),
  Key : "record2.mp4"
};
s3.upload(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  }
  if (data) {
    console.log("Uploaded in:", data.Location);
    process.exit()

  }
});


});



/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(process.env.PORT || 3002)
