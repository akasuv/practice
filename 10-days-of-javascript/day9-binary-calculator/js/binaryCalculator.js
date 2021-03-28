const res = document.createElement("div");
const btns = document.createElement("div");
const btn0 = createButton("btn0", 0);
const btn1 = createButton("btn1", 1);
const btnClr = createButton("btnClr", "C", handleClear);
const btnEql = createButton("btnEql", "=", handleEqual);
const btnSum = createButton("btnSum", "+");
const btnSub = createButton("btnSub", "-");
const btnMul = createButton("btnMul", "*");
const btnDiv = createButton("btnDiv", "/");

res.id = "res";
btns.id = "btns";

function createButton(id, innerHTML, customEventHandler) {
  let btn = document.createElement("button");
  btn.id = id;
  btn.innerHTML = innerHTML;

  function defaultHandler() {
    if (res.innerHTML === "") {
      if (/[01]/.test(this.innerHTML)) {
        res.innerHTML = this.innerHTML;
      }
    } else if (
      /[\+\-\*\/]/.test(res.innerHTML) &&
      /[\+\-\*\/]/.test(this.innerHTML)
    ) {
      handleEqual();
      res.innerHTML += this.innerHTML;
    } else {
      res.innerHTML += this.innerHTML;
    }
  }

  btn.addEventListener(
    "click",
    customEventHandler ? customEventHandler : defaultHandler
  );

  return btn;
}

function handleEqual() {
  const operation = /[\+\-\*\/]/.exec(res.innerHTML);
  if (operation === null) {
    return;
  }

  const [operand1, operand2] = res.innerHTML.split(operation);
  let decimalRes = eval(
    `${binaryToDecimal(operand1)} ${operation} ${binaryToDecimal(operand2)}`
  );

  res.innerHTML = decimalToBinary(decimalRes);
}

function binaryToDecimal(b) {
  return [...b].reverse().reduce((acc, cur, index) => {
    return acc + +cur * Math.pow(2, index);
  }, 0);
}

function decimalToBinary(d) {
  let b = [];

  function recursive(d) {
    let remain = d % 2;
    b.unshift(remain);

    let quotient = (d - remain) / 2;

    if (quotient !== 0) {
      recursive(quotient);
    } else {
      return;
    }
  }
  recursive(d);
  return b.join("");
}

function handleClear() {
  res.innerHTML = "";
}

btns.append(btn0);
btns.append(btn1);
btns.append(btnClr);
btns.append(btnEql);
btns.append(btnSum);
btns.append(btnSub);
btns.append(btnMul);
btns.append(btnDiv);
document.body.append(res);
document.body.append(btns);
