$(function () {
  /* Поиск */
  $('.header__search-icon').on('click', function (e) {
    e.preventDefault();
    $(this).attr('type', 'submit');
    $(this).parent().children().addClass('active');
  });

  /* Logo scroll */
  $('.logo__link').on('click', function () {
    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: 0
    }, {
      duration: 1500
    });
  });

  /* Инпуты в подвале */
  $('.footer__contact-form input').on('focus', function() {
    $(this).siblings('.footer__inp-info').addClass('active');
  });

  $('.footer__contact-form input').on('blur', function() {
    if ($(this).val() != "") return;
    else $(this).siblings().removeClass('active');
  });

  /* Скрол к якорю */
  $('.menu__list-link').on('click', function () {
    if (window.innerWidth <= 768) {
      $('.header__close-menu-btn').removeClass('active');
      $('.menu').fadeOut(200).children().children().removeClass('active');
      $('body').removeClass('active');
    }
    
    $('.menu__list-link').removeClass('active');
    $(this).addClass('active');
    
    var hash = $(this).attr('href');
    var target = $(hash);

    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: target.offset().top - ($('.header').height() / 2)
    }, {
      duration: 1500
    });
  });

  /* Скрол главного экрана */
  $('.intro__arrow-btn').on('click', function () {
    console.log($(this).css('bottom'));
    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: $(this).offset().top - ($('.header').height() / 2)
    }, {
      duration: 1500
    });
  });

  /* Parallax Intro */
  $(window).on('scroll', function () {
    var yPos = -($(this).scrollTop() / 5);
    var coords = '50%' + yPos + 'px';
    $('.intro').css('backgroundPosition', coords);
  });

  /* Parallax Benefits */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= ($('.benefits').offset().top - window.innerWidth)) {
      $('.benefits').addClass('active');
      var yPos = -($(this).scrollTop() / 7);
      var coords = '50%' + yPos + 'px';
      $('.benefits').css('backgroundPosition', coords);
    }
  });

  /* Burger #1 */
  $('.header__burger').on('click', function() {
    $('.products__modal').fadeIn(300).children().addClass('active');
    $('body').addClass('active');
  });

  $('.products__modal-close-btn').on('click', function() {
    $('.products__modal').fadeOut(200).children().removeClass('active');;
    $('body').removeClass('active');
  });

  /* Burger #2 */
  var isClone = true;
  $('.header__burger-menu').on('click', function() {
    if (isClone) {
      var $clonedLogo = $('.logo').clone();
      $clonedLogo.addClass('cloned-logo');
      $clonedLogo.addClass('active');
      $('.menu__list').prepend($clonedLogo);
    }
    isClone = false;

    $('.header__close-menu-btn').addClass('active');
    $('.menu').fadeIn(300).children().children().addClass('active');
    $('body').addClass('active');
  });

  $('.header__close-menu-btn').on('click', function() {
    $('.header__close-menu-btn').removeClass('active');
    $('.menu').fadeOut(200).children().children().removeClass('active');
    $('body').removeClass('active');
  });

  $(window).on('load resize',function() {
    if (window.innerWidth > 768) {
      $('.cloned-logo').addClass('hide');
      $('.menu').fadeIn(0);
    } else {
      $('.cloned-logo').removeClass('hide');
      $('.menu').fadeOut(0);
    }
  });

  /* Static Header */
  $(window).on('scroll load resize', function() {
    if ($(this).scrollTop() > ($('.header').height() + $('.intro').height()) / 2) {
      $('.header').addClass('hide');
    } else {
      $('.header').removeClass('hide');
    }

    if ($(this).scrollTop() >= $('.header').height() + $('.intro').height()) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  /* Validation */
  $('.footer__contact-form').on('submit', function(e) {
    e.preventDefault();
  });

  $('.callback-section__form').on('submit', function(e) {
    e.preventDefault();
  });

  
  $('.footer__contact-form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      },
      datepicker: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Заполните это поле"
      },
      phone: {
        required: "Заполните это поле"
      },
      datepicker: {
        required: "Заполните это поле"
      }
    },
    submitHandler: function () {
      Swal.fire({
        title: 'Заявка отправлена!',
        text: "Мы получили вашу заявку и в ближайшее время свяжемся с вами!",
        confirmButtonText: `Закрыть`,
        icon: 'success',
      });
      $('.footer__contact-form input').val('');
      $('.footer__contact-form input').siblings().removeClass('active');
    }
  });

  $('.callback-section__form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      },
      email: {
        required: true
      },
      message: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Заполните это поле"
      },
      phone: {
        required: "Заполните это поле"
      },
      email: {
        required: "Заполните это поле"
      },
      message: {
        required: "Заполните это поле"
      }
    },
    submitHandler: function () {
      $.fancybox.close();
      Swal.fire({
        title: 'Заявка отправлена!',
        text: "Мы получили вашу заявку и в ближайшее время свяжемся с вами!",
        confirmButtonText: `Закрыть`,
        icon: 'success',
      });
      $('.callback-section__form input').val('');
      $('.callback-section__form textarea').val('');
    }
  });

  /* Слайдер */
  $('.products__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<div class="slick-arrow slick-prev"><svg><use xlink:href="img/sprite.svg#arrow-left"></use></svg></div>',
    nextArrow: '<div class="slick-arrow slick-next"><svg><use xlink:href="img/sprite.svg#arrow-right"></use></svg></div>',
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
  });

  /* Календарь */
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
  $("#datepicker").datepicker();

  /* Маска для телефона */
  $.mask.definitions['9'] = false;
  $.mask.definitions['5'] = "[0-9]";
  $.mask.definitions['0'] = "[7-9]";
  $('input[type="tel"]').mask("+0-555-555-55-55");
});