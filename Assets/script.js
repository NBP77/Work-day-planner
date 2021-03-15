
// Displays day at top of the page
var today = moment();
$('#currentDay').text(today.format('dddd'));

const inpKey = document.getElementById("inpKey");
const btnInsert = document.getElementById("btnInsert");
const btnInsert10 = document.getElementById("btnInsert10");
const btnInsert12 = document.getElementById("btnInsert12");
const btnInsert1 = document.getElementById("btnInsert1");
const btnInsert2 = document.getElementById("btnInsert2");
const btnInsert3 = document.getElementById("btnInsert3");
const btnInsert4 = document.getElementById("btnInsert4");
const btnInsert5 = document.getElementById("btnInsert5");
const btnInsert6 = document.getElementById("btnInsert6");
const btnInsert7 = document.getElementById("btnInsert7");
const btnInsert8 = document.getElementById("btnInsert8");
const btnInsert9pm = document.getElementById("btnInsert9pm");
const btnInsert10pm = document.getElementById("btnInsert10pm");

renderLastRegistered();

function renderLastRegistered() {
  var notes = localStorage.getItem("inpKey");

  inpKey.textContent = notes;
   $("#hour-9").val(localStorage.getItem("to-do"));
   $("#hour-10").val(localStorage.getItem("hour10"));
   $("#hour-12").val(localStorage.getItem("hour12"));
   $("#hour-1").val(localStorage.getItem("hour1"));
   $("#hour-2").val(localStorage.getItem("hour2"));
   $("#hour-3").val(localStorage.getItem("hour3"));
   $("#hour-4").val(localStorage.getItem("hour4"));
   $("#hour-5").val(localStorage.getItem("hour5"));
   $("#hour-6").val(localStorage.getItem("hour6"));
   $("#hour-7").val(localStorage.getItem("hour7"));
   $("#hour-8").val(localStorage.getItem("hour8"));
   $("#hour-9pm").val(localStorage.getItem("hour9pm"));
   $("#hour-10pm").val(localStorage.getItem("hour10pm"));
   



}

btnInsert.addEventListener("click", function(event) {
  event.preventDefault();

  var notes = document.querySelector('#hour-9').value;
  

    localStorage.setItem("to-do", notes);
    renderLastRegistered();
  
  }
);
;

btnInsert10.addEventListener("click", function(event) {
  event.preventDefault();

  var notes10 = document.querySelector('#hour-10').value;
  

    localStorage.setItem("hour10", notes10);
    renderLastRegistered();
  
  }
);
;

btnInsert12.addEventListener("click", function(event) {
  event.preventDefault();

  var notes12 = document.querySelector('#hour-12').value;
  

    localStorage.setItem("hour12", notes12);
    renderLastRegistered();
  
  }
);
;

btnInsert1.addEventListener("click", function(event) {
  event.preventDefault();

  var notes1 = document.querySelector('#hour-1').value;
  

    localStorage.setItem("hour1", notes1);
    renderLastRegistered();
  
  }
);
;

btnInsert2.addEventListener("click", function(event) {
  event.preventDefault();

  var notes2 = document.querySelector('#hour-2').value;
  

    localStorage.setItem("hour2", notes2);
    renderLastRegistered();
  
  }
);
;

btnInsert3.addEventListener("click", function(event) {
  event.preventDefault();

  var notes3 = document.querySelector('#hour-3').value;
  

    localStorage.setItem("hour3", notes3);
    renderLastRegistered();
  
  }
);
;

btnInsert4.addEventListener("click", function(event) {
  event.preventDefault();

  var notes4 = document.querySelector('#hour-4').value;
  

    localStorage.setItem("hour4", notes4);
    renderLastRegistered();
  
  }
);
;

btnInsert5.addEventListener("click", function(event) {
  event.preventDefault();

  var notes5 = document.querySelector('#hour-5').value;
  

    localStorage.setItem("hour5", notes5);
    renderLastRegistered();
  
  }
);
;

btnInsert6.addEventListener("click", function(event) {
  event.preventDefault();

  var notes6 = document.querySelector('#hour-6').value;
  

    localStorage.setItem("hour6", notes6);
    renderLastRegistered();
  
  }
);
;

btnInsert7.addEventListener("click", function(event) {
  event.preventDefault();

  var notes7 = document.querySelector('#hour-7').value;
  

    localStorage.setItem("hour7", notes7);
    renderLastRegistered();
  
  }
);
;

btnInsert8.addEventListener("click", function(event) {
  event.preventDefault();

  var notes8 = document.querySelector('#hour-8').value;
  

    localStorage.setItem("hour8", notes8);
    renderLastRegistered();
  
  }
);
;

btnInsert9pm.addEventListener("click", function(event) {
  event.preventDefault();

  var notes9pm = document.querySelector('#hour-9pm').value;
  

    localStorage.setItem("hour9pm", notes9pm);
    renderLastRegistered();
  
  }
);
;

btnInsert10pm.addEventListener("click", function(event) {
  event.preventDefault();

  var notes10pm = document.querySelector('#hour-10pm').value;
  

    localStorage.setItem("hour10pm", notes10pm);
    renderLastRegistered();
  
  }
);
;

// $(document).ready(function () {
//   // listen for save button clicks
//   $('.saveBtn').on('click', function () {
//     // get nearby values
//     var value = $(this).siblings('.description').val();
//     var time = $(this).parent().attr('id');
//     // save in localStorage
//     localStorage.setItem(time, value);
//     // Show notification that item was saved to localStorage by adding class 'show'
//     $('.notification').addClass('show');
//     // Timeout to remove 'show' class after 5 seconds
//     setTimeout(function () {
//       $('.notification').removeClass('show');
//     }, 5000);
//   });
//   function hourUpdater() {
//     // get current number of hours
//     var currentHour = moment().hours();
//     // loop over time blocks
//     $('.time-block').each(function () {
//       var blockHour = parseInt($(this).attr('id').split('-')[1]);
//       // check if we've moved past this time
//       if (blockHour < currentHour) {
//         $(this).addClass('past');
//       } else if (blockHour === currentHour) {
//         $(this).removeClass('past');
//         $(this).addClass('present');
//       } else {
//         $(this).removeClass('past');
//         $(this).removeClass('present');
//         $(this).addClass('future');
//       }
//     });
//   }
//   hourUpdater();
//   // set up interval to check if current time needs to be updated
//   var interval = setInterval(hourUpdater, 15000);
//   // load any saved data from localStorage
//   $('#hour-9 .description').val(localStorage.getItem('hour-9'));
//   $('#hour-10 .description').val(localStorage.getItem('hour-10'));
//   $('#hour-11 .description').val(localStorage.getItem('hour-11'));
//   $('#hour-12 .description').val(localStorage.getItem('hour-12'));
//   $('#hour-13 .description').val(localStorage.getItem('hour-13'));
//   $('#hour-14 .description').val(localStorage.getItem('hour-14'));
//   $('#hour-15 .description').val(localStorage.getItem('hour-15'));
//   $('#hour-16 .description').val(localStorage.getItem('hour-16'));
//   $('#hour-17 .description').val(localStorage.getItem('hour-17'));
//   // display current day on page
  
// });


