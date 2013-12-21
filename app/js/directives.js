'use strict';

/* Directives */


myApp.directive('appVersion', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
});
