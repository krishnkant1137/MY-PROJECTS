let form = document.querySelector("form")

form.addEventListener("submit", function (e) {
e.preventDefault();
const Height = parseInt(document.querySelector("#Height").value);
const Weight = parseInt(document.querySelector("#Weight").value);
let result = document.querySelector("#result");

if (Height === '' || Height < 0 || isNaN(Height)) {
    result.innerHTML = `please give a valid height ${Height}`
} else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
    result.innerHTML = `please give a valid Weight ${Weight}`
} else {
    let BMI = (Weight / ((Height * Height) / 10000)).toFixed(2);
// show the result
result.innerHTML = `<span>${BMI}</span>`
}

});
