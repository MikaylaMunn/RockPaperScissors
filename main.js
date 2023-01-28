// Declares variable throughout function

let userChoice, computerOptions, computerChoice, result, wins, ties, losses;

wins = 0;
ties = 0;
losses = 0;
let winItem = document.getElementById("wins"); // for the end to display win easyFunction
let loseItem = document.getElementById("losses"); // for the end to display lose easyFunction
let tieItem = document.getElementById("ties"); 
let invalid = document.getElementById('titleCalled')// for the end to display tie easyFunction
console.log("Let's Play Rock, Paper, Scissors");
console.log("Choose 'r,' 'p,' or 's,' for the rock, paper, scissors");


// Define the name of the user's variable where indicated inside function where indicated
document.addEventListener('keyup', function (event) {

    // HIDE ALL IMAGES
    let allImages = document.getElementsByClassName('image');
    for (let i = 0; i < allImages.length; ++i){
       allImages[i].classList.add('hidden');
    }
// REGISTER USER'S CHOICE
    if(event.keyCode === 82) {
        document.getElementById("rocks").classList.remove("hidden") // if element is selected it pops on screen
        // Define user's variable here as "rock";
        userChoice = "rock";
        
    }
    else if (event.keyCode === 80) {
        // for picture to show up on screen
        document.getElementById("paper").classList.remove("hidden") // if element is selected it pops on screen
        // Define user's variable here as "paper";
        userChoice = "paper";
    }
    else if (event.keyCode === 83) {
        // for picture to show up on screen
        document.getElementById("scissors").classList.remove("hidden") 
        userChoice = "scissors";
    }
     else {
        // Define user's variable = "Please press r, p, or s";
         console.log("invalid key, please press a valid key")
         invalid.innerText = `invalid key, please press a valid key`
         return
       
     }
    invalid.innerText ="Let's Play Rock, Paper, Scissors"
    console.log (userChoice);

    
// REGISTER COMPUTER'S CHOICE
   computerOptions = Math.floor(Math.random() * 3);
   if (computerOptions === 0) {
       // Pictures for computer to choose
       document.getElementById("rocksImg").classList.remove("hidden")  // if element is selected it pops on screen
       // Define computer variable as "rock";
       computerChoice = "rock";
    }
    else if(computerOptions === 1) {
        document.getElementById("paperImg").classList.remove("hidden") // if element is selected it pops on screen
        // Define computer variable as "paper";
        computerChoice = "paper";
    }
    else {
        // if element is selected it pops on screen
        document.getElementById("scissorsImg").classList.remove("hidden")
        // Define computer variable as "scissors";
        computerChoice = "scissors";
    }
    
    if (userChoice !== 'an invalid key') {
        compare (userChoice, computerChoice);
        let msg = document.getElementById ("tally-words")
        msg.innerHTML = result;
        // comparing user choice and computer for console log
        console.log("You chose " + userChoice + '!\nthe computer chose ' + computerChoice + "!\n" + result + "\n" + "You have won! " + wins + " games, " + "tied " +  ties + " games, and lost " + losses + " games.");
    } else {
        console.log('You chose ' + userChoice + "! Please choose  'r,' 'p,' or 's' for rock, paper, or scissors!" );
    }
})
    /* Comparison function*/
    function compare(user, computer) {
        let results = document.getElementById("tally-words")
        
        if(user === computer) {
            ties++;
            result = "It's a tie!"
        } else if (user === "rock" && computer === "scissors") {
            wins++
            result = "You won!"
        } else if (user === "paper" && computer === "rock") {
            wins++
            result = "You won!"
        } else if (user === "scissors" && computer === "paper") {
            wins++
            result = "You won!"
        } else {
            losses++
            result = "You lose!"
        }
       easyUpdate(result);
/* Console log*/
results.innerHTML = result;
console.log(result);

}
// Easy up date for running total to be displayed 

function easyUpdate (userInput) {
    winItem.innerText = wins;
    loseItem.innerText = losses;
    tieItem.innerText = ties;
    result.innerText = userInput;
    console.log(wins, losses, ties);
}
   
   