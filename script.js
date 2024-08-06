

let humanScore = 0;
let computerScore = 0; 



function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0:
         console.log("computer choose a rock");
         return rock ;
         break;
        case 1:
        console.log("computer choose a paper");
         return paper ;
         break;
        case 2:
            console.log("computer choose a Scissor");
            return scissor ;
         break;
    }
};
function getHumanChoice(){
const validCHoice = ['rock','paper','scissor']; 
while(true){
    const humainChoice = prompt("Enter 'rock' or 'paper'or 'scissor'").toLowerCase;
    if(validCHoice.includes(humainChoice)){
        console.log("you choose : "+ humainChoice);
    }else{
        console.log("invalid choice.Please try again");
    }
}
};
const playRound =(humainChoice,computerChoice)=>{
 
}

const computerChoice =getComputerChoice();
const humainChoice =getHumanChoice();