// Shuffle Function
function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Activate Secondary Nav
$(function() {
  initialize_waypoints();
});

function initialize_waypoints() {
  $('#content').waypoint(
    function(direction){
      if(direction === 'down'){ 
        $('.secondary').addClass('active');
      }
    },
    {offset:'-75%'}
  );
  $('#content').waypoint(
    function(direction){
      if(direction === 'up') {
        $('.secondary').removeClass('active');
              
      }
    },
    {offset:'-75%'}
  );
  
  $('.article').waypoint(
    function(direction){
      if(direction === 'down'){
        $(this).addClass('active');
      }
    },
    {offset:'98%'}
  );
  $('.article').waypoint(
    function(direction){
      if(direction === 'up'){
        $(this).removeClass('active');
      }
    },
    {offset:'100%'}
  );
}