const container = document.querySelector("#container");
const drawboard = container.querySelector("#drawboard");
const board = drawboard.querySelector(".board");

console.log(drawboard);
console.log(board);
let defaultSize = 16;

function craftBoard() {

    for( let i = 0; i < defaultSize; i++) {
        for( let j = 0; j < defaultSize; j++) {  
            let babyBox = document.createElement('div');
            babyBox.style.gridColumn = `${j}/${j+1}`;
            babyBox.style.gridRow = `${i}/${i+1}`;
            babyBox.style.border = "solid black";
            babyBox.style.borderBlockWidth = "1px";
            babyBox.style.borderBlockEndWidth = "1px";


            board.appendChild(babyBox);

        }

    }

}
craftBoard();
