let yearItems = document.querySelectorAll(".yearItem");
let activeYearItem = yearItems[0];
let yearCardImg = document.querySelector(".yearCard-img");
let yearCardDiv = document.querySelector(".yearCard-div");
let yearCardProcess = false;

function createYearCard (){
    let yearCardYear = document.querySelector(".yearCard-div__year");
    let yearCardDescription = document.querySelector(".yearCard-div__description");
    yearCardYear.textContent = activeYearItem.dataset.year;
    yearCardDescription.textContent = activeYearItem.dataset.description;
    yearCardImg.src = activeYearItem.dataset.img;

}
createYearCard()
function clickYearItem (e){
    if(e.target != activeYearItem && !yearCardProcess){
        yearCardProcess = true;
        activeYearItem.classList.remove("active");
        activeYearItem = e.target;
        e.target.classList.add("active");
        yearCardImg.classList.add("animate-yearCardAppearLeft");
        yearCardDiv.classList.add("animate-yearCardAppearRight");
        setTimeout(()=>{
            yearCardImg.classList.remove("animate-yearCardAppearLeft");
            yearCardDiv.classList.remove("animate-yearCardAppearRight");
            yearCardProcess = false;
        }, 1500)
        setTimeout(()=>{
            createYearCard();
        }, 750)
    }
}
yearItems.forEach(i =>{
    i.addEventListener("click", (e)=>{
        clickYearItem(e)
    })
})