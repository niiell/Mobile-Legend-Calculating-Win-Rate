// validation.js - reusable validation module for input fields

/**
 * Validates input fields for match count, win rate, and optional additional parameters.
 * @param {number} tMatch - Total matches played.
 * @param {number} tWr - Current win rate percentage.
 * @param {number} [extraParam] - Optional extra parameter (e.g., wrReq or lsReq).
 * @param {string} [extraParamName] - Name of the extra parameter for error messages.
 * @returns {Object} - { valid: boolean, message: string }
 */
export function validateInputs(tMatch, tWr, extraParam, extraParamName) {
    if (isNaN(tMatch) || isNaN(tWr) || (extraParam !== undefined && isNaN(extraParam))) {
        return { valid: false, message: "Field harus diisi bro." };
    }
    if (tMatch < 0 || tWr < 0 || (extraParam !== undefined && extraParam < 0)) {
        return { valid: false, message: "Field tidak boleh lebih kecil dari 0" };
    }
    if (!Number.isInteger(tMatch) || (extraParam !== undefined && !Number.isInteger(extraParam))) {
        return { valid: false, message: "Field harus bilangan bulat" };
    }
    if (tWr > 100 || (extraParamName === "wrReq" && extraParam > 100)) {
        return { valid: false, message: "WR tidak boleh lebih dari 100%" };
    }
    return { valid: true, message: "" };
}
