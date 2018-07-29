// load countdown timer at the starting 
window.onload = function () {
    var myVar = setInterval(myTimer, 1000);
    var initTime = 60;
    var i = 0;
    function myTimer() {
        i++;
        var newTime = (initTime - i * 1);
        if (newTime >= 0) {
            document.getElementById("demo").innerHTML = "Time Remaining: " + newTime + " Seconds";
        }
        else {
            //check if timer is up, if yes then execute the answers
            if (newTime <= 0 || document.getElementById("submit").clicked == true) {
                submitAnswers();
                //Clear form
                document.quizForm.innerHTML = ' ';
                document.done.innerHTML = "";
            }
        }
    }
}

// Function to check the test scores 
function submitAnswers() {
    var total = 7;
    var score = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeLeft = 30;

    // Code for Timer Start

    // Code for Timer Start
    // Get user input

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;

    // Correct Answer for all question.
    var answer = ["b", "d", "b", "c", "b", "d", "b"];

    // check answer

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === answer[i - 1]) {
            // correct answer, increment count
            score++;
        }
        // check if any question was unanswered.
        else if (eval('q' + i) === null || eval('q' + i) === '') {
            // increment unanswered count.
            unanswered++;
        }
        // increment incorrect count.
        else {
            incorrect++;
        }
    }



    // display results 
   
    var done = document.getElementById("done");
    var right = document.getElementById("right");
    var wrong = document.getElementById("wrong");
    var skipped = document.getElementById("skipped");
    done.innerHTML = '<h3>All Done!</h3>';
    right.innerHTML = '<h3>Correct Answers: <span>' + score + ' </span></h3>';
    wrong.innerHTML = '<h3>Incorrect Answers: <span>' + incorrect + ' </span></h3>';
    skipped.innerHTML = '<h3>Unanswered: <span>' + unanswered + ' </span></h3>';
     
    document.quizForm.innerHTML = ' ';
    return false;
   

}



// pseduocoding.....
// Create a HTML page to show the start button.
// Once start button press, display another page with the following points below:
// a. Build the question with multiple choice answers in radio button.
// b. Start the timer for 60 sec.
// c. Create a submit button to evalute the test results.

// Show the test results, either by clicking submit button or when timer is done.

