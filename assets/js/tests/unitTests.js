// Simple unit tests for validation and calculation functions

import { validateInputs } from '../validation.js';
import { rumus, rumusLose } from '../home.js';
import { win, lose } from '../winlose.js';
import { total, minLose } from '../losestreak.js';

function testValidateInputs() {
    console.assert(validateInputs(10, 50).valid === true, "Valid inputs failed");
    console.assert(validateInputs(-1, 50).valid === false, "Negative tMatch passed");
    console.assert(validateInputs(10, 101).valid === false, "tWr > 100 passed");
    console.assert(validateInputs(10, 50, 5, "wrReq").valid === true, "Valid with extraParam failed");
    console.assert(validateInputs(10, 50, -1, "wrReq").valid === false, "Negative extraParam passed");
    console.log("validateInputs tests passed");
}

function testRumusFunctions() {
    console.assert(rumus(10, 50, 60) === 2, "rumus calculation failed");
    console.assert(rumusLose(10, 50, 60) === -4, "rumusLose calculation failed");
    console.log("rumus and rumusLose tests passed");
}

function testWinLoseFunctions() {
    console.assert(win(10, 50) === 5, "win calculation failed");
    console.assert(lose(10, 50) === 5, "lose calculation failed");
    console.log("win and lose tests passed");
}

function testTotalMinLoseFunctions() {
    console.assert(total(10, 50, 2) === "41.7", "total calculation failed");
    console.assert(minLose(10, 50) === 5, "minLose calculation failed");
    console.log("total and minLose tests passed");
}

function runTests() {
    testValidateInputs();
    testRumusFunctions();
    testWinLoseFunctions();
    testTotalMinLoseFunctions();
    console.log("All unit tests passed");
}

runTests();
