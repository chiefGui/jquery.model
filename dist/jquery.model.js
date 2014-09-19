(function ($) {
  $.fn.model = function (options) {
    /**
     * Scoping the default options.
     */
    var defaults = {
      width: '50%',
      height: 300
    };

    /**
     * Merging default options with manual declared options.
     */
    options = $.extend({}, defaults, options);

    /**
     * Defining important variables.
     */
    var idName    = this.context.id
        , $model  =  $('body').find('#' + idName + '-model');

    /**
     * Appending overlay as the first child of "body"
     * to turns the background black.
     */
    $('body').prepend('<div class="model-overlay"></div>');

    /**
     * Shaping default style parameters of model.
     */
    $model.css({
      width: options.width,
      height: options.height
    });

    /**
     * Displaying the model itself.
     */
    $model.show();
  };
}(jQuery));