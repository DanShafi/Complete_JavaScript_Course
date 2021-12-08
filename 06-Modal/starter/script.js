'use strict';

const modalOne = document.querySelector('.show-modal');

const modalToggle = () => {
    document.querySelectorAll('div').forEach(div =>
        div.classList.toggle("hidden")
)};

modalOne.addEventListener("click", () => {
    modalToggle();
});

document.addEventListener("keydown", ({key}) => {
    if (key === "Escape") {
    modalToggle();
    }
});