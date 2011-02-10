App.Controllers.Vouchers = Backbone.Controller.extend({
    routes: {
        "":               "index",
        "new":            "newVoucher",
        "vouchers/:id":   "edit"
    },

    index: function() {
        var vouchers = new App.Collections.Vouchers();
        vouchers.fetch({
            success: function() {
                new App.Views.Index({ collection: vouchers });
            },
            error: function() {
                new Error({ message: "Error loading vouchers." });
            }
        });
    },

    newVoucher: function() {
        new App.Views.Edit({ model: new Voucher() });
    },

    edit: function(id) {
        var voucher = new Voucher({ id: id });
        voucher.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: voucher });
            },
            error: function() {
                new Error({ message: 'Could not find that voucher.' });
                window.location.hash = '#';
            }
        });
    }
});
