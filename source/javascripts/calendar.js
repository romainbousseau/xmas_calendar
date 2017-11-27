$(document).ready(function(){
  $('.day-container').click(function() {
    // Change '<' in '>' before lauch ;)
    if($('.calendar-container').data('day') < moment().format()){
      $($(this).data("target")).addClass("active");
    } else {
      alert("La curiosité est un vilain défaut !")
    }
  })
  $(".modal-background").click(function() {
    $('.modal').removeClass('active');
  })
});
