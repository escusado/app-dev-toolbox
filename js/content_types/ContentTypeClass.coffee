Class('ContentTypeClass')({
  prototype:
    init: (template, initData) ->
      @template = $(template).html()

      @render()

      # if initData?
      #   @setEditionMode()

    render: ->
      @element = @template

})