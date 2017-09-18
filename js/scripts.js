$(document).ready(function() {
  var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      var html = '<div class="well"><h1>' + value + ' of ' + suit + '</h1></div>';
      $("#card-list").append(html);
    });
  });
});
