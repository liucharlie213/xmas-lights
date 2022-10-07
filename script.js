const inputEl = document.getElementById("speed-input");
const upBtn = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");

const bulbs = document.getElementsByClassName("bulb");
const onBtn = document.getElementById("on-btn");
const offBtn = document.getElementById("off-btn");

let speedNum = parseInt(inputEl.value);


upBtn.addEventListener("click", function() {
  // if(bulbsbulbs[i].style.animation == "none") {
  //   console.log("hi")
  // }
  // let speedNum = parseInt(inputEl.value);
  if(speedNum < 5) {
    speedNum++;
    inputEl.value = speedNum.toString();
    for (let i = 0; i < bulbs.length; i++){
      bulbs[i].style.animationDuration = speedNum.toString() + "s"; 
    }
  }
  else {
    alert("Cannot increase speed anymore");
  }
})

downBtn.addEventListener("click", function() {
  // let speedNum = parseInt(inputEl.value);
  if(speedNum > 1) {
    speedNum--;
    inputEl.value = speedNum.toString();
    for (let i = 0; i < bulbs.length; i++){
      bulbs[i].style.animationDuration = speedNum.toString() + "s"; 
    }
  }
  else {
    alert("Cannot decrease speed anymore");
  }
}) 

onBtn.addEventListener("click", function() {
  for (let i = 0; i < bulbs.length; i++){
    // bulbs[i].style.animationName = "";
    bulbs[i].removeAttribute("style");
    bulbs[i].style.animationPlayState = "running";
    bulbs[i].style.animationDuration = speedNum.toString() + "s"; 
  }
}) 

offBtn.addEventListener("click", function() {
  for (let i = 0; i < bulbs.length; i++){
    bulbs[i].style.animation = "none";
    bulbs[i].style.background = "#233169";
  }
})
