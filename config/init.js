var path = require("path");
var express = require("express");

module.exports = function(app) {
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(app.dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('stylus').middleware(path.join(app.dirname, 'public')));
    app.use(express.static(path.join(app.dirname, 'public')));

    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }
};