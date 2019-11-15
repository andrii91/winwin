$(document).ready(function () {


  $('.close').click(function () {
    $(this).parents('.offer').hide();
    $(this).parents('.nav').css({
      'padding-top': '17px'
    });

  })

  $('.play-btn').click(function () {
    var $from = $(this);
    var imgWidth = $from.parents('.video').find('img').width();
    var imgHeight = $from.parents('.video').find('img').height();
    $from.parents('.video').find('img').hide();
    $from.hide();

    $from.parents('.video').append('<iframe width="' + imgWidth + '" height="' + imgHeight + '" src="https://www.youtube.com/embed/' + $from.parents(".video").data("id") + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  })

  $('.strategies-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },

      1000: {
        items: 3
      }
    }
  })


  var strategiesCarousel = $('#strategies-carousel');

  strategiesCarousel.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },

      1000: {
        items: 3
      }
    }
  })

  $('.benefits-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    
    responsive: {
      0: {
        items: 1
      }
    }
  })

  $('input[name="phone"]').inputmask({
    "mask": "+38(999) 999-9999"
  });

  $('[data-popup]').click(function () {
    var title = $(this).data('title');
    var p = $(this).data('p');
    var btn = $(this).data('btn');
    $('#reg .title').html(title)
    $('#reg p').html(p)
    $('#reg .order-btn span').html(btn)
    setTimeout(function () {
      $('.mfp-close').text(' ');
    }, 400);
  })

  $('[data-popup]').magnificPopup({
    type: 'inline',
    preloader: false
  });

  $('.menu-btn').click(function () {
    $('img[data-src]').each(function(){
      $(this).attr('src', $(this).data('src'));
    })
    
    $('.menu').css({
      'right': '0'
    })
    $('.menu-bg').show(800);
  })

  $('.menu .close, .menu-bg, .menu a').click(function () {
    $('.menu').css({
      'right': '-9999px'
    })
    $('.menu-bg').hide(200);
  })

  $('.scroll').click(function (e) {
      event.preventDefault();
    
    
      var id = $(this).attr('href'),
        top = $(id).offset().top;

      $('body,html').animate({
        scrollTop: top - 140
      }, 1500);

  });

  var observer = lozad();
  observer.observe();

  if ($(window).width() < 1200) {
    $('.about-item p').height($('.about-item:nth-child(2) p.h').height());

    $('.results-img.repl img').attr('src', 'images/mobimg.png');
    $('.results-img.repl img').attr('data-src', 'images/mobimg.png');
      $('.close').click(function () {
    $(this).parents('.offer').hide();
    $(this).parents('.nav').css({
      'padding-top': '5px'
    });

  })
  }else {
      $('.close').click(function () {
    $(this).parents('.offer').hide();
    $(this).parents('.nav').css({
      'padding-top': '17px'
    });

  })
  }

  var id = 0;
  $('.strategies-carousel .owl-dot').each(function (e) {
    $(this).attr('data-id', id);
    id = id + 1;
  })


  strategiesCarousel.on('changed.owl.carousel', function (event) {
    var item = event.item.index - 2;
    if (item < 0) {
      item = 3;
    }
    $('.strategies-list li').removeClass('active');
    $('.strategies-list li[data-id="' + item + '"]').addClass('active');
  })
  
  $('.strategies-list li').click(function(){
    $('.strategies-list li').removeClass('active');
    $(this).addClass('active');
    $('.owl-dot[data-id="'+$(this).data('id')+'"]').trigger('click');
  })

});