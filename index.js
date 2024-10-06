
humanScore = 0;
computerScore = 0;


function getComputerChoice() {
    let random = Math.floor(Math.random()*100)

    if(random<=33){
        return "rock"
    } else if(random<=66){
        return "paper"
    }else if(random>=66){
        return "scissors"
    }
}



function getHumanChoice() {
   return prompt("Choose Rock Paper or Scissors")
}




function playRound(humanChoice, computerChoice){

   let humanAnswer = humanChoice.toLowerCase()

switch(computerChoice){
    case "rock":
        console.log("computer chose rock!")

        if(humanAnswer === "paper"){
            console.log("Paper beats Rock! Human Wins!");
            humanScore+=1;
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }else if(humanAnswer === "rock"){
            console.log("its a tie!")
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }else{
            console.log("Computer Wins!")
            computerScore+=1
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }
        
        break;
    case "paper":
        console.log("computer chose Paper!")

        if(humanAnswer === "scissors"){
            console.log("Scissors beats Paper! Human Wins!");
            humanScore+=1;
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }else if(humanAnswer === "paper"){
            console.log("its a tie!")
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }else{
            console.log("Computer Wins!")
            computerScore+=1
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }
        
        break;
    case "scissors":
        console.log("computer chose Scissors!")

        if(humanAnswer === "rock"){
            console.log("Rock beats Scissors! Human Wins!");
            humanScore+=1;
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }else if(humanAnswer === "paper"){
            console.log("its a tie!")
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }else{
            console.log("Computer Wins!")
            computerScore+=1
            console.log("Human Score: "+ humanScore)
            console.log("Computer Score: "+ computerScore)
        }
        break;
    
}
    
}

const humanSelection = getHumanChoice()

const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);