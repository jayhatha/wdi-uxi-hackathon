$(document).ready(() => {
  // initializing materialize stuff
M.AutoInit();
$('#alert_close').click(function(){
    $( "#alert_box" ).fadeOut( "slow", function() {
    });
  });
})
