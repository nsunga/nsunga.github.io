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
});
