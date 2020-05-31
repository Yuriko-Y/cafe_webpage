$(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }

    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
    ScrollReveal().reveal('.item', { 
        duration: 1600, 
        origin: 'left',
        distance: '50px',
        reset: true   
      });
      ScrollReveal().reveal('.shop-image', { 
        duration: 1600, 
        scale: 0.1,
        reset: true
      });
      ScrollReveal().reveal('.wrapper', { 
        duration: 1600,
        reset: true   
      });
      ScrollReveal().reveal('.big-bg', { 
        duration: 1600,
        reset: true   
      });
 
  });
  