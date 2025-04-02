function playGame (playerchoice){
    const choice = ["Rock", "Paper", "Scissor"];
    const Compchoice= choice[Math.floor(Math.random()*3)];
    let result="";
    if (playerchoice===Compchoice){
        result="It is a Draw";
    }
    else if ((playerchoice==="Rock" && Compchoice==="Scissor")||(playerchoice==="Paper" && Compchoice==="Rock")||(playerchoice==="Scissor" && Compchoice==="Paper")){
        result=`You win as ${playerchoice} wins ${Compchoice}`;
    }
    else{
        result=`You lose as ${Compchoice} wins over ${playerchoice}`;
    }
    document.getElementById("result").textContent=result
}
