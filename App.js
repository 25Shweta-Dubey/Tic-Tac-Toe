let boxes = document.querySelectorAll(".box"); // box
let resetBtn = document.querySelector("#Reset"); // Reset Game
let newGameBtn = document.querySelector("#new-btn"); // New Game
let msgContainer = document.querySelector(".msg-container"); // msg-container hide
let msg = document.querySelector("#msg"); // Winner

let turnO = true;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            console.log("Now it is turn of O");
            box.innerText = "O";
            
            turnO = false;
        } else {
            console.log("Now it is turn of X");
            box.innerText = "X";
            turnO = true;
        }

        
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const newGame= () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const gameDraw = () => {
    msg.innerText = `Game was Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
// const msgShow = () => {
//     if(turnO){
//     msg.innerText = `Now It is turn of O `;
//     turnO.classList.add(hide);
//     }else{
//     msg.innerText = `Now It is turn of X `;
//     turnO.classList.add(hide);
//     }
// };

const showWinner = (winner) => {
    msg.innerText = `Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);
msgBtn.addEventListener("click", resetGame);
