let totalAmount = 0
let totalTipAmount = 0
let tips = document.querySelectorAll(".tipBox");

// Increase No. of People
var incBtn = document.getElementById("plusBtn");
var num = 1;
var numperson = document.querySelector(".number")
var decBtn = document.getElementById("minusBtn")

//---------------------------------------Input Value Selection---------------------------------------

function inputfun() {
    var inputValue = document.getElementById("inputTag").value;
    // console.log(inputValue);
}

// ---------------------------------------Tip Selection---------------------------------------

tips.forEach(function (p) {
    p.addEventListener("click", function (event) {
        var tagSelection = event.target;
        valueSelection = parseInt(tagSelection.id);
        // console.log(valueSelection);
    })
});

// ---------------------------------------No. Of People Button----------------------------------

// Increase Button
incBtn.addEventListener('click', () => {
    num += 1;
    document.querySelector(".number").innerHTML = parseInt(num);
    // console.log(num)
});
// Decrease Button
decBtn.addEventListener('click', () => {
    if (num <= 1) {
        num = 1;
    } else {
        num -= 1;
        document.querySelector(".number").innerHTML = parseInt(num);
    }
});


// let calculation = (valueSelection * inputValue) / 100
// console.log(calculation);



for (let i = 1; i <= 6; i++) {

    // if (i === j) {
    //     btn.style.backgroundColor = "hsl(263, 43%, 21%)";
    // } else {
    //     var btn1 = document.querySelector(`#tip${n}`)
    //     btn1.style.backgroundColor = "#9C60FF";
    // }
    // calculation = (inputValue * valueSelection) / 100
    // console.log(calculation);






}

