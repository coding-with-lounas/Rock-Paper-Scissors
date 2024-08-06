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
const validChoice = ['rock','paper','scissor']; 
while(true){
    const humanChoice = prompt("Enter 'rock' or 'paper'or 'scissor' : ").toLowerCase();
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
    resultMessage = drawMessage + `both chose ${humanChoice} .`
 }else if (humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissor" && computerChoice === "paper" ||
            humanChoice === "rock" && computerChoice ==="scissor")
{ resultMessage=winMessage + `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beat ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
}else{
 resultMessage=loseMessage + `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} be defeated ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`; 

}
console.log(resultMessage);
}

const computerChoice =getComputerChoice();
const humanChoice =getHumanChoice();
playRound(humanChoice,computerChoice) ;