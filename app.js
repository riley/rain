var request = require('request'),
    async = require('async'),
    _ = require('underscore'),
    strftime = require('strftime'),
    mongo, = require('mongojs'),
    express = require('express'),
    app = express();

var keys = "b9e733c41dc96767,3a7a1238d9b52733,ae0fc84d7bff8b51".split(','),
    db = mongojs('rain'),
    hourly = db.collection('hourly');

function getWeather() {
    request({
        url: "http://api.wunderground.com/api/" + keys[0] + "/hourly/q/NY/New_York.json",
        json: true
    }, function (err, resp, json) {
        
    });
}

