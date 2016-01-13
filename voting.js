$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#votinginfo').show();
  } else if (age === 18) {
    alert("YOU CAN VOTE!");
    $('#votinginfo').show();
  } else {
    $('#under-18').show();
  }
});
