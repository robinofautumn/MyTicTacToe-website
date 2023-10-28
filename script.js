console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3");
let audioTurnX = new Audio("quack.mp3");
let audioTurn0 = new Audio("pop.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

const changeTurn = ()=>{ 
    return turn==="X"? "0":"X"
}

// func to check for the win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2,0,5.8,0],
        [3,4,5,0,18,0],
        [6,7,8,0,30,0],
        [0,3,6,-12,18,90],
        [1,4,7,0,18,90],
        [2,5,8,12,18,90],
        [0,4,8,0,18,45],
        [2,4,6,0,18,-45]
    ];
    win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText!==""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+" Won!!";

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "10em";

            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`

            document.querySelector('.line').style.width = "36vw"

            gameover.play();

            isgameover = true;

        }   
    })

}

// main game logic

// music.play();

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            if(turn==="0")audioTurnX.play();
            else audioTurn0.play();
            checkWin();
            if(!isgameover) document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click', (e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = "";
        isgameover = false;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
        turn = "X";
        document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
        document.querySelector('.line').style.width = "0vw"
    })
})