'use strict';

var async = require('async');

exports.frontendLogger = function(req, res) {
   console.log("ng logs: ", req.body);
};
