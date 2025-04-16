
import { validateInputs } from './validation.js';

// Variables
const hasil = document.querySelector("#hasil");
const resultText = document.querySelector("#resultText");

/**
 * Validates inputs and calculates the number of wins needed to reach target win rate.
 * Displays appropriate messages including edge cases.
 */
function validation() {
    const tMatch = parseFloat(document.querySelector("#tMatch").value);
    const tWr = parseFloat(document.querySelector("#tWr").value);
    const wrReq = parseFloat(document.querySelector("#wrReq").value);

    const validationResult = validateInputs(tMatch, tWr, wrReq, "wrReq");
    if (!validationResult.valid) {
        display(validationResult.message);
        return;
    }

    const resultNum = rumus(tMatch, tWr, wrReq);
    const loseNum = rumusLose(tMatch, tWr, wrReq);

    let text = "";
    if (tWr == 100 && wrReq == 100) {
        text = `Kamu perlu <b>0</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
    } else if (tWr > wrReq) {
        text = `Kamu perlu <b>${loseNum}</b> lose tanpa win untuk mendapatkan win rate <b>${wrReq}%</b>`;
    } else if (tMatch == 0 && tWr == 0 && wrReq == 100) {
        text = `Kamu perlu <b>1</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
    } else if (wrReq == 100) {
        text = `yo ndak bisa, yang bisa cuman Monton`;
    } else if (resultNum >= 100000) {
        text = `Kamu perlu lebih dari <b>100.000</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
    } else {
        text = `Kamu perlu <b>${resultNum}</b> win tanpa lose untuk mendapatkan win rate <b>${wrReq}%</b>`;
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
 * Calculates the number of wins needed to reach the target win rate.
 * @param {number} tMatch - Total matches played.
 * @param {number} tWr - Current win rate percentage.
 * @param {number} wrReq - Target win rate percentage.
 * @returns {number} Rounded number of wins needed.
 */
function rumus(tMatch, tWr, wrReq) {
    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tMatch;
    return Math.round(final);
}

/**
 * Calculates the number of losses needed to reach the target win rate.
 * @param {number} tMatch - Total matches played.
 * @param {number} tWr - Current win rate percentage.
 * @param {number} wrReq - Target win rate percentage.
 * @returns {number} Rounded number of losses needed.
 */
function rumusLose(tMatch, tWr, wrReq) {
    let totalWin = (tMatch * tWr) / 100;
    let win = (totalWin / (wrReq / 100)) - tMatch;
    return Math.round(win);
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
    hasil.addEventListener("click", () => {
        validation();

        // Animate result display
        resultText.classList.remove("show");
        setTimeout(() => {
            resultText.classList.add("show");
        }, 50);
    });
}
