(function() {

  Class('ContentTypeClass')({
    prototype: {
      init: function(template, initData) {
        this.template = $(template).html();
        return this.render();
      },
      render: function() {
        return this.element = this.template;
      }
    }
  });

}).call(this);
