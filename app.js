let boxes=document.querySelectorAll(".box");   //we want to select all boxes so we mention its class
let resetbtn=document.querySelector("#reset-btn");  // id reset btn
let newGmaeBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");  //. bcuz it was class
let msg=document.querySelector("#msg");  //# bcuz it was id

let turn0=true;  // playerx and player0 are 2 players
//if it is player0 we do true, if it is player x we do turn0 as false

const winpatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,5,6],[6,7,8]
];   // made an array that has the patterns where we can win, eg [0,1,2] means playerx is at index 0, then 1 thne 2 so he wins

//we want some event to ocuur at each click on box

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0==true)   // if it is player 0's turn
            {
                box.innerText="0";
                turn0=false;   //
            }
            else{
                box.innerText="X";
                turn0=true;
            }
            box.disabled=true;  // we do not want that on clicking the same button twice the value changes again, 
            //we want the entered value to save permanently

            checkWinner();
    });

});



const disableboxes=()=>{
    for(let box of boxes){
            box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
            box.disabled=false;
            box.innerText="";
    }
    
};


const showWinner=(winner)=>{
    msg.innerText= `Congratulations, Winner is ${winner}`;  // not single quotes ` is to be used
    msgContainer.classList.remove("hide");
    disableboxes();

};




const checkWinner=()=>{

    for(let pattern of winpatterns){
        //boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]  // we go in boxes to check at index with value pattern[0]
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
            {
                if(pos1val===pos2val && pos2val===pos3val){
                    console.log("winner", pos1val);
                    
                    showWinner(pos1val);  // winner will be at value at pos1val, i.e either 0 or x
                 }    
            }

            
    }
};

    const resetGame=()=>{
        turn0=true;
        enableboxes();
        msgContainer.classList.add("hide");
    }

    newGmaeBtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);

    

    



