/**
 * Répète une chaîne de caractères un certain nombre de fois.
 * 
 * @param {string} str - La chaîne de caractères à répéter.
 * @param {number} num - Le nombre de répétitions.
 * @returns {string} - La chaîne répétée ou une chaîne vide si num <= 0.
 */
function repeat(str, num) {
    if (num <= 0) return ""; // Cas de base, retourne une chaîne vide si num est négatif ou nul.
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str; // Concatène la chaîne str num fois.
    }
    return result;
}
