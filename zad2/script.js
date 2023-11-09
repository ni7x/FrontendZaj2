let counter = document.getElementById("counter");
document.getElementById("increaseCounter").addEventListener("click", ()=>{
    counter.innerText = Number(counter.innerText) + 1;
})

document.getElementById("changeColor").addEventListener("click", ()=>{
    counter.style.color = counter.style.color == "red" ? "black" : "red";
})
