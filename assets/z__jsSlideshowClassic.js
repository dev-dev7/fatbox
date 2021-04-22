"use strict";

Shopify.theme.jsSlideshowClassic = {
  
  init: function init($section) {
    // Add settings from schema to current object
    Shopify.theme.jsSlideshowClassic = $.extend(this, Shopify.theme.getSectionData($section)); // Selectors

    var $slideshowClassicEl = $section.find('[data-slideshow-classic]').removeClass('is-hidden');
    var $slideshowClassic = $slideshowClassicEl.flickity({
      wrapAround: true,
    adaptiveHeight: false,
      prevNextButtons: this.number_of_slides > 1 ? this.show_arrows : false,
      pageDots: this.number_of_slides > 1 ? this.show_nav_buttons : false,
      draggable: false,

      imagesLoaded: true,
     initialIndex: 1,
      cellAlign: "center",
      contain: true,
    groupCells: 1,
       selectedAttraction: 0.2,
       imagesLoaded: true,
      percentPosition: false,
       initialIndex: 4,
      friction: 0.8,
        resize: true,

      draggable: true,
      fade: this.image_transition == 'fade' ? true : false,
      autoPlay: this.image_slideshow_speed * 1000,
      arrowShape: arrowShape
    }); // Resize flickity when the slider is settled

    $slideshowClassicEl.on('settle.flickity', function () {
      $slideshowClassicEl.flickity('resize');
    });
  },
  blockSelect: function blockSelect($section, blockId) {
    var $slider = $section.find('[data-image-slideshow]');
    var $sliderIndex = $('#shopify-section-' + blockId).data('slide-index');
    $slider.flickity('select', $sliderIndex, true, true);
  },
  unload: function unload($section) {}
};
