var App = {
    Views: {},
    Controllers: {},
    Collections: {},
    init: function() {
        new App.Controllers.Vouchers();
        Backbone.history.start();
    }
};
