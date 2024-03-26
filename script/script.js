document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    const messageContainer = document.getElementById('messageContainerSingle');

    // Add submit event listener to the form
    surveyForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
    });

    const radioInputs = document.querySelectorAll('.input-radio');
    let optionSelected = false;

    radioInputs.forEach(function(input) {
        input.addEventListener('mouseover', function() {
            if (!optionSelected) {
                input.checked = true;
            }
        });

        input.addEventListener('click', function() {
            optionSelected = true;
            radioInputs.forEach(function(otherInput) {
                if (otherInput !== input) {
                    otherInput.checked = false;
                }
            });
        });
    });
});
