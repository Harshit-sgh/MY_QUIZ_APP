let timeLeft = 60;
let timerElement = document.getElementById("time");
let timerInterval;

function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    timerElement.textContent = timeLeft;

    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else {
            clearInterval(timerInterval);
            document.getElementById("submit").click();
            document.getElementById("submit").disabled = true;
        }
    }, 1000);
}

// Start the timer when the page loads
startTimer();

document.getElementById("submit").addEventListener("click", function () {
    document.querySelectorAll(".question").forEach(question => {
        const selected = question.querySelector("input[type=radio]:checked");
        const feedback = question.querySelector(".feedback");

        if (selected) {
            if (selected.value === question.dataset.answer) {
                feedback.textContent = "Correct!";
                feedback.className = "feedback correct";
            } else {
                feedback.textContent = "Incorrect!";
                feedback.className = "feedback incorrect";
            }
        } else {
            feedback.textContent = "Please select an answer.";
            feedback.className = "feedback incorrect";
        }
    });
    this.disabled = true; // Disable submit after clicking
});

document.getElementById("reset").addEventListener("click", function () {
    // Clear all selections and feedback
    document.querySelectorAll("input[type=radio]").forEach(input => input.checked = false);
    document.querySelectorAll(".feedback").forEach(feedback => {
        feedback.textContent = "";
        feedback.className = "feedback";
    });

    // Reset timer
    timeLeft = 60;
    startTimer();

    // Enable submit again
    document.getElementById("submit").disabled = false;
});
