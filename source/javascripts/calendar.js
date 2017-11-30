$(document).ready(function(){
  $('.day-container').click(function() {
    // Change '<' in '>' before lauch ;)
    if($('.calendar-container').data('day') < moment().format()){
      $($(this).data("target")).addClass("active");
    } else {
      $('#stalker').addClass('active');
    }
  })
  $(".modal-background").click(function() {
    $('.modal').removeClass('active');
    $.ajax({
      url: "http://thecatapi.com/api/images/get?format=src&type=gif"
    })
    $("#random-cat").attr("src","http://thecatapi.com/api/images/get?format=src&type=gif");
  })
});
