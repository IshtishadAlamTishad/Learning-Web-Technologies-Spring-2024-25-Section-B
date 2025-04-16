function appendValue(value) {
    document.getElementById('display').value += value;
  }
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  function calculate() {
    var input = document.getElementById('display').value;
    var operator = '';
    var index = -1;
    var ops = ['+','-','*','/', '%'];

    for (var i = 0; i < ops.length; i++) {
      var opIndex = input.indexOf(ops[i]);
      if (opIndex > 0) {
        operator = ops[i];
        index = opIndex;
        break;
      }
    }
    if (index === -1) {
      alert("Invalid input!");
      return;
    }
  
    var left = parseFloat(input.substring(0,index));
    var right = parseFloat(input.substring(index+1));
    var result =0;
  
    if (isNaN(left) || isNaN(right)) {
      alert("Invalid numbers.");
      return;
    }
  
    if (operator === '+') result = left + right;
    else if (operator === '-') result = left - right;
    else if (operator === '*') result = left * right;
    else if (operator === '/') result = right !== 0 ? left / right : "Err";
    else if (operator === '%') result = left % right;
  
    document.getElementById('display').value = result;
  }
  