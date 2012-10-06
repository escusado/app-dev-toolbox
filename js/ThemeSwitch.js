(function() {

  Class('ThemeSwitch')({
    prototype: {
      init: function(element) {
        this.element = $(element);
        this.currentTheme = 'night';
        return this.bindEvents();
      },
      bindEvents: function() {
        var _this = this;
        return this.element.click(function() {
          return _this.toggleTheme();
        });
      },
      toggleTheme: function() {
        if (this.currentTheme === 'night') {
          return this.dusk();
        } else {
          return this.dawn();
        }
      },
      dusk: function() {
        $('body').removeClass('night').addClass('day');
        $('.navbar').removeClass('navbar-inverse');
        this.element.addClass('btn-inverse').find('i').removeClass('icon-black').addClass('icon-white');
        return this.currentTheme = 'day';
      },
      dawn: function() {
        $('body').removeClass('day').addClass('night');
        $('.navbar').addClass('navbar-inverse');
        this.element.removeClass('btn-inverse').find('i').removeClass('icon-white').addClass('icon-black');
        return this.currentTheme = 'night';
      }
    }
  });

}).call(this);
