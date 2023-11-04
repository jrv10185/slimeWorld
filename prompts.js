function getPrompt(prompt,msg) {
    var isValid = false;
    do {  //do - while loop checks for valid entry
        switch (prompt) {
            case "start ":
                msg = "Welcome to the Farm!";
                isValid = true;
                gameState = "farm"
                prevGameState= prompt;
                break;
        };
    } while (isValid = false);
    return msg;
}