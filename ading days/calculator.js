let result = document.getElementById('result');
let operator = '';
let operand1 = 0;
let operand2 = 0;

function clearResult() {
  result.innerText = '0';
  operand1 = 0;
  operand2 = 0;
  operator = '';
}

function addToResult(value) {
  if (result.innerText === '0') {
    result.innerText = value;
  } else {
    result.innerText += value;
  }
}

function addOperator(op) {
  operator = op;
  operand1 = parseFloat(result.innerText);
  result.innerText = '0';
}

function calculate() {
  operand2 = parseFloat(result.innerText);
  let resultValue = 0;
  switch (operator) {
    case '/':
      resultValue = operand1 / operand2;
      break;
    case '*':
      resultValue = operand1 * operand2;
      break;
    case '-':
      resultValue = operand1 - operand2;
      break;
    case '+':
      resultValue = operand1 + operand2;
      break;
  }
  result.innerText = resultValue.toString();
  operator = '';
  operand1 = 0;
}