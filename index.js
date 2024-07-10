console.log("hello");
let displayvalue =document.getElementById("displayvalue");
const button = document.getElementById("button");
const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
let num1,num2,operator,display,operation;
let operatorpressed=false;
let result=0;


function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function remainder(a,b){
    return a%b;
}
function operate(num1,num2,operator){
    num1=Number(num1);
    num2=Number(num2);
    switch (operator) {
        case 'add':
          return add(num1, num2);
          break;
        case 'subtract':
          return subtract(num1, num2);
          break;
        case 'multiply':
          return multiply(num1, num2);
          break;
        case 'divide':
          return divide(num1, num2);
      }
    
}
function init(){
    num1=0;
    num2=0;
    result=0
    display=''
    displayvalue.textContent=result;
}
function updatedisplay(e){
    display+=e.target.textContent;
    displayvalue.innerHTML=display;
    if(operatorpressed){
        num2=e.target.textContent;
        display=operate(operator,num1,num2);
    }
    
}
function handleoperation(e){
    num1=display;
    display+=e.target.innerHTML;
    operation=e.target.datset.action;
    isOperatorPressed=true;
    if(result){
        num1=result;
    }

}
numberKeys.forEach(numberKey =>
    numberKey.addEventListener('click', e => updateDisplay(e))
  );
  
  operatorKeys.forEach(operator =>
    operator.addEventListener('click', e => handleOperation(e))
  );
  
  clearButton.addEventListener('click', e => {
    init();
  });
  equalButton.addEventListener('click', () => {
    num2 =
      num2 || display.replace(num1, '').match(/[^\+|\-|\*|\/]\d*/);
    result = operate(operation, num1, num2);
    displayvalue.innerHTML = result % 1 ? Number(result.toFixed(4)) : result;
    operation = '';
  });
  
  init();