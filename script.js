let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    var temp = Math.floor(Math.random()*10);
    console.log(temp);
     return temp;
}

const compareGuesses = (userGuess, computerGuess, target) =>{
    console.log('user:' + userGuess);
    console.log('comp:' +computerGuess);
    console.log('target:' +target);
 
   /* if(userGuess === computerGuess){
        console.log('equals');
        return true;
    }
    */
   if((Math.abs(target - computerGuess) > Math.abs(target - userGuess)) || (userGuess === computerGuess)){
        console.log('usr win');
        return true;
    } else{
        console.log('comp wins');
        return false;
    }
}
    
const updateScore = winner =>{
    if(winner === 'human'){
        humanScore++;
    }else if(winner === 'computer'){
        computerScore++;
    }
}

const advanceRound = () =>{
    currentRoundNumber++;
} 
