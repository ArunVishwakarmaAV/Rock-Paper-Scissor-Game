let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".Choice");
const msg = document.querySelector("#msg");
let userwintime = document.querySelector("#user-score");
let compwintime = document.querySelector("#comp-score");
let reset = document.querySelector("#reset");
const drawgame = () =>{
    msg.innerHTML = "It was a draw";
    msg.style.backgroundColor = "Orange";
}
const showwinner = (userwin ,userChoice,compChioce) =>{
    if(userwin){
        userScore++;
        userwintime.innerHTML = userScore;
        msg.innerHTML=`You Win! Your ${userChoice} beats ${compChioce}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compwintime.innerHTML = compScore;
        msg.innerHTML=`You Loose! ${compChioce} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}
const playgame = (userChoice) =>{
    const compChioce = genCompChoice();
    if(userChoice === compChioce){
        drawgame();
    }
    else{
        let userwin =true;
        if(userChoice === "rock"){
            userwin = compChioce === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userwin = compChioce === "scissor" ? false : true
    }else{
        userwin = compChioce === "rock" ? false : true
    }
    showwinner(userwin,userChoice,compChioce);
}

};
const genCompChoice = ()=>{
    let arr=["rock","paper","scissor"];
    let random = Math.floor(Math.random()*3);
    return arr[random];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
reset.addEventListener("click",()=>{
    userScore = 0;
    compScore = 0;
    msg.innerHTML = "Play your Move!"
    msg.style.backgroundColor = "#3C3D37";
    userwintime.innerHTML="0";
    compwintime.innerHTML="0";


})
