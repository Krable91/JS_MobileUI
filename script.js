const countContainer = document.querySelector("#productCount");
const countPlus = document.querySelector("#Cart_Count_Plus");
const countMinus = document.querySelector("#Cart_Count_Minus");
const colorClear = document.querySelector(".Option_Color_Clear");
const colockContainer = document.querySelector(".Header_Time");
const clockTitle = document.querySelector("#clockTitle");

let count = 0;

function minusClicked(){
    if ( count === 0 ){
        alert("제품 개수가 0개입니다.");
    } else {
    count --;
    countContainer.innerText = count;
    }
}
function plusClicked(){
    count ++;
    countContainer.innerText = count;
}
function colorReset(){

}
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

}
function init() {
    countMinus.addEventListener("click", minusClicked);
    countPlus.addEventListener("click", plusClicked);
    colorClear.addEventListener("click", colorReset);
    getTime();
    setInterval(getTime, 1000);

}

init()
