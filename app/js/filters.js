'use strict';

/* Filters */

myApp.filter('interpolate', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
 });
