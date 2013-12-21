'use strict';

/* Controllers */

myApp.controller('MyCtrl1', function ($scope, $log, $routeParams) {
    $log.debug('Route Params', $routeParams);
});

myApp.controller('MyCtrl2', function ($scope, $log, $routeParams) {
    $log = $log.getInstance('MyCtrl2');
    $log.log('Route Params', $routeParams);
});