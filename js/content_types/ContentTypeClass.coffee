Class('ContentTypeClass')({
  prototype:
    init: (template, initData) ->
      @template = $(template).html()

      @render()

    render: ->
      @element = @template

})