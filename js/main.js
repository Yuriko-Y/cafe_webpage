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
    // フェードイン
    function animation(){
        $('.item').each(function(){
          //ターゲットの位置を取得
          var target = $(this).offset().top;
          //スクロール量を取得
          var scroll = $(window).scrollTop();
          //ウィンドウの高さを取得
          var windowHeight = $(window).height();
          //ターゲットまでスクロールするとフェードインする
          if (scroll > target - windowHeight){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
          }
        });
      }
      animation();
      $(window).scroll(function (){
        animation();
      });
  });
  