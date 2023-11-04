// Get a reference to the game container
var gameContainer = document.getElementById("game-container");
var gameState = "";  // This variable can track where the user is in the game, combined with the user input to generate the next page. 
var prevGameState = ""; // to save where the user was (in case they go to inventory / my team menu) -the "back to game" command uses this


var command = document.getElementById("user-input");
command.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        submitCommand();
    }
});

// Initial message to display
var initialMessage = "Type Start to get started";
// Set the initial message as the content of the game container
gameContainer.textContent = initialMessage;

// controls the game. combine user input with gameState to generate the next prompt
function submitCommand() {
    var userInput = document.getElementById('user-input').value.toLowerCase();
    // Clear the input field
    document.getElementById('user-input').value = '';

    var prompt = userInput + " " + gameState;
    var newPrompt = getPrompt(prompt,gameContainer.textContent);
    gameContainer.textContent ='';
    typeText(newPrompt);
    console.log("pre game state: "+prevGameState);
    console.log("Game State: "+gameState)
}

function typeText(text){
    let index = 0;

    function type() {
        if (index <text.length){
            gameContainer.textContent += text[index];
            index++;
            setTimeout(type, 100) // adjust delay as needed
        }
    }
    type();
}