$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");
  
  var width = $("body").innerWidth();

  $('#navbars').on('click', function () {
  $('.header_top_nav').addClass('open')
  $('.header_top_nav').removeClass('close_nav')
  });
  $('#close').on('click', function () {
  $('.header_top_nav').addClass('close_nav')
  $('.header_top_nav').removeClass('open')
  });

  if (width < 992) {
  $('#dropdown1').on('click', function() {
    // $('#dropdown_content1').toggleClass('mobshow');
    $('#dropdown_content1').slideToggle();
  });
  $('#dropdown2').on('click', function() {
    // $('#dropdown_content1').toggleClass('mobshow');
    $('#dropdown_content2').slideToggle();
  });
  $('#dropdown3').on('click', function() {
    // $('#dropdown_content1').toggleClass('mobshow');
    $('#dropdown_content3').slideToggle();
  });
  $('#dropdown4').on('click', function() {
    // $('#dropdown_content1').toggleClass('mobshow');
    $('#dropdown_content4').slideToggle();
  });
  $('#dropdown5').on('click', function() {
    // $('#dropdown_content1').toggleClass('mobshow');
    $('#dropdown_content5').slideToggle();
  });
  $('#dropdown6').on('click', function() {
    // $('#dropdown_content1').toggleClass('mobshow');
    $('#dropdown_content6').slideToggle();
  });
  $('#dropdown7').on('click', function() {
    // $('#dropdown_content1').toggleClass('mobshow');
    $('#dropdown_content7').slideToggle();
  });
  $('#dropdown8').on('click', function() {
    // $('#dropdown_content1').toggleClass('mobshow');
    $('#dropdown_content8').toggleClass('mobd');
  });
}
  
// document ready  
});