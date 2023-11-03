// Get a reference to the game container
var gameContainer = document.getElementById("game-container");
var slime1 = new Slime(
    "Slimey",
    "Male",
    10,
    5,
    50,
    30,
    "Swordsman",
    5,
    "Super Slime",
    "Slime Family",
    "Attack Skill",
    "Defense Skill",
    "Healing Skill",
    "Magic Skill"
);
// Initial message to display
var initialMessage = "Type Start to get started- here is first slime: "+ slime1.name;

// Set the initial message as the content of the game container
gameContainer.textContent = initialMessage;
var command = document.getElementById("user-input");
command.addEventListener("keydown", function (e) {
    if(e.code ==="Enter"){
        submitCommand();
    }
});

function submitCommand() {
    // Replace this with your logic to handle the user's input
    var userInput = document.getElementById('user-input').value;
    
    // Clear the input field
    document.getElementById('user-input').value = '';
}