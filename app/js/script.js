$(document).on('ready', function(){ 
	var ease = document.querySelector('.js_ease');
  // http://easings.net/
  lory(ease, {
        infinite: 4,
        slidesToScroll: 1,
        slideSpeed: 1000,
        ease: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
    });
 

  function clickMin(tovar) {
        var val = $('.js-current').text();
        if (val === '' || val === '0') val = 0; else val --;
        $('.js-current').text(val);
        
  }

  function clickMax(tovar) {
        var val = $('.js-current').text();
        if (val === '') val = 1; else val ++;
        $('.js-current').text(val);
        
  }  

	$('.js-min').click(function(event){
      	event.preventDefault();
        clickMin($(this));
    });

    $('.js-max').click(function(event){
      	event.preventDefault();
        clickMax($(this));
    });         
      	



});