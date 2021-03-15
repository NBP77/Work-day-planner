
// Displays day at top of the page
var today = moment();
$('#currentDay').text(today.format('dddd'));

const inpKey = document.getElementById("inpKey");
const btnInsert = document.getElementById("btnInsert");

renderLastRegistered();

function renderLastRegistered() {
  var notes = localStorage.getItem("inpKey");

  inpKey.textContent = notes;
   $("#hour-9").val(localStorage.getItem("to-do"));

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



