let display = document.getElementById("display");

function appendToDisplay(value) {
  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Klavye desteği
document.addEventListener("keydown", function (e) {
  if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
    appendToDisplay(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    appendToDisplay(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    calculate();
  } else if (e.key === "Escape" || e.key === "c" || e.key === "C") {
    clearDisplay();
  } else if (e.key === "Backspace") {
    deleteLast();
  }
});
