$(window).on('load', function () {

  //preloader
  $('.pre-loader').fadeOut("500", function () {
    $('html').removeClass("overflow");
    $(this).remove();
  });



  //header slider
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });


  //products slider
  var mySwiper = new Swiper('.products-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
    },

    breakpoints: {
      // when window width is >= 480px
      992: {
        slidesPerView: 4,
      },
      // when window width is >= 480px
      782: {
        slidesPerView: 3,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 250px
      0: {
        slidesPerView: 1,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  //notes slider
  var mySwiper3 = new Swiper('.notes-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 3,
    autoplay: false,
    allowTouchMove: false,

    breakpoints: {
      // when window width is >= 576px
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },
      // when window width is >= 250px
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
        autoplay: 4000,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  setInterval(() => {
    mySwiper3.slideNext();
  }, 4000)


  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 769;
      return window.innerWidth < maxWidth;
    },
    easing: 'ease-in-out'
  });


  //nava toggle
  $('#nava-icon').click(function (e) {
    $('#nava').toggleClass('nava-active');
    $('html').toggleClass('overflow');
  });

  $('#nava').click(function (e) {
    if (e.target.id == 'nava' || e.target.id == 'close-nava' || e.target.parentNode.id == "close-nava") {
      $(this).removeClass('nava-active');
      $('html').removeClass('overflow');
    }
  });

  //search toggle
  $('#search-btn').click(function (e) {
    $('#search-form').toggleClass('search-form-active');
    $('html').toggleClass('overflow');
  });

  $('#search-form').click(function (e) {
    if (e.target.id == 'search-form' || e.target.id == 'close-search' || e.target.parentNode.id == "close-search") {
      $(this).removeClass('search-form-active');
      $('html').removeClass('overflow');
    }
  });


  $(".slide").on("click", function (e) {
    if (e.target.classList.contains('drop')) {
      console.log(e.target);
      $(this).toggleClass("slide-active");
      $(this).children("ul").slideToggle();
    }
  });


  function addCollapse() {
    console.log('resize');
    if (window.innerWidth <= 576) {
      $('.footer-list').attr("data-toggle", "collapse");
      $('.footer-list ul').addClass('collapse');
    }else{
      $('.footer-list').attr("data-toggle", "none");
      $('.footer-list ul').removeClass('collapse');
      $('.footer-list ul').css('height', 'auto');
    }
  }


  addCollapse();
  window.addEventListener("resize", addCollapse);


  $(".footer-list").on("click", function (e) {
    if (window.innerWidth <= 576) {
      $(this).addClass("footer-list-active");
    }
  });



  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let nav = document.getElementById('nav');
    if (this.scrollY > 140) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }



});
