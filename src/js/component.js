$(document).ready(function () {
  $('.head-img img').click(function () {
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });

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
    responsive: {
      0: {
        items: 1,
        autoHeight:true
      },
      
      1000: {
        items: 3
      }
    }
  })

  $('.benefits-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
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
      scrollTop: top - 40
    }, 1500);

  });

  var observer = lozad();
  observer.observe();

  if ($(window).width() < 1200) {
    $('.about-item p').height($('.about-item:nth-child(2) p.h').height());
    
    $('.results-img.repl img').attr('src', 'images/mobimg.png');
  }
});