window.onload = function () {
  const display = document.getElementById("main_screen");
  let key_sequence = "";

  function AppendToDisplay(value) {
    display.innerText += value;
  }

  function clearDisplay() {
    display.innerText = "";
    key_sequence = "";
  }

  function delete_the_value() {
    display.innerText = display.innerText.slice(0, -1);
  }

  function calculateResult() {
    let expression = display.innerText;
    expression = preprocessExpression(expression);

    try {
      const result = eval(expression);
      display.innerText = result;
    } catch (error) {
      display.innerText = "Error";
    }
  }

  function preprocessExpression(expression) {
    expression = expression.replace(/π/g, "Math.PI");
    expression = expression.replace(/sin\(/g, "Math.sin(");
    expression = expression.replace(/cos\(/g, "Math.cos(");
    expression = expression.replace(/tan\(/g, "Math.tan(");
    expression = expression.replace(/log\(/g, "Math.log10(");
    expression = expression.replace(/√\(/g, "Math.sqrt(");
    expression = expression.replace(/×/g, "*");
    expression = expression.replace(/÷/g, "/");
    expression = expression.replace(/\^/g, "**");
    expression = expression.replace(/%/g, "/100");
    expression = expression.replace(/×10\^/g, "*10**");

    // Handle factorial: replace n! with computed value
    expression = expression.replace(/(\d+\.?\d*)!/g, (match, num) => {
      const n = parseFloat(num);
      if (n < 0 || !Number.isInteger(n)) return "NaN";
      let result = 1;
      for (let i = 2; i <= n; i++) result *= i;
      return result.toString();
    });

    return expression;
  }

  document.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key === "Enter") {
      event.preventDefault();
    }
    if ("1234567890()+-^%.!".includes(key)) {
      AppendToDisplay(key);
    } else if (key === "e") {
      AppendToDisplay("×10^");
    } else if (key === "r") {
      key_sequence = "";
    } else if (key === "/") {
      AppendToDisplay("÷");
    } else if (key === "*") {
      AppendToDisplay("×");
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      delete_the_value();
      key_sequence = key_sequence.slice(0, -1);
    } else if (key === "c") {
      clearDisplay();
    } else if (["s", "i", "n", "c", "o", "t", "a", "l", "g"].includes(key)) {
      key_sequence += key;

      if (["sin", "cos", "tan", "log"].includes(key_sequence)) {
        if (!display.innerText.endsWith(`${key_sequence}(`)) {
          AppendToDisplay(`${key_sequence}(`);
        }
        key_sequence = "";
      }
    }
  });

  // Add event listeners to buttons
  document.getElementById("delete").addEventListener("click", delete_the_value);
  document
    .getElementById("x!")
    .addEventListener("click", () => AppendToDisplay("!"));
  document
    .getElementById("(")
    .addEventListener("click", () => AppendToDisplay("("));
  document
    .getElementById(")")
    .addEventListener("click", () => AppendToDisplay(")"));
  document
    .getElementById("%")
    .addEventListener("click", () => AppendToDisplay("%"));
  document.getElementById("Clear").addEventListener("click", clearDisplay);
  document
    .getElementById("sin")
    .addEventListener("click", () => AppendToDisplay("sin("));
  document
    .getElementById("pi")
    .addEventListener("click", () => AppendToDisplay("π"));
  document
    .getElementById("7")
    .addEventListener("click", () => AppendToDisplay("7"));
  document
    .getElementById("8")
    .addEventListener("click", () => AppendToDisplay("8"));
  document
    .getElementById("9")
    .addEventListener("click", () => AppendToDisplay("9"));
  document
    .getElementById("divide")
    .addEventListener("click", () => AppendToDisplay("÷"));
  document
    .getElementById("cos")
    .addEventListener("click", () => AppendToDisplay("cos("));
  document
    .getElementById("log")
    .addEventListener("click", () => AppendToDisplay("log("));
  document
    .getElementById("4")
    .addEventListener("click", () => AppendToDisplay("4"));
  document
    .getElementById("5")
    .addEventListener("click", () => AppendToDisplay("5"));
  document
    .getElementById("6")
    .addEventListener("click", () => AppendToDisplay("6"));
  document
    .getElementById("multiply")
    .addEventListener("click", () => AppendToDisplay("×"));
  document
    .getElementById("tan")
    .addEventListener("click", () => AppendToDisplay("tan("));
  document
    .getElementById("sq")
    .addEventListener("click", () => AppendToDisplay("√("));
  document
    .getElementById("1")
    .addEventListener("click", () => AppendToDisplay("1"));
  document
    .getElementById("2")
    .addEventListener("click", () => AppendToDisplay("2"));
  document
    .getElementById("3")
    .addEventListener("click", () => AppendToDisplay("3"));
  document
    .getElementById("minus")
    .addEventListener("click", () => AppendToDisplay("-"));
  document
    .getElementById("*10^")
    .addEventListener("click", () => AppendToDisplay("×10^"));
  document
    .getElementById("power")
    .addEventListener("click", () => AppendToDisplay("^"));
  document
    .getElementById(".")
    .addEventListener("click", () => AppendToDisplay("."));
  document
    .getElementById("zero")
    .addEventListener("click", () => AppendToDisplay("0"));
  document
    .getElementById("plus")
    .addEventListener("click", () => AppendToDisplay("+"));
  document.getElementById("equal").addEventListener("click", calculateResult);
};
