function parrallaxCarousel(elem, img) {
  var carousel = document.querySelector(elem);
  var flkty = new Flickity( carousel, {
    imagesLoaded: true,
    percentPosition: false,
    pageDots: false,
    wrapAround: true,
    prevNextButtons: false,

  });

  var imgs = carousel.querySelectorAll(img);
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

  flkty.on( 'scroll', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = imgs[i];
      var x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });
}

parrallaxCarousel('.best-products__carousel', '.best-product__product img');
parrallaxCarousel('.instagram__slider', '.instagram__photo img');
