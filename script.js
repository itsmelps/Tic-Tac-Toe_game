let start_button=document.querySelector("#start-button");
let container=document.querySelector("#container")
let boxes=document.querySelectorAll(".box");
let turn_tracker=document.querySelector(".turn_tracker");
let message_container=document.querySelector(".message_container");
let message=document.querySelector("#message");
let play_again=document.querySelector("#play_again");
let reset_game=document.querySelector("#reset_game");

start_button.addEventListener("click",()=>{
    container.scrollIntoView(behavior="smooth");
})

let winning_patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let player="O";
let number_of_turns=0;



const check_winner=()=>{
    for(win of winning_patterns){
        if(boxes[win[0]].innerText!=="" && boxes[win[1]].innerText!=="" && boxes[win[2]].innerText!==""){
            if(boxes[win[0]].innerText===boxes[win[1]].innerText && boxes[win[1]].innerText===boxes[win[2]].innerText){
                console.log("Winner");
                winning_message(boxes[win[0]].innerText);
            }
        }
    }
}

turn_tracker.innerText=`Player O's Turn`;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        number_of_turns++;
        console.log(number_of_turns);
        if(player==="O"){
            box.innerText="O";
            player="X";
        }
        else{
            box.innerText="X";
            player="O";
        }
        turn_tracker.innerText=`Player ${player}'s Turn`;
        box.disabled=true;
        check_winner();
        check_for_draw();
    });
});


const check_for_draw=()=>{
    if(number_of_turns===9){
        number_of_turns=0;
        for(box of boxes){
            box.disabled=true;
        }
        turn_tracker.innerText="";
        message_container.classList.remove("hide");
        message.innerText="GAME OVER"+"\nDraw Match!";
        window.scrollTo(0,700);
    }
}

const reset=()=>{
    number_of_turns=0;
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    turn_tracker.innerText="Player O's Turn"
    player="O";
    message_container.classList.add("hide");
    container.scrollIntoView(behavior="smooth");
    message.innerText="GAME OVER";
}

const winning_message=(winner)=>{
    number_of_turns=0;
    // message.scrollIntoView(behavior="smooth");
    for(box of boxes){
        box.disabled=true;
    }
    turn_tracker.innerText="";
    message_container.classList.remove("hide");
    message.innerText="GAME OVER"+`\nPlayer ${winner} wins!`;
    window.scrollTo(0,700);
}

play_again.addEventListener("click",reset);
reset_game.addEventListener("click",reset);
