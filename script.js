var screen1000px = window.matchMedia("(min-width: 1000px)");
var screen580px = window.matchMedia("(min-width: 580px)");
var screen750px = window.matchMedia("(min-width: 750px)");


function parrallaxCarouselMobil(elem, img) {
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



function carouselLargeScreen(elem, img) {
  var elem = document.querySelector(elem);
  var flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
  });
}

function carouselProductPage(elem, img) {
  console.log('shouldworkd');
  var elem = document.querySelector(elem);
  var flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: false,
    wrapAround: true,
  });
}

function carouselProductPage(elem, img) {
  console.log('shouldworkd');
  var elem = document.querySelector(elem);
  var flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: false,
    wrapAround: true,
    asNavFor: '.carousel-nav',
  });
}


function checkNavbarColor() {
  if (window.pageYOffset > document.documentElement.clientHeight * 0.50) {
    document.querySelector('.navbar_invisible').classList.add('navbar__scrolled');
  } else {
    document.querySelector('.navbar_invisible').classList.remove('navbar__scrolled')
  }
}

function navbarChange() {
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


function whichSlidersIndex() {
  if (screen1000px.matches) {
    carouselLargeScreen('.best-products__carousel', '.best-product__product img');
    parrallaxCarouselMobil('.instagram__slider', '.instagram__photo img');
  } else {
    parrallaxCarouselMobil('.best-products__carousel', '.best-product__product img');
    parrallaxCarouselMobil('.instagram__slider', '.instagram__photo img');
  }
}

function whichSlidersProduct() {

    // carouselProductPage('.product_page__carousel', '.product_image_container img');

}

navbarChange();




document.getElementById('toggleNav').addEventListener('touchend', function(elem) {
  this.classList.toggle('open')
})
document.getElementById('toggleNav').addEventListener('click', function(elem) {
  this.classList.toggle('open')
})









window.addEventListener('resize', function(event){
  navbarChange();
});





  // if (screen580px.matches) {
  //   var allTitle = document.querySelectorAll('.section-title__svg');
  //   console.log(allTitle)
  //
  //    for (i = 0; i == allTitle.length - 1; i++ ) {
  //      console.log('hello world')
  //      allTitle[0].setAttribute('data', 'assets/waves3.svg')
  //    }
  // }



//MODAL


//   var modal = new tingle.modal({
//       footer: true,
//       stickyFooter: false,
//       closeMethods: ['overlay', 'button', 'escape'],
//       closeLabel: "Close",
//       cssClass: ['custom-class-1', 'custom-class-2'],
//       onOpen: function() {
//
//           console.log('modal open');
//       },
//       onClose: function() {
//           console.log('modal closed');
//       },
//       beforeClose: function() {
//           // here's goes some logic
//           // e.g. save content before closing the modal
//           return true; // close the modal
//           return false; // nothing happens
//       }
//   });
//
//
// function createModal(info) {
//   whichSlidersProduct();
//   carouselLargeScreen('.recommendation__carousel', '.recommendation__product img')
//   console.log(info)
//   // set content
//   modal.setContent(document.querySelector('.tingle-demo-tiny').innerHTML);
//
//
//   // add a button
//   // modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
//   //     // here goes some logic
//   //     modal.close();
//   // });
//   //
//   // // add another button
//   // modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
//   //     // here goes some logic
//   //     modal.close();
//   // });
//
//   // open modal
//   modal.open('was up');
//
//   // close modal
//   // modal.close();
// }
//
//
//
//
// document.querySelector('.product-image__bg').addEventListener('click', function() {createModal('wasup')})
