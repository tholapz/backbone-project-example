/*global TholapzCom, $*/


window.TholapzCom = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var router = new TholapzCom.Routers.Router;
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    TholapzCom.init();
});
