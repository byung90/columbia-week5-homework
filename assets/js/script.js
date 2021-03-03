var schedules;
var currentHour;
var trackHour = moment().format("H"); //tracking hour to change color

//Display Current Time
$('#currentDay').text(moment().format("dddd, MMM Do YY"));

//Count Time
function renderTime() {
  currentHour = moment().format("H");

  if (currentHour >= 9 && currentHour <= 17) {
    if (trackHour < currentHour) {
      let scheduleList = $('#time-table').children().children();
      let scheduleIndex = currentHour - 9;
      $(scheduleList[scheduleIndex]).children('.textarea-field').children().addClass('present');
      $(scheduleList[scheduleIndex - 1]).children('.textarea-field').children().removeClass('present');
      $(scheduleList[scheduleIndex - 1]).children('.textarea-field').children().addClass('past');
      trackHour++;
    }
  }
}

//Set Calender Initial Color
function setCalendarInitialColor() {
  let scheduleList = $('#time-table').children().children();
  let scheduleIndex = trackHour - 10;
  $(scheduleList[scheduleIndex + 1]).children('.textarea-field').children().addClass('present');
  for (let i = scheduleIndex; i >= 0; i--) {
    $(scheduleList[i]).children('.textarea-field').children().addClass('past');
  }
}


//Save schedule content
$(".btn").on("click", function () {
  let scheduleIndex = schedules.findIndex(x => x.id === $(this).parent().parent().attr("time"));
  let content = $(this).parent().siblings('.col-10').children().val();
  schedules[scheduleIndex].content = content;

  localStorage.setItem("schedules", JSON.stringify(schedules));
});

//Load new schedule or load existing
function loadSchedule() {
  if (localStorage.getItem("schedules") !== null) {
    schedules = JSON.parse(localStorage.getItem("schedules"));
    var scheduleLoop = $('#time-table').children().children();

    scheduleLoop.each(function (index) {
      $(this).children('.textarea-field').children().val(schedules[index].content);
    });
  }
  else {
    schedules = [
      {
        "id": "nine-am",
        "start-time": "9:00",
        "content": ""
      },
      {
        "id": "ten-am",
        "start-time": "10:00",
        "content": ""
      },
      {
        "id": "eleven-am",
        "start-time": "11:00",
        "content": ""
      },
      {
        "id": "twelve-pm",
        "start-time": "12:00",
        "content": ""
      },
      {
        "id": "one-pm",
        "start-time": "13:00",
        "content": ""
      },
      {
        "id": "two-pm",
        "start-time": "14:00",
        "content": ""
      },
      {
        "id": "three-pm",
        "start-time": "15:00",
        "content": ""
      },
      {
        "id": "four-pm",
        "start-time": "16:00",
        "content": ""
      },
      {
        "id": "five-pm",
        "start-time": "17:00",
        "content": ""
      }
    ]
  }
}

loadSchedule();
setCalendarInitialColor();
setInterval(renderTime, 1000);