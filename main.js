var toggleButton = document.getElementById('tooglebtn');
var skillsSection = document.querySelector('.skills-section');
var count = 0;
toggleButton.addEventListener("click", function () {
    if (count == 0) {
        skillsSection.style.display = "none";
        count = 1;
    }
    else {
        skillsSection.style.display = "block";
        count = 0;
    }
});
