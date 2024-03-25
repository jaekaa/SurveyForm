document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.submit-button');

    // Add click event listener to the submit button
    submitButton.addEventListener('click', function() {
        // Toggle 'active' class to animate the circle
        submitButton.classList.toggle('active');

        // Reset animation after a short delay
        setTimeout(function() {
        submitButton.classList.toggle('active');
        }, 300); // Adjust the delay time as needed (in milliseconds)
    });

    const radioInputs = document.querySelectorAll('.input-radio');
    let optionSelected = false;

    radioInputs.forEach(function (input) {
        input.addEventListener('mouseover', function () {
            if (!optionSelected) {
                input.checked = true;
            }
        });

        input.addEventListener('click', function () {
            optionSelected = true;
            radioInputs.forEach(function (otherInput) {
                if (otherInput !== input) {
                    otherInput.checked = false;
                }
            });
        });
    });

    checkboxInputs.forEach(function (input) {
        input.addEventListener('mouseover', function () {
            if (!optionSelected) {
                input.checked = true;
            }
        });

        input.addEventListener('mouseout', function () {
            if (!optionSelected) {
                input.checked = false;
            }
        });

        input.addEventListener('click', function () {
            if (input.checked) {
                optionSelected = true;
                checkboxInputs.forEach(function (otherInput) {
                    if (otherInput !== input) {
                        otherInput.checked = false;
                    }
                });
            } else {
                optionSelected = false;
            }
        });
    });
});
        
