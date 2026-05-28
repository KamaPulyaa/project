var a = +prompt();
var b = prompt();
var c = +prompt();

function calc(a, c) {
    if (b == "+") {
        calc(a, c);
    } else if (b == "-") {
        calc(a - c);
    } else if (b == "*") {
        calc(a , c);
    }
}


console.log(a + c);