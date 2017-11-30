$(document).ready(function(){
  $('.day-container').click(function() {
    // Change '<' in '>' before lauch ;)
    if($(this).data('date') <= moment().format()){
      $($(this).data("target")).addClass("active");
      if($(this).data('date') == "2017-12-24") {
        $('#sinatra')[0].play();
      }
    } else {
      $('#stalker').addClass('active');
    }
  })
  $(".modal-background").click(function() {
    $('#sinatra')[0].pause();
    $('.modal').removeClass('active');
    $.ajax({
      url: "http://thecatapi.com/api/images/get?format=src&type=gif"
    })
    $("#random-cat").attr("src","http://thecatapi.com/api/images/get?format=src&type=gif");
  })
});
