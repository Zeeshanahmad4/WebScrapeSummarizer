document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const feedbackDiv = document.createElement('div');
    form.appendChild(feedbackDiv);

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent default form submission
        const domainInput = form.querySelector("input[name='domain']");

        // Validate domain format
        const domainPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!domainInput.value.trim() || !domainPattern.test(domainInput.value)) {
            feedbackDiv.textContent = "Please enter a valid domain.";
            return;
        }

        // Display a loading spinner
        feedbackDiv.innerHTML = "<span>Loading...</span>";

        // AJAX submission
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                feedbackDiv.textContent = "Data processed successfully!";
            } else {
                feedbackDiv.textContent = "There was an error processing the data.";
            }
        })
        .catch(error => {
            feedbackDiv.textContent = "There was an error. Please try again later.";
        });
    });
});

