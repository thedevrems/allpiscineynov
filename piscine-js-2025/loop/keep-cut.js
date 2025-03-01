/**
 * Supprime les deux premiers caractères d'une chaîne de caractères.
 * 
 * @param {string} str - La chaîne à modifier.
 * @returns {string} - La chaîne sans ses deux premiers caractères.
 */
function cutFirst(str) {
    return str.slice(2);
}

/**
 * Supprime les deux derniers caractères d'une chaîne de caractères.
 * 
 * @param {string} str - La chaîne à modifier.
 * @returns {string} - La chaîne sans ses deux derniers caractères.
 */
function cutLast(str) {
    return str.slice(0, -2);
}

/**
 * Supprime les deux premiers et les deux derniers caractères d'une chaîne de caractères.
 * 
 * @param {string} str - La chaîne à modifier.
 * @returns {string} - La chaîne sans ses deux premiers et deux derniers caractères.
 */
function cutFirstLast(str) {
    return str.slice(2, -2);
}

/**
 * Conserve uniquement les deux premiers caractères d'une chaîne de caractères.
 * 
 * @param {string} str - La chaîne à modifier.
 * @returns {string} - Une chaîne contenant uniquement les deux premiers caractères.
 */
function keepFirst(str) {
    return str.slice(0, 2);
}

/**
 * Conserve uniquement les deux derniers caractères d'une chaîne de caractères.
 * 
 * @param {string} str - La chaîne à modifier.
 * @returns {string} - Une chaîne contenant uniquement les deux derniers caractères.
 */
function keepLast(str) {
    return str.slice(-2);
}

/**
 * Conserve les deux premiers et les deux derniers caractères d'une chaîne de caractères.
 * Si la chaîne contient 3 caractères ou moins, elle est retournée inchangée.
 * 
 * @param {string} str - La chaîne à modifier.
 * @returns {string} - Une chaîne contenant les deux premiers et les deux derniers caractères, ou la chaîne originale si elle a 3 caractères ou moins.
 */
function keepFirstLast(str) {
    return str.length <= 3 ? str : str.slice(0, 2) + str.slice(-2);
}
