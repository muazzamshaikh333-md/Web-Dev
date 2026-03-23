document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload

        // Get values
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const rating = form.querySelectorAll('select')[0].value;
        const speaker = form.querySelectorAll('select')[1].value;
        const clarity = form.querySelectorAll('select')[2].value;
        const relevance = form.querySelector('input[name="relevant"]:checked');

        // Validation
        if (name === "") {
            alert("Please enter your name");
            return;
        }

        if (rating === "" || speaker === "" || clarity === "") {
            alert("Please select all required ratings");
            return;
        }

        if (!relevance) {
            alert("Please select seminar relevance");
            return;
        }

        // Collect all data
        const feedbackData = {
            name: name,
            email: email,
            rating: rating,
            speaker: speaker,
            clarity: clarity,
            relevance: relevance.value,
            topics: form.querySelectorAll("textarea")[0].value,
            suggestions: form.querySelectorAll("textarea")[1].value,
            futureInterest: form.querySelectorAll("select")[3].value
        };

        console.log("Feedback Submitted:", feedbackData);

        // Show success message
        alert("Thank you! Your feedback has been submitted successfully.");

        // Reset form
        form.reset();
    });

});
