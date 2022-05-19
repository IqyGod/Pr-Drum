/*use the content from "Front End Development Libraries"
course: "Write a Simple Counter"

you will find all functions for +-*/

// or i can just use function to do it. no React hahaha

function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getResult() {
  return document.getElementById("result-value").innerText;
}
function printResult(num) {
  if (num == "") {
    //if num is 0
    document.getElementById("result-value").innerText = num;
  } else {
    document.getElementById("result-value").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
//print(printResult('0'));

function reverseNumberFormat(num) {
  //remove all , into nothing, change number back normal
  return Number(num.replace(/,/g, ""));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      // if click clear botton
      printHistory("");
      printResult("0");
    } else {
      var result = getResult();
      var history = getHistory();
      if (result == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (result != "" || history != "") {
        // ternary statement
        result = result == "" ? result : reverseNumberFormat(result);
        history = history + result;
        if (this.id == "=") {
          var output = eval(history);
          printResult(output);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printResult("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for(let i =0; i<number.length; i++){
  number[i].addEventListener('click',function(){
    let result =reverseNumberFormat(getResult());
    if (result != NaN) {
      // if result is a number
      result = result + this.id;
      printResult(result);
    }
  });
}
