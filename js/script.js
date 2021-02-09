function funcClear() {
    document.getElementById("display").innerHTML = "0";
}

function removeZero() {
    var display_str = document.getElementById("display").innerHTML;
    if (display_str == "0") {
        display_str = ""
        document.getElementById("display").innerHTML = display_str;
    }
}

function displayDigit(digit) {
    removeZero()
    document.getElementById("display").innerHTML += digit;
}

function displayOperator(operator) {
    var display = document.getElementById("display");
    var display_str = display.innerHTML;
    var lastChar = display_str.substr(display_str.length - 1);

    if (lastChar != '+' && lastChar != '-' && lastChar != '*' && lastChar != '/') {
        display.innerHTML += operator;
    }
}

function displayDecimal() {
    var display = document.getElementById("display");
    var display_str = display.innerHTML;
    var n = display_str.lastIndexOf(".");
    var operator_found = false;
    var i;

    if (n == -1) {
        if (display_str == "") {
            display.innerHTML += "0.";
        } else {
            display.innerHTML += ".";
        }
    } else {
        for (i = n; i < display_str.length - 1; i++) {
            if (display_str[i] == '+' || display_str[i] == '-' ||
                display_str[i] == '*' || display_str[i] == '/') {
                    operator_found = true;
                    break;
            }
        }
        if (operator_found) {
            display.innerHTML += ".";
        }
    }
}

function funcSolve() {
    removeZero()
    var equation = document.getElementById("display").innerHTML;
    var solved = eval(equation);
    document.getElementById('display').innerHTML = solved;
}

function funcDel() {
    var display_str = document.getElementById("display").innerHTML;
    if (display_str.length == 1) {
        funcClear()
    } else {
        var remove_last_char = display.innerHTML.slice(0, -1);
        document.getElementById('display').innerHTML = remove_last_char;
    }
}
