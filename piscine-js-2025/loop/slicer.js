/**
 * Fonction qui réimplémente le comportement de Array.prototype.slice et String.prototype.slice.
 * Elle extrait une portion d'un tableau ou d'une chaîne de caractères.
 * 
 * @param {Array|string} input - Le tableau ou la chaîne à traiter.
 * @param {number} start - L'index de départ (peut être négatif pour partir de la fin).
 * @param {number} [end] - L'index de fin (non inclus). Si omis, prend la longueur de l'input.
 * @returns {Array|string} - Une nouvelle partie de l'input selon les indices donnés.
 */
function slice(input, start, end) {
    const length = input.length; // Longueur de l'input
    const result = []; // Contiendra les éléments extraits

    // Calcul de l'index de départ
    const startIndex = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);

    // Calcul de l'index de fin (ou longueur si non défini)
    const endIndex = end === undefined ? length : (end < 0 ? Math.max(length + end, 0) : Math.min(end, length));

    // Extraction des éléments entre startIndex et endIndex
    for (let i = startIndex; i < endIndex; i++) {
        result.push(input[i]);
    }

    // Retourne un tableau ou une chaîne selon le type d'input
    return typeof input === 'string' ? result.join('') : result;
}
