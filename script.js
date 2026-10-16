
const openButton = document.getElementById("open-card");
const loveLetter = document.getElementById("love-letter");

openButton.addEventListener("click", function () {
    loveLetter.hidden = false;
    openButton.textContent = "Kirje avattu ♡";
});

const memoryButtons = document.querySelectorAll(".memory-button");

memoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const memoryText = button.nextElementSibling;
        const isHidden = memoryText.hidden;

        memoryText.hidden = !isHidden;
        button.setAttribute("aria-expanded", String(isHidden));
    });
});
