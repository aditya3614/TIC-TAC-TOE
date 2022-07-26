const mainBox= document.querySelector(".box");
const btnX= document.querySelector(".btnX");
const btnO= document.querySelector(".btnO");
const playBoard= document.querySelector(".play-board");
const slider=document.querySelector(".slider");
const allBoxes= document.querySelectorAll("section span");
const player= document.querySelector(".player")
const resultBox= document.querySelector(".result-box");
const welcomeBox= document.querySelector(".welcome");
const welcomeBtnC=document.querySelector(".welcomeC");
const welcomeBtnF=document.querySelector(".welcomeF");
window.onload=()=>{
    for (let i = 0; i < allBoxes.length; i++) {
       allBoxes[i].setAttribute("onclick","boxClicked(this)");      
    }
    welcomeBtnC.addEventListener("click",()=>{
        welcomeBox.classList.add("hide");
        mainBox.classList.remove("hide");
        mainBox.classList.add("show");
        mainBoxf();
    })
    welcomeBtnF.addEventListener("click",()=>{
        welcomeBox.classList.add("hide");
        mainBox.classList.remove("hide");
        mainBox.classList.add("show");
        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].setAttribute("onclick","boxClickedF(this)");      
         }
        mainBoxf();
    })


}






function mainBoxf(){
btnX.addEventListener('click',()=>{
    if(mainBox.classList.contains="show")
    {
        mainBox.classList.remove("show")
    }
    mainBox.classList.add('hide');
    playBoard.classList.add('show');
})

btnO.addEventListener('click',()=>{
    if(mainBox.classList.contains="show")
    {
        mainBox.classList.remove("show")
    }
    mainBox.classList.add('hide');
    playBoard.classList.add('show');
    slider.classList.add('active');
    player.setAttribute("class","player active O");

})
}


let Xicon= "fa-solid fa-x";
let Oicon= "fa-solid fa-o";
//box clickedF function when playing with your friend  

function boxClickedF(element)
{
    if(player.classList.contains("O"))
    {
        element.innerHTML = `<i class="${Oicon}"></i>`;
        slider.classList.remove("active");
        player.classList.remove("O");
        element.setAttribute("id","O");
        
        if(checkWin()==true) 
        {
            console.log("idr aaya")
            winnerBoard("You won the match");
        }
    }
    else
    {
        element.innerHTML = `<i class="${Xicon}"></i>`;
        slider.classList.add("active");
        player.classList.add("O");
        element.setAttribute("id","X")
        
        if(checkWin()==true) winnerBoard("Your Friend won the match");
    }
    element.style.pointerEvents= "none";

    // function for checking how many boxes are left
    let arr=[];
    for (let i = 0; i < allBoxes.length; i++) {
        if(allBoxes[i].childElementCount===0) //checking how many boxes are remaining with no chidrens
        {
            arr.push(allBoxes[i]);
           
        }
     } 
     if(arr.length==0)
     {
        if(checkWin()==false)
        {
            winnerBoard("match draw!!");
        }
     }
    // function for checking how many boxes are left
if(arr.length==0)
{
    if(checkWin()==false)
    {
        winnerBoard("Match Draw");
    }
}

}






// box clicked function when playing with computer
function boxClicked(element)
{
    if(player.classList.contains("O"))
    {
        element.innerHTML = `<i class="${Oicon}"></i>`;
        slider.classList.remove("active");
        element.setAttribute("id","O");
        
        if(checkWin()==true) 
        {
            console.log("idr aaya")
            winnerBoard("You won the match");
        }
    }
    else
    {
        element.innerHTML = `<i class="${Xicon}"></i>`;
        slider.classList.add("active");
        element.setAttribute("id","X")
        
        if(checkWin()==true) winnerBoard("You won the match");
    }
    element.style.pointerEvents= "none";
    if(checkWin()==false)
    {
    bot();
    }

}

function bot(){
 let arr=[];
 for (let i = 0; i < allBoxes.length; i++) {
    if(allBoxes[i].childElementCount===0) //checking how many boxes are remaining with no chidrens
    {
        arr.push(allBoxes[i]);
       
    }
 } 
 if(arr.length==0)
 {
    if(checkWin()==false)
    {
        winnerBoard("match draw!!");
    }
 }
 if(arr.length>0)
 {
 let randomBox= arr[Math.floor(Math.random() * arr.length)]; //we generated a random number for bot which lies between no. of boxes remaining
 if(player.classList.contains("O"))
    {
       randomBox.innerHTML = `<i class="${Xicon}"></i>`;
        setTimeout(() => {
            slider.classList.add("active")
        }, 400);
        randomBox.setAttribute("id","X");
        if(checkWin()==true) winnerBoard("Computer Won the match");
    }
    else
    {
        randomBox.innerHTML = `<i class="${Oicon}"></i>`;
        setTimeout(() => {
            slider.classList.remove("active");
        }, 400);
        randomBox.setAttribute("id","O");
        
        if(checkWin()==true) winnerBoard("Computer Won the match");
    }
    randomBox.style.pointerEvents= "none";
}
}
// console.log(allBoxes[0].id);
// console.log(allBoxes[1].id);
// console.log(allBoxes[2].id);
// // // console.log("khali fokat")
// // allBoxes.id="1";
// // allBoxes[1].setAttribute("id","X");
// allBoxes[0].setAttribute("id","X");
// // allBoxes[2].setAttribute("id","X")
// console.log(allBoxes[0].id);
// console.log(allBoxes[1].id);
// console.log(allBoxes[2].id);
// console.log(allBoxes[1].id);

playerSign="X";
function  checkWin()
{
    if(allBoxes[0].id==allBoxes[1].id && allBoxes[1].id==allBoxes[2].id)
    {
        return true;
    }
    else if(allBoxes[3].id==allBoxes[4].id && allBoxes[4].id==allBoxes[5].id)
    {
        return true;
    }
    else if(allBoxes[6].id==allBoxes[7].id && allBoxes[7].id==allBoxes[8].id)
    {
        return true;
    }
    else if(allBoxes[0].id==allBoxes[3].id && allBoxes[3].id==allBoxes[6].id)
    {
        return true;
    }
    else if(allBoxes[1].id==allBoxes[4].id && allBoxes[4].id==allBoxes[7].id)
    {
        return true;
    }
    else if(allBoxes[2].id==allBoxes[5].id && allBoxes[5].id==allBoxes[8].id)
    {
        return true;
    }
    else if(allBoxes[0].id==allBoxes[4].id && allBoxes[4].id==allBoxes[8].id)
    {
        return true;
    }
    else if(allBoxes[2].id==allBoxes[4].id && allBoxes[4].id==allBoxes[6].id)
    {
        return true;
    }
    else
    {
        return false
    }
    

}
const wonText=document.querySelector(".won-text");
function winnerBoard(str)
{
    console.log(str)
    wonText.innerHTML=str;
    playBoard.classList.remove("show");
    playBoard.classList.add("hide");
    resultBox.classList.add("show");
}
const replayBtn=document.querySelector(".btn-replay");
replayBtn.addEventListener("click",()=>{
    // resultBox.classList.remove("show");
    // resultBox.classList.add("hide");
    // mainBox.classList.remove("hide");
    // mainBox.classList.add("show");
    location.reload();
})