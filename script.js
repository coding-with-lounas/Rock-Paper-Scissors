function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0:
         console.log("rock");
         break;
        case 1:
        console.log("paper");
         break;
        case 2:
            console.log("Scissors");
         break;
    }
};
function getHumanChoice(){
const validCHoice = ['rock','paper','scissor']; 
while(true){
    const humainChoice = prompt("Enter 'rock' or 'paper'or 'scissor'");
    if(validCHoice.includes(humainChoice)){
        console.log("you choose : "+ humainChoice);
    }else{
        console.log("invalid choice.Please try again");
    }
}
}

// getComputerChoice();
getHumanChoice();