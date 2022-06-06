const buttons = document.querySelector(".buttons");
console.log(buttons);
const screen = document.querySelector(".screen");
console.log(screen);
const screenUpside = document.querySelector(".upside");
console.log(screenUpside);
const screenDownside = document.querySelector(".downside")
console.log(screenDownside);

buttons.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.classList.contains("AC")) {
        screenDownside.innerHTML = "";
        screenUpside.innerHTML = "";
        console.log("what is this");
    } else if (e.target.classList.contains("changer")) {
        console.log("this  +-");
    } else if (e.target.classList.contains("percent")) {
        console.log("this %");
    } else if (e.target.classList.contains("division")) {
        console.log("this /");
    } else if (e.target.classList.contains("seven")) {
        screenDownside.innerHTML += 7;
        console.log("this 7");
    } else if (e.target.classList.contains("eight")) {
        screenDownside.innerHTML += 8;
        console.log("this is 8");
    } else if (e.target.classList.contains("nine")) {
        screenDownside.innerHTML += 9;
        console.log("this is 9");
    } else if (e.target.classList.contains("multiply")) {
        screenDownside.innerHTML += "x";
        console.log("this is *");
    } else if (e.target.classList.contains("four")) {
        screenDownside.innerHTML += 4;
        console.log("this is 4");
    } else if (e.target.classList.contains("five")) {
        screenDownside.innerHTML += 5;
        console.log("this is 5");
    } else if (e.target.classList.contains("six")) {
        screenDownside.innerHTML += 6;
        console.log("this is 6");
    } else if (e.target.classList.contains("minus")) {
        screenDownside.innerHTML += "-";
        console.log("this is 1");
    } else if (e.target.classList.contains("one")) {
        screenDownside.innerHTML += 1;
        console.log("this is 2");
    } else if (e.target.classList.contains("two")) {
        screenDownside.innerHTML += 2;
        console.log("this is 2");
    } else if (e.target.classList.contains("three")) {
        screenDownside.innerHTML += 3;
        console.log("this is 3");
    } else if (e.target.classList.contains("plus")) {
        screenDownside.innerHTML += "+";
        console.log("this is +");
    } else if (e.target.classList.contains("zero")) {
        screenDownside.innerHTML += 0;
        console.log("this is 0");
    } else if (e.target.classList.contains("dot")) {
        screenDownside.innerHTML += ".";
        console.log("this is .");
    } else if (e.target.classList.contains("equal")) {
        screenDownside.innerHTML = "=";
        console.log("this is =");
    }
});