//200까지

let rangeBar = document.querySelector(".rangeBar");
let InputCommentminNum = document.querySelector(".min");
let InputCommentmaxNum = document.querySelector(".max");
const randomBtn = document.querySelector('.randomFunction');
const inputResultPlace = document.querySelector('.result');
const inputInfoPlace = document.querySelector('.info');

let curMin = rangeBar.min;
let curMax = rangeBar.value;

console.log(curMin, curMax);

let getrandom = () =>{
    let randomNumber = Math.random() * (curMax - curMin + 1) + curMin;
    let guessNum = document.querySelector('.selectNum').value;

    if(guessNum === ""){
        return false;
    }
 
    console.log(parseInt(randomNumber), Number(guessNum));
    let intRandom = parseInt(randomNumber);
    let intGuess = Number(guessNum);

    let displayStr = `You Chose:${intGuess} , the machine chose:${intRandom}`;
    inputInfoPlace.innerText = displayStr;
    if(intRandom === intGuess){
        inputResultPlace.innerText = "You Win!";
    }else{
        inputResultPlace.innerText = "You Lose!";
    }
}

let getValues = () =>{
   // rangeBar = document.querySelector('.rangeBar');
    curMax = rangeBar.value;
    console.log(curMax, curMin);
    console.log(InputCommentminNum);
    InputCommentminNum.innerText = curMin;
    InputCommentmaxNum.innerText = curMax;
}

let init = () =>{
    if(InputCommentminNum.innerText === "" || InputCommentmaxNum.innerText === ""){
        InputCommentminNum.innerText = curMin;
        InputCommentmaxNum.innerText = curMax;
    }
    rangeBar.addEventListener('input',getValues);
    randomBtn.addEventListener('click',getrandom);
}

init();