let yourScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let result = document.querySelector("#result")

let yourScore_para = document.querySelector("#yourscore");
let compScore_para = document.querySelector("#compscore");


let compSelected = () =>{
    let choiceArr = ["rock","paper","scissor"];
    let idx = Math.floor(Math.random() * 3 );
    let compChoice = choiceArr[idx];
    return compChoice;
}


let draw=()=>{
    result.style.backgroundColor="rgb(8, 26, 45)";
    result.innerText="its draw";
}

let showWinner = (userWin,compChoice,yourChoice) =>{
    if(userWin){
        yourScore++;
        result.style.backgroundColor="green";
        result.innerText=`you win! ${yourChoice} on ${compChoice}`;
        yourScore_para.innerText=yourScore;
    }else{
        compScore++;
        result.style.backgroundColor="red";
        result.innerText=`you lose! ${yourChoice} by ${compChoice}`;
        compScore_para.innerText=compScore;
    }
}

let playGame=(yourChoice)=>{
    // console.log("your choice "+yourChoice);
    //generating computer choicd
    let compChoice = compSelected();
    // console.log("comp choice "+compChoice);
    //draw conditon
    let userWin = true;
    if(yourChoice === compChoice){
        draw();
    }else{
        if(yourChoice === "rock"){
            userWin = compChoice==="scissor"? true: false;
        }else if(yourChoice === "paper"){
            userWin = compChoice==="rock"? true: false;
        }else{
            userWin = compChoice==="paper"? true: false;
        }
        showWinner(userWin,compChoice,yourChoice);
    }
    
    

}










choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let yourChoice = choice.getAttribute("id");
        playGame(yourChoice);
    })
});
