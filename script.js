$(document).ready(function() {
    // Function to reset the quiz
    function resetQuiz() {
        $(".option").prop("disabled", false); // Enable all options
        $(".feedback").text(""); // Clear feedback
    }

    $(".option").click(function() {
        $(".option").prop("disabled", true); // Disable all options

        var isCorrect = $(this).data("correct");

        if (isCorrect) {
            $(".feedback").css("color", "green").text("Correct!");
        } else {
            $(".feedback").css("color", "red").text("Incorrect.");
        }
    });

    // Restart button click event
    $(".restart-btn").click(function() {
        resetQuiz();
    });
});
