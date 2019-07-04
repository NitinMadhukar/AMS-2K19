
"use strict";


// Prealoder
 function prealoader () {
   if ($('#preloader_1').length) {
     $('#preloader_1').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });

        });
  }
}


// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    //Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

    //Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0},1500);
      return false;
    });
  }
}

// Mixitup gallery
function mixitupGallery () {
  var mixItem = $(".project-gallery");
  if (mixItem.length) {
        mixItem .mixItUp()
  };
}

// Progress Bar
function bootstrapProgress () {
  var smartskill = $ ('.skills');
  if(smartskill.length) {
      smartskill.skill();
  }
}


// Client SLider
function clientSlider () {
  var cSldier = $(".client-slider");
  if(cSldier.length) {
      cSldier.owlCarousel({
        animateOut: 'slideOutLeft',
        loop:true,
        nav:false,
        navText:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:5500,
        lazyLoad:true,
        items:1,
    })
  }
}


// Partner Logo Footer
function partnersLogo () {
  var logoSlide = $("#partner_logo");
  if(logoSlide.length) {
      logoSlide.owlCarousel({
        loop:true,
        margin:-1,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplaySpeed:1000,
        lazyLoad:true,
        singleItem:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            751:{
                items:3
            },
            1001:{
                items:5
            }
        }
    })
  }
}


//Contact Form Validation
function contactFormValidation () {
  var activeForm = $('.form-validation');
  if(activeForm.length){
    activeForm.validate({ // initialize the plugin
      rules: {
        Fname: {
          required: true
        },
        Lname: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        sub: {
          required: true
        },
        message: {
          required: true
        }
      },
      submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeForm.fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeForm.fadeTo( "slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
  }
}

// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $ (".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}


// Sticky header
function stickyHeader () {
  if ($('.theme-main-header').length) {
    var sticky = $('.theme-main-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  };
}

// Calendar
function cladendar () {
  var calender = $('#blog-calendar');
  if(calender.length) {
      calender.monthly();
  }
}

// Tooggle Home page menu click Function
function subMenuExpend () {
  if($(".theme-main-header").length) {
    $('.theme-main-header li.dropdown-holder').append(function () {
      return '<i class="fa fa-angle-down"></i>';
    });
    $('.theme-main-header li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle();
    });
  }
}

// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder ();
     scrollToTop ();
     mixitupGallery ();
     bootstrapProgress ();
     clientSlider ();
     partnersLogo ();
     contactFormValidation ();
     closeSuccessAlert ();
     cladendar ();
     subMenuExpend ()
  })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function () {
  (function ($) {
    stickyHeader ()
  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
      prealoader ()
  })(jQuery);
 });


 //Thunder bolt AMS animation

$(document).ready(function () {

  var $randomnbr = $('.nbr');
  var $timer = 40;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = ["T", "H", "U", "N", "D", "E", "R", "B", "O", "L", "T", " ", " A", "M", "S"];

  $randomnbr.each(function () {

    change = Math.round(Math.random() * 100);
    $(this).attr('data-change', change);

  });

  function random() {
    return Math.round(Math.random() * 9);
  };

  function select() {
    return Math.round(Math.random() * $randomnbr.length + 1);
  };

  function value() {
    $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
    $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
    $data++;

    $randomnbr.each(function () {
      if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
        index = $('.ltr').index(this);
        $(this).html(letters[index]);
        $(this).removeClass('nbr');
      }
    });

  };

  $it = setInterval(value, $timer);

});



// Youtube

$(document).on('click','.js-videoPoster',function(e) {
  e.preventDefault();
  var poster = $(this);
  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});


function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe');
  var src = iframe.data('src');
  wrapper.addClass('videoWrapperActive');
  iframe.attr('src',src);
}