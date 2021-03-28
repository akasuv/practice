function createButton(id, handler) {
  let btn = document.createElement("button");
  btn.id = `btn${id}`;
  btn.innerHTML = id;
  if (handler) {
    btn.addEventListener("click", handler);
  }
  return btn;
}

let container = document.createElement("div");
container.id = "btns";

let btns = Array(9)
  .fill(0)
  .map((v, i) => {
    if (i === 4) {
      return createButton(i + 1, clickHandler);
    }
    return createButton(i + 1);
  });

function clickHandler() {
  let btns = this.parentNode.children;
  let rotated = [
    btns[3],
    btns[0],
    btns[1],
    btns[6],
    btns[4],
    btns[2],
    btns[7],
    btns[8],
    btns[5],
  ];
  this.parentNode.replaceChildren(...rotated);
}

container.append(...btns);
document.body.append(container);
