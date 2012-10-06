$(document).ready ->
  new ContentTypesWallClass('.content_type-wall')
  new ThemeSwitch('.style-switch')

  $('.nano').nanoScroller({
    alwaysVisible: true
  })