// const  prompt = require("prompt-sync")();

let humanScore = 0;
let computerScore = 0; 



function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0:
        //  console.log("computer choose a rock");
         return "rock" ;
         break;
        case 1:
        // console.log("computer choose a paper");
         return "paper" ;
         break;
        case 2:
            // console.log("computer choose a Scissor");
            return "scissor" ;
         break;
    }
};
function getHumanChoice(){
const validChoice = ['rock','paper','scissors']; 
while(true){
    const humanChoice = prompt("Enter 'rock' or 'paper'or 'scissors' : ").toLowerCase();
    // console.log(`input received ${humanChoice}`);
    if(validChoice.includes(humanChoice)){
      console.log("you choose : "+ humanChoice);
        return humanChoice ;
    }else{
        console.log("invalid choice.Please try again");
    }
}
};
const playRound =(humanChoice,computerChoice)=>{
 let loseMessage = "You lose !";
 let winMessage ="you win !";
 let drawMessage ="it's draw !";
 let resultMessage ;
 if(humanChoice===computerChoice){
    resultMessage = drawMessage + `both chose ${humanChoice} .`;
 }else if (humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "rock" && computerChoice ==="scissor")
{ resultMessage=winMessage + `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beat ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
   humanScore++;
}else{
 resultMessage=loseMessage + `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} be defeated ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`; 
  computerScore++;
}
console.log(resultMessage);
};


const playGame =()=>{
    while (true) {
 let numberOfGame = 0; 
 while(numberOfGame<5){
  const computerChoice =getComputerChoice();
   const humanChoice =getHumanChoice();
   playRound(humanChoice,computerChoice) ;  
   numberOfGame ++; 
 }
 console.log(`finale score - You : ${humanScore},computer : ${computerScore}`);
 if(humanScore>computerScore){console.log("You won this game,congratulations !");}
 else{console.log("Sorry , you lost the game");} 
 const playAgain = prompt("do you want play again (y/n)? ").toLowerCase();
 if( playAgain != "y") break;
}
};
playGame();