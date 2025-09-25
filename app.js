let gameSeq=[];
let userSeq=[];

let btns=["yellow" ,"red","green","purple"]
let started = false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress" ,function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelup();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },150);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
   
    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);
    console.log(gameSeq);
    
    //console.log(randIdx);
    //console.log(randcolor);
    //console.log(randbtn);
    gameFlash(randbtn);
}

function checkAns(idx){
    //console.log("current level :",level)

    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        h2.innerHTML=`Game over ! Your score was <b>${level}</b>  <br>press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        } ,150)
        reset();
    }  
    
}

function btnPress(){
   let btn=this;
  userFlash(btn);

  userColor=btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns( userSeq.length-1);
}

let allbtn= document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started-false;
    gameSeq=[];
    userSeq=[];
    level=0;
}