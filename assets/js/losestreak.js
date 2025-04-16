
import { validateInputs } from './validation.js';

// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

/**
 * Validates inputs and calculates new win rate after losing streak.
 * Displays appropriate messages including edge cases.
 */
function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);
    const lsReq = parseFloat(document.querySelector("#lsReq").value);

    const validationResult = validateInputs(tMatch, tWr, lsReq, "lsReq");
    if (!validationResult.valid) {
        display(validationResult.message);
        return;
    }

    const totalNum = total(tMatch, tWr, lsReq);
    const minLoseNum = minLose(tMatch, tWr);
    let text = "";

    if (totalNum < 0) {
        text = `Minimal anda harus losestreak <b>${minLoseNum}</b> kali`;
    } else if (tWr > 100) {
        text = `WR tidak boleh lebih dari 100%`;
    } else {
        text = `Jika anda losestreak sebanyak <b>${lsReq}</b> kali, maka winrate anda menjadi <b>${totalNum}%</b>`;
    }
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
 * Calculates new win rate after losing streak.
 * @param {number} tMatch - Total matches played.
 * @param {number} tWr - Current win rate percentage.
 * @param {number} lsReq - Losing streak count.
 * @returns {string} New win rate percentage formatted to 1 decimal place.
 */
function total(tMatch, tWr, lsReq) {
    let totalWin = (tMatch * tWr) / 100;
    let win = totalWin / (tMatch + lsReq) * 100;
    return win.toFixed(1);
}

/**
 * Calculates minimum losing streak count.
 * @param {number} tMatch - Total matches played.
 * @param {number} tWr - Current win rate percentage.
 * @returns {number} Minimum losing streak count rounded up.
 */
function minLose(tMatch, tWr) {
    return Math.ceil(tMatch * tWr / 100);
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
