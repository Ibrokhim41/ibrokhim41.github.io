$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");
  
  
  $('#navbars').on('click', function () {
  $('.header_top_nav').addClass('open')
  $('.header_top_nav').removeClass('close_nav')
  });
  $('#close').on('click', function () {
  $('.header_top_nav').addClass('close_nav')
  $('.header_top_nav').removeClass('open')
  });
  
// document ready  
});