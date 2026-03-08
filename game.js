let gameSequence=[];
let usersequence=[];
let btns=["yellow", "red","purple","skyblue"];
let started=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
    }
    levelup();
}); 

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}
//user
function userFlash(btn){
  btn.classList.add("user-flash");
  setTimeout(function(){
    btn.classList.remove("user-flash");
  },250);
}

function levelup(){
    usersequence=[];
    level++;
    h3.innerText=`Level ${level}`;
    //random color
    let randomInd = Math.floor(Math.random() * btns.length);
    let randomCol=btns[randomInd];
    let randombtn=document.querySelector(`.${randomCol}`);
    gameSequence.push(randomCol);
    gameFlash(randombtn);
}

function check(ind){
    if(usersequence[ind]===gameSequence[ind]){
        if(usersequence.length==gameSequence.length){
            setTimeout(levelup,1000);
        }
    }else{
        h3.innerHTML=`Game Over! Your score was<b> ${level}</b><br> Enter any key to start game again`;
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let usercol=btn.getAttribute("id");
    usersequence.push(usercol);

    check(usersequence.length-1);
}
let allbtns=document.querySelectorAll(".divs");

for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    usersequence=[];
    gameSequence=[];
    level=0;
}