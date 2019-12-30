export function parrallaxCarouselMobil(elem, img) {
  var carousel = document.querySelector(elem);
  var flkty = new Flickity( carousel, {
    imagesLoaded: true,
    percentPosition: false,
    pageDots: false,
    wrapAround: true,

  });
  var imgs = carousel.querySelectorAll(img);
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



export function carouselLargeScreen(elem, img) {
  var elem = document.querySelector(elem);
  var flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
  });
}



export function checkNavbarColor() {
  if (window.pageYOffset > document.documentElement.clientHeight * 0.50) {
    document.querySelector('.navbar_invisible').classList.add('navbar__scrolled');
  } else {
    document.querySelector('.navbar_invisible').classList.remove('navbar__scrolled')
  }
}

export function navbarChange() {
  var navbar = document.querySelector('nav');
  var hamburger = document.querySelector('.toggle-nav__container');

  if (screen750px.matches) {
    navbar.classList.add('opened');
    navbar.classList.remove('closed');
    navbar.setAttribute('aria-hidden', 'fasle');
    navbar.style.position = "relative";
    hamburger.style.display = 'none';

  } else {
    console.log('jjjj');
    navbar.classList.remove('opened');
    navbar.classList.add('closed');
    navbar.setAttribute('aria-hidden', 'true');
    hamburger.style.display = 'flex';

  }
}


export function whichSliders() {
  if (screen1000px.matches) {
    carouselLargeScreen('.best-products__carousel', '.best-product__product img');
    parrallaxCarouselMobil('.instagram__slider', '.instagram__photo img');

  } else {
    parrallaxCarouselMobil('.best-products__carousel', '.best-product__product img');
    parrallaxCarouselMobil('.instagram__slider', '.instagram__photo img');


  }
}
