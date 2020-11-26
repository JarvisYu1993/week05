$(document).ready(function () {
  $('.reply-btn').click(function (e) {
      e.preventDefault();
      $('.reply-content').toggleClass('active');
  });
  $('.assignment-btn').click(function (e) {
    e.preventDefault();
    $('.reply-content').removeClass('active');

});


});