//defining global variables for grading quiz
var questionsRight = 0;
var score;

//changes style of things when darkmode switch is checked or not
var darkmodeCheckbox = document.querySelector('input[type="checkbox"]');
darkmodeCheckbox.addEventListener('change', function () {
    if (darkmodeCheckbox.checked) {
    document.body.style.backgroundColor = "black";
    document.getElementById("question1").style.backgroundColor = "black";
    document.getElementById("question1").style.color = "white";
    document.getElementById("question2").style.backgroundColor = "black";
    document.getElementById("question2").style.color = "white";
    document.getElementById("question3").style.backgroundColor = "black";
    document.getElementById("question3").style.color = "white";
    document.getElementById("question4").style.backgroundColor = "black";
    document.getElementById("question4").style.color = "white";
    document.getElementById("question5").style.backgroundColor = "black";
    document.getElementById("question5").style.color = "white";
} else {
    document.body.style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question1").style.color = "black";
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question2").style.color = "black";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question3").style.color = "black";
    document.getElementById("question4").style.backgroundColor = "white";
    document.getElementById("question4").style.color = "black";
    document.getElementById("question5").style.backgroundColor = "white";
    document.getElementById("question5").style.color = "black";
    }
});

//grades the trivia quiz
function submit() {
    var q1Answer = document.getElementById("q1CorrectRadio").checked;
    var q2Answer = document.getElementById("q2CorrectRadio").checked;
    var q3Answer = document.getElementById("q3CorrectRadio").checked;
    var q4Answer = document.getElementById("q4CorrectRadio").checked;
    var q5Answer = document.getElementById("q5CorrectRadio").checked;
    if (q1Answer == true) {
        questionsRight ++;
    }
    if (q2Answer == true) {
        questionsRight ++;
    }
    if (q3Answer == true) {
        questionsRight ++;
    }
    if (q4Answer == true) {
        questionsRight ++;
    }
    if (q5Answer == true) {
        questionsRight ++;
    }
    score = questionsRight / 5;
    var finalScore = score * 100;
    console.log(score);
    alert("Your final score is " + finalScore + "%");
    window.location.href = "index.html"
}