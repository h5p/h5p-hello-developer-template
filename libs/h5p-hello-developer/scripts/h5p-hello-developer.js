var H5P = H5P || {};

H5P.HelloDeveloper = (function ($) {
  function HelloDeveloper(options, id) {
    var self = this;

    /**
     * Attach function called by H5P framework to insert H5P content into page
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      if (self.$container === undefined) {
        self.$container = $container;

        self.$container.addClass('h5p-hello-developer');

        for (var i=0; i<options.pages.length; i++) {
          var $page = $('<div>', {
            'class': 'h5p-hello-developer-page layer' + (i==0 ? ' show' : '')
          }).append($('<h2>', {
            'class': 'title',
            html: options.pages[i].title
          })).append($('<div>', {
            'class': 'content',
            html: options.pages[i].content
          }));

          self.$container.append($page);
        }

        var k = kontext(document.querySelector('.h5p-hello-developer'));

        self.$container.on('click', function () {
          k.next();
        });
      }
    };
  }

  return HelloDeveloper;
})(H5P.jQuery);
