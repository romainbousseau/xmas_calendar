$(document).ready(function(){
  $('#calendar').fullCalendar({
    header: false,
    locale: "fr",
    validRange: {
    start: '2017-12-01',
    end: '2017-12-25'
    },
    contentHeight: 500,
    firstDay: 5,
    fixedWeekCount: false,
    showNonCurrentDates: false,
    events: [
      {
        title: "1",
        id: 1,
        allDay: true,
        start: moment("2017-12-1")
      },
      {
        title: "2",
        id: 2,
        allDay: true,
        start: moment("2017-12-2")
      },
      {
        title: "3",
        id: 3,
        allDay: true,
        start: moment("2017-12-3")
      }
    ],
    eventClick: function(event, jsEvent, view){
      $('#dayModal').modal('toggle');
    }
  });
  $('.fc-head').html('')
  $('.fc-day-number').html('')


  $('.day-container').click(function() {
    console.log($(this).data("target"));
    $($(this).data("target")).addClass("active");
  })
  $(".modal-background").click(function() {
    $('.modal').removeClass('active');
  })
});
