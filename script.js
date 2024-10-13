let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.textContent;

        if (buttonText === '=') {
            try {
                // Evaluate the expression safely
                string = Function('"use strict";return (' + string + ')')();
                input.value = string;
            } catch (error) {
                // Handle any potential errors in the expression
                input.value = "Error";
                string = "";
            }
        } else if (buttonText === 'Ac') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
