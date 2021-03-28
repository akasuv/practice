let btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = 0;

btn.addEventListener("click", function () {
  this.innerHTML = +this.innerHTML + 1;
});

document.body.append(btn);
