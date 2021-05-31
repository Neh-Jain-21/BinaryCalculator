/** @format */

const result = document.getElementById("res");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");

const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key == "0") {
        result.innerHTML += btn0.innerHTML;
    }
    if (event.key == "1") {
        result.innerHTML += btn1.innerHTML;
    }
    if (event.key === "Escape") {
        result.innerHTML = "";
    }
    if (event.key === "=" || event.key === "Enter") {
        var final = 0;
        var string = result.innerHTML;
        for (let j = 0; j < string.length; j++) {
            if (string[j] === "+") {
                var i = 0;
                var res = string.split("+");
                final = parseInt(res[i], 2) + parseInt(res[i + 1], 2);
                result.innerHTML = final.toString(2);
            } else if (string[j] === "-") {
                var i = 0;
                var res = string.split("-");
                final = parseInt(res[i], 2) - parseInt(res[i + 1], 2);
                result.innerHTML = final.toString(2);
            } else if (string[j] === "*") {
                var i = 0;
                var res = string.split("*");
                final = parseInt(res[i], 2) * parseInt(res[i + 1], 2);
                result.innerHTML = final.toString(2);
            } else if (string[j] === "/") {
                var i = 0;
                var res = string.split("/");
                final = parseInt(res[i], 2) / parseInt(res[i + 1], 2);
                result.innerHTML = final.toString(2);
            } else {
            }
        }
    }
    if (event.key === "+") {
        result.innerHTML += btnSum.innerHTML;
    }
    if (event.key === "-") {
        result.innerHTML += btnSub.innerHTML;
    }
    if (event.key === "*") {
        result.innerHTML += btnMul.innerHTML;
    }
    if (event.key === "/") {
        result.innerHTML = btnDiv.innerHTML;
    }
    if (event.key === "Backspace") {
        result.innerHTML = "";
    }
});

btn0.addEventListener("click", () => {
    result.innerHTML += btn0.innerHTML;
});

btn1.addEventListener("click", () => {
    result.innerHTML += btn1.innerHTML;
});

btnClr.addEventListener("click", () => {
    result.innerHTML = "";
});

btnEql.addEventListener("click", () => {
    var final = 0;
    var string = result.innerHTML;
    for (let j = 0; j < string.length; j++) {
        if (string[j] === "+") {
            var i = 0;
            var res = string.split("+");
            final = parseInt(res[i], 2) + parseInt(res[i + 1], 2);
            result.innerHTML = final.toString(2);
        } else if (string[j] === "-") {
            var i = 0;
            var res = string.split("-");
            final = parseInt(res[i], 2) - parseInt(res[i + 1], 2);
            result.innerHTML = final.toString(2);
        } else if (string[j] === "*") {
            var i = 0;
            var res = string.split("*");
            final = parseInt(res[i], 2) * parseInt(res[i + 1], 2);
            result.innerHTML = final.toString(2);
        } else if (string[j] === "/") {
            var i = 0;
            var res = string.split("/");
            final = parseInt(res[i], 2) / parseInt(res[i + 1], 2);
            result.innerHTML = final.toString(2);
        } else {
        }
    }
});

btnSum.addEventListener("click", () => {
    result.innerHTML += btnSum.innerHTML;
});

btnSub.addEventListener("click", () => {
    result.innerHTML += btnSub.innerHTML;
});

btnMul.addEventListener("click", () => {
    result.innerHTML += btnMul.innerHTML;
});

btnDiv.addEventListener("click", () => {
    result.innerHTML = btnDiv.innerHTML;
});
