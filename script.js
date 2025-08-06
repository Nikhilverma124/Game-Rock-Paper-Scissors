let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    // rock , paper ,scissor
    const option=["rock","paper","scissors"];

    Math.floor(Math.random()*3);
}

const playGame=(userChoice)=>{
    console.log("userChoice =",userChoice);


}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("clicked",userChoice);
        playGame(userChoice)
    });
});