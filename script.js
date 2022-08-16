const choices = ["rock","paper","scissor"];

// function to decide computer choice to start game 
function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];}

    // function to decide player choice to start game 
function player(){
    const input = prompt("Enter choice from (rock , paper , scissor): "); //TAKE input from User
    const reform_input = input.toLowerCase();
    console.log(reform_input);
    // check input from user
    if (choices.includes(reform_input))
        return reform_input;
    else
        console.log("Enter valid option [rock , paper , scissor]")
    
}

// function to play round from game 
function playRound(playerSelection, computerSelection) {
    if (playerSelection ===  computerSelection)
        return 0;
    else if ( 
        (playerSelection === 'rock' && computerSelection === 'scissor')||
        (playerSelection === "paper" && computerSelection === "rock")||
        (playerSelection === "scissor" && computerSelection === "paper")      
    )   {
        return playerSelection;
    } else
        return computerSelection;
}

// function game to reapet function until somebody reach to 5
function game(){
    
    let player_score = 0 ;
    let computer_score = 0;
    
    while(true) {
        
        const playerSelection = player();
        const computerSelection = computerPlay();
        
        let func_reslut = playRound(playerSelection, computerSelection);
        
        if (func_reslut === playerSelection) 
            player_score++;
        else if (func_reslut === computerSelection)
            computer_score++;
        else 
            console.log("Tie");    
        
        
        console.log("player choice : " + playerSelection +  "\n" 
                    + "computer choice : " + computerSelection);
        console.log( "player score : " + player_score + "\n" 
                    + "computer score :" + computer_score);
                    
        // check score for everyone if reach 5
        if (player_score == 5|| computer_score == 5)
            break;
    }

    //comparesion between player_score & computer_Score & choose Winner
    if (player_score > computer_score) {
        console.log("You Win Competetation " + "PLAYER SCORE = " +
        player_score + " , COMPUTER SCORE = " + computer_score);
    } 
    else if (player_score === computer_score){
        console.log("Draw, Try Again " + "PLAYER SCORE = " + 
        player_score + " , COMPUTER SCORE = " + computer_score);
    }
    else{
        console.log("You Lose Competetation, Computer Win " + 
        "PLAYER SCORE = " + player_score + " , COMPUTER SCORE = " +
        computer_score);
    }
}

game();