
// Displays day at top of the page
var today = moment();
$('#currentDay').text(today.format('dddd'));

const inpKey = document.getElementById("inpKey");
const btnInsert = document.getElementById("btnInsert");
const btnInsert10 = document.getElementById("btnInsert10");
const btnInsert12 = document.getElementById("btnInsert12")

renderLastRegistered();

function renderLastRegistered() {
  var notes = localStorage.getItem("inpKey");

  inpKey.textContent = notes;
   $("#hour-9").val(localStorage.getItem("to-do"));
   $("#hour-10").val(localStorage.getItem("hour10"));
   $("#hour-12").val(localStorage.getItem("hour12"));


}

btnInsert.addEventListener("click", function(event) {
  event.preventDefault();

  var notes = document.querySelector('#hour-9').value;
  console.log(notes);

    localStorage.setItem("to-do", notes);
    renderLastRegistered();
  
  }
);
;

btnInsert10.addEventListener("click", function(event) {
  event.preventDefault();

  var notes10 = document.querySelector('#hour-10').value;
  console.log(notes10);

    localStorage.setItem("hour10", notes10);
    renderLastRegistered();
  
  }
);
;

btnInsert10.addEventListener("click", function(event) {
  event.preventDefault();

  var notes12 = document.querySelector('#hour-12').value;
  console.log(notes12);

    localStorage.setItem("hour12", notes12);
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


