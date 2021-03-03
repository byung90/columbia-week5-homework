var schedules;

$(".btn").on("click", function () {
  let scheduleIndex = schedules.findIndex(x => x.id === $(this).parent().parent().attr("time"));
  let content = $(this).parent().siblings('.col-10').children().val();
  schedules[scheduleIndex].content = content;

  localStorage.setItem("schedules", JSON.stringify(schedules));
});

function loadSchedule() {
  if (localStorage.getItem("schedules") !== null) {
    schedules = JSON.parse(localStorage.getItem("schedules"));
    var scheduleLoop = $('#time-table').children().children();

    scheduleLoop.each(function (index) {
      $(this).children('.col-10').children().val(schedules[index].content);
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