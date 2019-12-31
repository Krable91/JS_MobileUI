const countContainer = document.querySelector("#productCount");
const countPlus = document.querySelector("#Cart_Count_Plus");
const countMinus = document.querySelector("#Cart_Count_Minus");
const colorClear = document.querySelector(".Option_Color_Clear");
const colockContainer = document.querySelector(".Header_Time");
const clockTitle = document.querySelector("#clockTitle");
const starButton = document.getElementById("Content_Top_Star");
const sizeButton = document.getElementsByClassName("size")
const likeButton = document.getElementById("Like");
const sizeClear = document.getElementById("Option_Size_Clear");

let count = 0;
let heartFull = false;
let starFull = false;
let sizeChecked = false;

Array.from(sizeButton).forEach(item => item.addEventListener("click", sizeSelect));

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
function star(){
    if(starFull === false){
        starButton.innerHTML = `4.3<i class="fas fa-star"></i>`;
        starFull = true;
    } else {
        starButton.innerHTML = `4.3<i class="far fa-star"></i>`;
        starFull = false;
    }
}
function delSize(){

}
function sizeSelect(){
    const text = event.target.innerText;
        if(event.target.value === "false"){
            event.target.value = "true";
            event.target.innerHTML = `<i class="fas fa-check"></i>` + text;
        } else {
            event.target.value = "false";
            event.target.innerText = text;
        }
}
function like(){
    if(heartFull === false){
        likeButton.innerHTML = `<i class="fas fa-heart"></i>`;
        heartFull = true;
    } else {
        likeButton.innerHTML = `<i class="far fa-heart"></i>`;
        heartFull = false;
    }
}
function init() {
    countMinus.addEventListener("click", minusClicked);
    countPlus.addEventListener("click", plusClicked);
    colorClear.addEventListener("click", colorReset);
    likeButton.addEventListener("click", like);
    starButton.addEventListener("click", star);
    sizeClear.addEventListener("click", delSize);
    getTime();
    setInterval(getTime, 1000);
}

init()
