
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

console.log(getComputerChoice())

function getHumanChoice() {
   return prompt("Choose Rock Paper or Scissors")
}

console.log(getHumanChoice())


function playRound(humanChoice, computerChoice){

    humanChoice
    
}

const humanSelection = getHumanChoice()

const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);