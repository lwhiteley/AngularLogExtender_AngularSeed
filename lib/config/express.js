'use strict';

var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    path = require('path');

module.exports = function(app) {
  var rootPath = path.normalize(__dirname + '/../..');
  var logex = path.dirname(rootPath);
  console.log(logex, rootPath)

  // if(process.env.NODE_ENV === 'development'){
    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
      }
      next();
    });

    app.use('/dist/', express.static(path.join(logex, 'dist')));
    //app.use('dist', express.static(path.join(logex, '/dist')));
    app.use(express.static(path.join(rootPath, 'app')));
    // app.set('views', rootPath + '/app/');
  // }

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
        extended: true
    }));
  app.use(methodOverride());

  app.use(errorHandler());

  // Router needs to be last
  // app.use(app.router);

};
