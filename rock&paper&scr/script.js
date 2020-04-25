document.querySelector(".paperUser").addEventListener('click', clicker);
document.querySelector(".rockUser").addEventListener('click', clicker);
document.querySelector(".scissorsUser").addEventListener('click', clicker);
let paperComp=document.querySelector(".paperComp");
let rockComp=document.querySelector(".rockComp");
let scissorsComp=document.querySelector(".scissorsComp");
let heart1=document.querySelector(".heart1");
let heart2=document.querySelector(".heart2");
let heart3=document.querySelector(".heart3");
let heart4=document.querySelector(".heart4");
let heart5=document.querySelector(".heart5");
let heart6=document.querySelector(".heart6");
let winner=document.querySelector(".winner");
let next=document.querySelector(".next");
let nGame=document.querySelector(".newGame");
nGame.addEventListener("click", game);
next.addEventListener("click", round);
const mass=["paper","rock","scissors"];
let rounds=1;
document.querySelector(".roundNum").innerHTML=`Round ${String(rounds)}`;
let loseYou=0;
let loseComp=0;
let userAns;
let compAns;
let hearts=[heart1,heart2,heart3,heart4,heart5,heart6];
let sel=document.querySelectorAll("button");
function game(){
    nGame.classList.add("inv");
    nGame.classList.remove("showNew");
    rounds=1;
    document.querySelector(".roundNum").innerHTML=`Round ${String(rounds)}`;
    sel.forEach(ele => {
        ele.classList.remove("selected");
    }); 
    hearts.forEach(elements => {
        elements.classList.remove("heartout");
        elements.classList.remove("heartout:before");
    });
    winner.innerHTML="";
    loseComp=0;
    loseYou=0;
    document.querySelector(".paperUser").removeAttribute("disabled");
    document.querySelector(".rockUser").removeAttribute("disabled");
    document.querySelector(".scissorsUser").removeAttribute("disabled");
}
function round(){
    next.classList.add("inv");
    next.classList.remove("show");
   sel.forEach(element => {
       element.classList.remove("selected")
   }); 
   winner.innerHTML="";
   document.querySelector(".paperUser").removeAttribute("disabled");
    document.querySelector(".rockUser").removeAttribute("disabled");
    document.querySelector(".scissorsUser").removeAttribute("disabled");
}

function heartout(heart){
    heart.classList.add("heartout");
    heart.classList.add("heartout:before");
}
function clicker(){
    rounds++;
    document.querySelector(".roundNum").innerHTML=`Round ${String(rounds)}`;
    this.classList.add("selected");
    let rand = Math.floor(Math.random() * mass.length);//random
    compAns=mass[rand];
    
    if(this.classList.contains("paperUser")){
        userAns=mass[0];
    }
    else if(this.classList.contains("rockUser")){
        userAns=mass[1];
    }
    else if(this.classList.contains("scissorsUser")){
        userAns=mass[2];
    }
    document.querySelector(".paperUser").setAttribute("disabled", "disabled");
    document.querySelector(".rockUser").setAttribute("disabled", "disabled");
    document.querySelector(".scissorsUser").setAttribute("disabled", "disabled");
    if (userAns==compAns){
        let go="."+compAns+"Comp";
        let ans=document.querySelector(go);
        ans.classList.add("selected");
        winner.innerHTML="Its a draw";
        next.classList.remove("inv");
        next.classList.add("show");
        next.innerHTML="Next round";
    }
    else if (userAns=="paper"&&compAns=="scissors"){
       scissorsComp.classList.add("selected");
       winner.innerHTML="You lost this round";
       loseYou++;
       switch(loseYou){
           case 1:
                heartout(heart1);
                next.classList.remove("inv");
                next.classList.add("show");
                next.innerHTML="Next round";
                break;
           case 2:
               heartout(heart2);
               next.classList.remove("inv");
               next.classList.add("show");
                next.innerHTML="Next round";
               break;
            case 3:
                heartout(heart3);
                winner.innerHTML="You lost this game";
                nGame.classList.remove("inv");
                nGame.classList.add("showNew");
                nGame.innerHTML="New game";
            
                break;
                
       }

    }
    else if (userAns=="paper"&&compAns=="rock"){
        rockComp.classList.add("selected");
        winner.innerHTML="You won this round";
        loseComp++;
        switch(loseComp){
            case 1:
                 heartout(heart4);
                 next.classList.remove("inv");
                next.classList.add("show");
                next.innerHTML="Next round";
                 break;
            case 2:
                heartout(heart5);
                next.classList.remove("inv");
               next.classList.add("show");
                next.innerHTML="Next round";
                break;
             case 3:
                 heartout(heart6);
                 winner.innerHTML="You won this game";
                 nGame.classList.remove("inv");
                nGame.classList.add("showNew");
                nGame.innerHTML="New game";
                
                 break;
        }

    }
    else if (userAns=="rock"&&compAns=="paper"){
        paperComp.classList.add("selected");
        winner.innerHTML="You lost this round";
        loseYou++;
       switch(loseYou){
           case 1:
                heartout(heart1);
                next.classList.remove("inv");
                next.classList.add("show");
                next.innerHTML="Next round";
                break;
           case 2:
               heartout(heart2);
               next.classList.remove("inv");
               next.classList.add("show");
                next.innerHTML="Next round";
               break;
            case 3:
                heartout(heart3);
                winner.innerHTML="You lost this game";
                nGame.classList.remove("inv");
                nGame.classList.add("showNew");
                nGame.innerHTML="New game";
                
                break;
       }
    }
    else if (userAns=="rock"&&compAns=="scissors"){
        scissorsComp.classList.add("selected");
        winner.innerHTML="You won this round";
        loseComp++;
        switch(loseComp){
            case 1:
                 heartout(heart4);
                 next.classList.remove("inv");
                next.classList.add("show");
                next.innerHTML="Next round";
                 break;
            case 2:
                heartout(heart5);
                next.classList.remove("inv");
               next.classList.add("show");
                next.innerHTML="Next round";
                break;
             case 3:
                 heartout(heart6);
                 winner.innerHTML="You won this game";
                 nGame.classList.remove("inv");
                nGame.classList.add("showNew");
                nGame.innerHTML="New game";
                break;
        }
    }
    else if (userAns=="scissors"&&compAns=="paper"){
        paperComp.classList.add("selected");
        winner.innerHTML="You won this round";
        loseComp++;
        switch(loseComp){
            case 1:
                 heartout(heart4);
                 next.classList.remove("inv");
                next.classList.add("show");
                next.innerHTML="Next round";
                 break;
            case 2:
                heartout(heart5);
                next.classList.remove("inv");
               next.classList.add("show");
                next.innerHTML="Next round";
                break;
             case 3:
                 heartout(heart6);
                 winner.innerHTML="You won this game";
                 nGame.classList.remove("inv");
                nGame.classList.add("showNew");
                nGame.innerHTML="New game";
                break;
        }
    }
    else if (userAns=="scissors"&&compAns=="rock"){
        rockComp.classList.add("selected");
        winner.innerHTML="You lost this round";
        loseYou++;
        switch(loseYou){
            case 1:
                 heartout(heart1);
                 next.classList.remove("inv");
                next.classList.add("show");
                next.innerHTML="Next round";
                 break;
            case 2:
                heartout(heart2);
                next.classList.remove("inv");
               next.classList.add("show");
                next.innerHTML="Next round";
                break;
             case 3:
                 heartout(heart3);
                 winner.innerHTML="You lost this game";
                 nGame.classList.remove("inv");
                nGame.classList.add("showNew");
                nGame.innerHTML="New game";
                
                 break;
        }
    }

}
