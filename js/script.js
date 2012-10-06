(function() {

  $(document).ready(function() {
    new ContentTypesWallClass('.content_type-wall');
    new ThemeSwitch('.style-switch');
    return $('.nano').nanoScroller({
      alwaysVisible: true
    });
  });

}).call(this);
