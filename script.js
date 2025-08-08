let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");

let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");

const genCompChoice=()=>{
    // rock , paper ,scissor
    const option=["rock","paper","scissors"];

    const random=Math.floor(Math.random()*3);
    return option[random];
    
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("you win");
        userScore++;
        uScore.innerText=userScore;
        msg.innerText=`You Win!.Your ${userChoice} beat ${compChoice} `;
        msg.style.backgroundColor="green";
    }else{
        console.log("you lose !");
        compScore++;
        cScore.innerText=compScore;
        msg.innerText=`You Lose!. ${compChoice} beat Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("userChoice =",userChoice);

   const compChoice=genCompChoice();

   console.log("compchoice",compChoice);

   if(userChoice === compChoice){
        drawGame();
   }else{
    let userWin=true;
    if(userChoice==="rock"){

        userWin=compChoice==="paper" ? false :true;

    }else if(userChoice==="paper"){
        userWin=compChoice==="rock" ?true : false;
    }else{
        userWin=compChoice==="rock" ? false :true;
    }

    showWinner(userWin, userChoice, compChoice);
   }

}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("clicked",userChoice);
        playGame(userChoice)
    });
});


//this is the final code