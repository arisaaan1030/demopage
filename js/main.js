var hamburger = $('.hamburger-menu');

//ハンバーガーメニューの開閉
$('.hamburger-button').on('click', function () {
    hamburger.toggleClass('hamburger-menu-active');
});

    // ハンバーガーメニューを閉じる
$(window).on('resize', function () {
    hamburger.removeClass('hamburger-menu-active');
});

// カルーセルの設定
$('.cover-slick').slick({
    infinite: true,
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false
});

// タブの初期化
$('#smarttab').smartTab({
    enableUrlHash: false
});

// フェードインアニメーション
$(function() {
  $('.js-fadein-left').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__animated animate__fadeInLeft');
      }
    },
    offset: '100%'
  });

  $('.js-fadein-right').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__animated animate__fadeInRight');
      }
    },
    offset: '100%'
  });
});
  
 // アコーディオン機能
$('.accordion-title').on('click', function () {
  const isExpanded = $(this).attr('aria-expanded') === 'true';
  $(this).attr('aria-expanded', !isExpanded);

  $(this).next('.accordion-content').slideToggle();

  $(this).find('.accordion-icon').toggleClass('bi-caret-down-fill bi-caret-up-fill');
});