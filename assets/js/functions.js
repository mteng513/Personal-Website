$(window).scroll(function(){
  imageScroll();
});

function imageScroll(){
  var ofScroll = $(window).scrollBottom();
  $('.image-strip').css('background-position', 'center ' + ofScroll + 'px');
}

$.fn.scrollBottom = function() {
  return $(document).height() - this.scrollTop() - this.height();
};
