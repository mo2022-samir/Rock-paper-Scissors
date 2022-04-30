
// function to decide computer choice to start game 
function computerPlay(){
    let num = Math.random()*100;
    // console.log(num);
    let computer_result;
    if (num > 0 && num < 33){
        computer_result = "rock";
    }else if (num > 33 && num < 66){
        computer_result  = "paper";
    }else if (num > 66 && num <= 100){
        computer_result = "scissor";
    }
    return computer_result;
}


// function to play round from game 
function playRound(playerSelection, computerSelection) {
    /* we here declare new variable
       variable player we create it to make input from insenstive
       like (Rock, ROCK, rock), so i take variable and convert it.
    */ 
    let player = playerSelection.toLowerCase();
    if (player === 'rock' && computerSelection === 'scissor')
        return player;
    else if (player === "paper" && computerSelection === "rock")
        return player;
    else if (player === "scissor" && computerSelection === "paper")
        return player;
    else if (player === "scissor" && computerSelection === "rock")
        return computerSelection;
    else if (player === "paper" && computerSelection === "scissor")
        return computerSelection;
    else if (player === "rock" && computerSelection === "paper")
        return computerSelection;
    else if (player ===  computerSelection)
        return 0;
    else
        return null;
}


// function game to reapet function Playround n of times

function game(){
    
    let player_score = 0 ;
    let computer_score = 0;
    
    for (let i = 0; i < 5; i++) {
        
        const playerSelection = prompt("Enter choice from (rock , paper , scissor): "); //TAKE input from User
        
        const computerSelection = computerPlay();
        
        console.log(player_score + " " + computer_score);
        console.log(playerSelection +  " " + computerSelection);
        
        let func_reslut = playRound(playerSelection, computerSelection);
        
        if (func_reslut === playerSelection.toLowerCase()) {
            player_score++;
            console.log("You win! " + playerSelection.toLowerCase() + " beats " + computerSelection);
        } 
        else if (func_reslut === computerSelection){
            computer_score++;
            console.log("You lose! " + computerSelection + " beats " + playerSelection.toLowerCase());
        } 
        else if (playerSelection.toLowerCase() === computerSelection){
            console.log("Draw " + playerSelection + " equal " + computerSelection);   
        } 
        else {
            console.log("Enter Valid from (rock , paper , scissor)");
        }
    }

    //comparesion between player_score & computer_Score & choose Winner
    if (player_score > computer_score) {
        console.log("You Win Competetation " + "PLAYER SCORE = " + player_score + " , COMPUTER SCORE = " + computer_score);
    } 
    else if (player_score === computer_score){
        console.log("Draw, Try Again " + "PLAYER SCORE = " + player_score + " , COMPUTER SCORE = " + computer_score);
    }
    else{
        console.log("You Lose Competetation, Computer Win " + "PLAYER SCORE = " + player_score + " , COMPUTER SCORE = " + computer_score);
    }
}

game();