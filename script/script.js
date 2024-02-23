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
});
