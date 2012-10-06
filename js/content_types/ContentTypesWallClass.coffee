Class('ContentTypesWallClass')({
  prototype:
    init: (element, initData) ->
      @element = if typeof element is 'string' then $(element) else element
      @element.data('grid-editor', this)


      #TODO CRUD de content_types


      @element.append new ContentTypeClass('.content_type-template').element
      @element.append new ContentTypeClass('.content_type-template').element
      @element.append new ContentTypeClass('.content_type-template').element
})