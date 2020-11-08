var questionsRight = 0;
var score;

var darkmodeCheckbox = document.querySelector('input[type="checkbox"]');

darkmodeCheckbox.addEventListener('change', function () {
    if (darkmodeCheckbox.checked) {
    wantDarkMode = true;
    document.body.style.backgroundColor = "black";
} else {
    wantDarkMode = false;
    document.body.style.backgroundColor = "white";
    }
});

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