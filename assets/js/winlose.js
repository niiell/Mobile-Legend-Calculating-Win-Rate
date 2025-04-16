
import { validateInputs } from './validation.js';

// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

/**
 * Validates inputs and calculates total wins and losses.
 * Displays appropriate messages including edge cases.
 */
function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);

    const validationResult = validateInputs(tMatch, tWr);
    if (!validationResult.valid) {
        display(validationResult.message);
        return;
    }

    const winNum = win(tMatch, tWr);
    const loseNum = lose(tMatch, tWr);

    let text = `Total win: <b>${winNum}</b> match <br> Total lose: <b>${loseNum}</b> match <br>`;
    display(text);
}

/**
 * Displays the result or error message in the UI.
 * @param {string} text - HTML string to display.
 */
function display(text) {
    resultText.innerHTML = text;
}

/**
 * Calculates total wins based on matches and win rate.
 * @param {number} tMatch - Total matches played.
 * @param {number} tWr - Current win rate percentage.
 * @returns {number} Rounded total wins.
 */
function win(tMatch, tWr) {
    return Math.round(tMatch * (tWr / 100));
}

/**
 * Calculates total losses based on matches and win rate.
 * @param {number} tMatch - Total matches played.
 * @param {number} tWr - Current win rate percentage.
 * @returns {number} Rounded total losses.
 */
function lose(tMatch, tWr) {
    return Math.round(tMatch - (tMatch * (tWr / 100)));
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {
    checkLS();
    welcomeMsg();
}

function eventListener() {
    hasil.addEventListener("click", res);
}
