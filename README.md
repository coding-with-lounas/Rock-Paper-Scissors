# Rock-Paper-Scissors-Game


## Description
***

This is a  Rock-Paper-Scissors game created as part of The Odin Project's challenge. The project features both a command-line interface using Node.js and a browser-based interface using HTML. The game allows you to play against the computer, keeping track of scores over a series of rounds and declaring a winner after a set number of rounds.
## Features

    Command-Line Interface (CLI): Play the game in the terminal using Node.js with user input handled via prompt-sync.
    Browser Interface: Play the game directly in your web browser with a simple HTML interface.
    Score Tracking: Keeps track of scores and announces the winner after 5 rounds.
    Interactive Play: The game interacts with the user, providing feedback and updating scores in real-time.

## How to Run

In Terminal (Node.js):
***
    Clone the Repository
 bash

git clone https://github.com/coding-with-lounas/Rock-Paper-Scissors.git

***
Navigate to the Project Directory

 bash

cd Rock-Paper-Scissors
***
 Install Dependencies
 Install prompt-sync to handle user input in the terminal

bash

npm install prompt-sync

Run the Game
 Execute the script using Node.js:

    bash

    node script.js

    Note: Ensure the require('prompt-sync') line is uncommented in index.js for terminal play.
    
***
In Browser (HTML):

    Open the HTML File
        Open index.html in your preferred web browser.

    Play the Game
        Interact with the game using the provided HTML interface.

    Note: Comment out the require('prompt-sync') line in index.js if you plan to run the game in the browser.

## Project Structure

    script.js: Contains the main game logic for terminal play.
    index.html: Provides the HTML interface for browser-based play.
    README.md: This file, detailing the project.

## How to Play

    Terminal:
        Run node index.js in the terminal.
        Follow the prompts to enter your choice: "rock", "paper", or "scissors".
        View the result and score updates after each round.
        After 5 rounds, the final scores and the winner are displayed.

    Browser:
        Open index.html in a web browser.
        Use the interface to make your choice.
        The game will display results and scores within the browser.

## Contributing

As this is a challenge for The Odin Project, contributions are not needed. However, feedback and suggestions are welcome! If you would like to make improvements or fix issues, feel free to fork the repository and submit a pull request.
License

  This project is a part of The Odin Project's curriculum.
    Inspired by classic Rock-Paper-Scissors gameplay.
    Uses prompt-sync for terminal user input.
