let gestures=document.querySelectorAll(".game-sign1");
let comp_gestures=document.querySelectorAll(".game-sign2");
let message = document.querySelector("#message");
let comp=document.querySelector("#comp-line1");
let you=document.querySelector("#you-line1");
let comp_score=0;
let user_score=0;
console.log(comp_gestures);

const comp_move=()=>{
    let options=["rock","paper","scissors"];
    let rand_num=Math.floor(Math.random()*3);
    let comp_move=comp_gestures[rand_num].getAttribute("id");
    let comp_move_selector=document.querySelector("#"+comp_move);
    comp_move_selector.classList.remove("option");
    comp_move_selector.offsetWidth;
    comp_move_selector.classList.add("option");
    console.log(comp_move_selector);
    return options[rand_num];
}

const gameplay=(user_move)=>{
    let compmove=comp_move();
    console.log(user_move,compmove);
    if(user_move===compmove){
        message.innerText="It's a Draw!";
        message.classList.add("message");
    }
    else{
        if(user_move==="rock"){
            if(compmove==="paper"){
                message.innerText="Oops Try Again!";
                message.classList.add("message");
                comp_score++;
                comp.innerText=comp_score;
            }
            else{
                message.innerText="You won!"
                message.classList.add("message");
                user_score++;
                you.innerText=user_score;

            }
        }
        else if(user_move==="paper"){
            if(compmove==="scissors"){
                message.innerText="Oops Try Again!";
                message.classList.add("message");
                comp_score++;
                comp.innerText=comp_score;
            }
            else{
                message.innerText="You won!";
                message.classList.add("message");
                user_score++;
                you.innerText=user_score;
            }
        }
        else{
            if(compmove==="rock"){
                message.innerText="Oops Try Again!";
                message.classList.add("message");
                comp_score++;
                comp.innerText=comp_score;
            }
            else{
                message.innerText="You won!";
                message.classList.add("message");
                user_score++;
                you.innerText=user_score;
            }
        }
    }
}



gestures.forEach((gesture)=>{
    gesture.addEventListener("click",()=>{
        let user_move=gesture.getAttribute("id");
        gameplay(user_move);
    })
})