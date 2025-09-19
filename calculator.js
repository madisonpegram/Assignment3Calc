// Arrays to store results
let results = [];

// Start results table
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
  let x = prompt("Enter the first number (x):");
  if (x === null) break; // user cancelled
  let y = prompt("Enter the second number (y):");
  if (y === null) break;
  let operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) break;

  let num1 = parseFloat(x);
  let num2 = parseFloat(y);
  let result;

  // Validate numeric input
  if (isNaN(num1) || isNaN(num2)) {
    result = "Error: Invalid number(s)";
  } else {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        break;
      case "%":
        result = num2 !== 0 ? num1 % num2 : "Error: Mod by zero";
        break;
      default:
        result = "Error: Invalid operator";
    }
  }

  // Write row
  document.write(
    "<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>"
  );

  // Only store valid numeric results
  if (typeof result === "number" && !isNaN(result)) {
    results.push(result);
  }
}

// Close results table
document.write("</table>");

// Summary statistics
if (results.length > 0) {
  let min = Math.min(...results);
  let max = Math.max(...results);
  let total = results.reduce((a, b) => a + b, 0);
  let avg = total / results.length;

  document.write("<h2>Summary Table</h2>");
  document.write("<table>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write(
    "<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>"
  );
  document.write("</table>");
} else {
  document.write("<p>No valid results to summarize.</p>");
}
