/*global TholapzCom, Backbone*/

TholapzCom.Routers = TholapzCom.Routers || {};

(function () {
    'use strict';

    TholapzCom.Routers.Router = Backbone.Router.extend({
      routes: {
        '' : 'home',
        ':view': 'defaultRoute'
      },

      initialize: function() {
        this.$content = $("#content");

      },

      home: function() {
        var view = new TholapzCom.Views.Home;
        this.$content.html(view.render().$el);
      },

      defaultRoute: function(viewName) {
        console.log(viewName);
        if (typeof TholapzCom.Views[viewName] === 'undefined') {
          var view = new TholapzCom.Views.Error;
        }else {
          var view = new TholapzCom.Views[viewName];
        }
        this.$content.html(view.render().$el);
      }
    });

})();
