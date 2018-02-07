$(document).ready(function() {
  $(function() {
    var options = {
      strings: [
      "HELLO",
      "MY NAME IS NICK SUNGA",
      "I'M A SOFTWARE DEVELOPER"],
      contentType: 'text',
      showCursor: false,
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      loopCount: Infinity
    }
    var typed = new Typed("#typed-strings", options);
  });

  $('.skillbar').each(function(){
  	$(this).find('.skillbar-bar').animate({
  		width:$(this).attr('data-percent')
	   },6000);
   });

   $('.proj-titles').each(function(){
     var height = $(this).parent().next().find('p').outerHeight();
     // console.log(height/2);
     // console.log($(this).css('margin-top'));
     // height = height/2 - $(this).css('margin-top');
     $(this).css('padding-top', height/2);
     console.log($(this).css('padding-top'));
   });
});
