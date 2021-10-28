function sum(a, b) {
  if (!a && !b){
    return 0
  } 
  if (!a) {
    return b + 0
  }
  if (!b) {
    return a + 0
  }
  else {
    return a + b
  } 
}

function subtract(a, b) {
  if (!a && !b) {
    return 0
  }
  if (!a) {
    return b - 0
  }
  if (!b) {
    return a - 0
  }
  else {
    return a - b
  }
}

function divide(a, b) {
  if (b === 0){
    return error
  } 
  else {
  return a / b
  }
}

function multiply(a, b) {
  if (a === 0 || b === 0){
    return 0
  }
  else {
    return a * b
  }
}

module.exports = { sum, subtract, divide, multiply }
