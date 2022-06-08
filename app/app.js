const buttons = document.querySelector(".buttons");
const screenUpside = document.querySelector(".upside");
const screenDownside = document.querySelector(".downside")

buttons.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.classList.contains("AC")) {
        screenDownside.innerHTML = "";
        screenUpside.innerHTML = "";

    } else if (e.target.classList.contains("changer")) {
        if (!screenDownside.innerHTML) {
            screenDownside.innerHTML = "";
        } else {
            screenDownside.innerHTML = -screenDownside.innerHTML;
        }
    } else if (e.target.classList.contains("percent")) {
        if (!screenDownside.innerHTML) {
            screenDownside.innerHTML = "";
        } else {
            screenDownside.innerHTML = screenDownside.innerHTML / 100;
        }
    } else if (e.target.classList.contains("operations")) {
        if (!screenDownside.innerHTML) {
            screenDownside.innerHTML = "";
        } else {
            equal()
            screenUpside.innerHTML = screenDownside.innerHTML + " " + e.target.innerHTML;
            screenDownside.innerHTML = "";
        }
    } else if (e.target.classList.contains("num")) {
        screenDownside.innerHTML += e.target.innerHTML;
        // if (e.target.innerHTML == "." && !screenDownside.innerHTML) {
        //     screenDownside.innerHTML = e.target.innerHTML;
        // } else {
        //     screenDownside.innerHTML += e.target.innerHTML;

        // }
        // else if (e.target.innerHTML != 0 && e.target.innerHTML > 0) {
        //     screenDownside.innerHTML += e.target.innerHTML;
        // }
        // else {
        //     screenDownside.innerHTML = e.target.innerHTML;
        // }
    } else if (e.target.classList.contains("equal")) {
        equal();
    }
});



function equal() {
    if (screenUpside.innerHTML.slice(-1) == "÷") {
        screenDownside.innerHTML = (screenUpside.innerHTML.slice(0, -1) / screenDownside.innerHTML).toFixed(2);
        screenUpside.innerHTML = "";
    }
    else if (screenUpside.innerHTML.slice(-1) == "x") {
        screenDownside.innerHTML = (screenUpside.innerHTML.slice(0, -1) * screenDownside.innerHTML).toFixed(2);
        screenUpside.innerHTML = "";
    }
    else if (screenUpside.innerHTML.slice(-1) == "-") {
        screenDownside.innerHTML = screenUpside.innerHTML.slice(0, -1) - screenDownside.innerHTML;
        screenUpside.innerHTML = "";
    }
    else if (screenUpside.innerHTML.slice(-1) == "+") {
        screenDownside.innerHTML = Number(screenUpside.innerHTML.slice(0, -1)) + Number(screenDownside.innerHTML);
        screenUpside.innerHTML = "";
    }
}