$(document).ready(() => {
  
  //Menu toggle function
	$('.menu').on('click', () => {
    $('.nav-menu').toggle();
  });
  
  //+1 button function
  $('.btn').on('mouseenter', event => {
    $(event.currentTarget).addClass('btn-hover')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover')
  });
  
  //Text area character counting
  $('.postText').focus();
  $('.postText').on('keyup', event => {
    var post = $(event.currentTarget).val();
    var remaining = 140 - post.length;
    //The character counting becomes red if the value is or less than 0
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    };
    
    $('.characters').html(remaining);
  });
  
}); 
