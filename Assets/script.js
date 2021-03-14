
// Displays day at top of the page
var today = moment();
$('#currentDay').text(today.format('dddd'));

const inpKey = document.getElementById("inpKey");
const btnInsert = document.getElementById("btnInsert");

renderLastRegistered();

function renderLastRegistered() {
  var notes = localStorage.getItem("inpKey");

  inpKey.textContent = notes;

}

btnInsert.addEventListener("click", function(event) {
  event.preventDefault();

  var notes = document.querySelector('#inpKey').value;

    localStorage.setItem("To do", notes);
    renderLastRegistered();
  }
);
;

