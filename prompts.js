function getPrompt(prompt, msg) {
    var isValid = false;
    // need to check for the permanent commands first and skip the do-while loop if found
    if (prompt.startsWith("my team")) {
        //show my team menu (change msg)
        //change gameState to myTeam (the case can then be "menuItem myTeam" )

    } else if (prompt.startsWith("inventory")) {
        //show inventory menu (see comments for my team)
    } else if (prompt.startsWith("back to game")) {
        //go back to game
        //getPrompt(prevGameState,"");
    } else if (prompt.startsWith("save and exit")) {
        //save and exit
    } else if (prompt.startsWith("delete info and start over")) {
        //delete info and start over

    } else {
        do {  //do - while loop checks for valid entry
            switch (prompt) {
                case "start ":
                    msg = "Welcome to the Farm!";
                    isValid = true;
                    gameState = "farm"
                    prevGameState = prompt;
                    break;
            };
        } while (isValid = false);
    }
    return msg;
}
