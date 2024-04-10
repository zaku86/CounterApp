let valEl = document.querySelector(".valEl");

let minusBtn = document.querySelector(".minusBtn");
let resetBtn = document.querySelector(".resetBtn");
let addBtn = document.querySelector(".addBtn");


minusBtn.addEventListener("click",function(){
  valEl.innerHTML--;

  let x = parseInt(valEl.innerHTML);
  if(x < 0){
    valEl.style.color = "red";
  }
})
addBtn.addEventListener("click",function(){
  valEl.innerHTML++;

  let x = parseInt(valEl.innerHTML);
  if(x > 0){
    valEl.style.color = "green";
  }
})

resetBtn.addEventListener("click", function(){
  valEl.innerHTML = 0;
  
  let x = parseInt(valEl.innerHTML);
  if(x === 0){
    valEl.style.color = "black";
  }
})