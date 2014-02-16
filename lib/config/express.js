'use strict';

var express = require('express'),
    path = require('path');

module.exports = function(app) {
  var rootPath = path.normalize(__dirname + '/../..');
  var logex = path.dirname(rootPath);
  app.configure('development', function(){

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
      }
      next();
    });

    app.use('dist', express.static(path.join(logex, 'dist')));
    app.use(express.static(path.join(rootPath, 'app')));
    app.use(express.errorHandler());
    app.set('views', rootPath + '/app/');
  });

  app.configure(function(){
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    // Router needs to be last
    app.use(app.router);
  });
};