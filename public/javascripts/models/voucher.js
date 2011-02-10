var Voucher = Backbone.Model.extend({
    name: "voucher",
    url: function() {
      var base = 'vouchers';
      if (this.isNew()) {
        return base;
      }
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
    }
});
