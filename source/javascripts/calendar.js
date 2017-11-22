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
        title: "lol",
        id: 1,
        allDay: true,
        start: moment("2017-12-1")
      },
      {
        title: ":)",
        id: 2,
        allDay: true,
        start: moment("2017-12-2")
      }
    ]
  });
  $('.fc-head').html('')
});
