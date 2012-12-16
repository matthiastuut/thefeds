//Tournaments Web App *(Backbone example application)*
/**
 *	Tournaments Web App (Backbone example application)
 *	
 *
 */

// Anonymous self-invoked function with jQuery mapped to $


// # Game data #
gameData = [
  { number: "1", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "1"},
  { number: "2", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "4"},
  { number: "3", team1: "Boomsquad", team1Score: "0", team2: "Burning Snow", team2Score: "4"},
  { number: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "4"},
  { number: "5", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "3"}
];

// Kickstart the application by creating an instance of GameView
var sets = new GameView();