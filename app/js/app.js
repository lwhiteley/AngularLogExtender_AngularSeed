'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngRoute', 'log.extension.uo']);


myApp.config([ 'logExProvider', function(logExProvider) {

    logExProvider.enableLogging(true);

    logExProvider.restrictLogMethods(['log', 'info']);

    logExProvider.overrideLogPrefix(function (className) {

        var $injector = angular.injector([ 'ng' ]);
        var $filter = $injector.get( '$filter' );

        var formatMessage = "";
        var separator = " >> ";
        var format = "MMMM-dd-yyyy-h:mm:ssa";
        var now = $filter('date')(new Date(), format);
        return "" + now + (className === null ? "" : "::" + className) + separator;
    });

}]);


myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
