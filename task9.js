const outputElement = document.getElementById("output");
let currentInput = "";
let prevInput = "";

const allButtons = document.querySelectorAll(".buttons button");

allButtons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonText = button.innerText;

        if (buttonText === "=") {
            try{
                prevInput += currentInput
                prevInput = eval(prevInput);
                outputElement.innerHTML = `<p>${prevInput}</p>`;

                currentInput = prevInput;
                prevInput = "";
            }
            
            catch{
                outputElement.innerHTML = `<p>Incorrect input</p>`;
            }

        } else if (buttonText == "C") {
            currentInput = "";
            prevInput = ""
            outputElement.innerHTML = "<p>&nbsp;</p>";

        } else if (buttonText == "+" || buttonText == "-" || buttonText == "*" || buttonText == "/") {
            prevInput = currentInput;
            outputElement.innerHTML = `<p>
            <span style="color: gray">${prevInput}</span>${buttonText}
            </p>`;

            prevInput += buttonText;
            currentInput = ""

        } else {
            currentInput += buttonText
            outputElement.innerHTML = `<p>
            <span style="color: gray">${prevInput}</span>${currentInput}
        </p>`;

        }
    });
});
