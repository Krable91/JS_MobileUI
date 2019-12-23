const countMinus = document.querySelector("#Cart_Count_Minus");
const countPlus = document.querySelector("#Cart_Count_Plus");
const countContainer = document.querySelector("#productCount");
let countChange = countContainer.innerText;

function minusClicked(){
    countContainer.innerText = countChange--;
}
function plusClicked(){
    countContainer.innerText = countChange++;
}


function init() {

    countMinus.addEventListener("click", minusClicked);
    countPlus.addEventListener("click", plusClicked);

}
init();