var Vue = require('vue');
var Router = require('director').Router;
var app = new Vue(require('./app.vue'));

var play = function () { app.view = 'play-view'; };
var newActivity = function () { console.log('new-activity-view'); };
var newTreat = function () { console.log('new-treat-view'); };
var settings = function () { console.log("settings"); };

var routes = {
    '/': play,
    '/new-activity': newActivity,
    '/new-treat': newTreat,
    '/settings': settings
};

var router = Router(routes);

router.configure({
    notfound: function () {
        router.setRoute('/');
    }
});

router.init('/');
