let gameSeq= [];
let userSeq= [];
let started= false;
let level= 0;
let btns= ["red", "blue", "yellow", "green"]
let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game started");
        started= true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq= [];
    level++;
    h2.innerText= `Level ${level}`;
    let ranIdx= Math.floor(Math.random()*3);
    let ranCol= btns[ranIdx];
    let ranBtn= document.querySelector(`.${ranCol}`)

    gameSeq.push(ranCol);
    btnFlash(ranBtn);
}

function checkAns(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,750);
        }
    }
    else{
        h2.innerHTML= `Game over! Your score is <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250)
        reset();
    }
}

function btnPress(){
    let btn= this;
    btnFlash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started= false;
    gameSeq= [];
    userSeq= [];
    level= 0;
}