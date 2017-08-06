$(function () {
  const bookMenu = '<ul class="bookMenu"><li class="hr"><a href="#">Reading</a></li><li class="hr"><a href="#">Want to Read</a></li><li class="hr"><a href="#">Read</a></li><li style="text-align: center;"><a href="#">Delete</a></li></ul>'

  $('.books-grid > li').mouseenter(function () {
    if ($(this).find('.book-cover > .bookMenu').hasClass('bookMenu') === false) {
      $(this).find('.book-cover').prepend(bookMenu)
      $('.bookMenu').fadeIn(700)
      //$(this).find('.bookMenu').css('backdrop-filter', 'blur(5px)')
    }
  }).mouseleave(function () {
    $(this).find('.book-cover > ul').stop().fadeOut(200, () => {
      $(this).find('.book-cover > ul').remove()
    })
  })

})
