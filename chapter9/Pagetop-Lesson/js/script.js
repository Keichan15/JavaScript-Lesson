$(function () {
  $('#back a').on('click', function (event) {
    // #back内のaタグがクリックされた場合の処理
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    event.preventDefault();
  });
});