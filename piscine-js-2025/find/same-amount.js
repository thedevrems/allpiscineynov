/**
 * Vérifie si deux expressions régulières correspondent au même nombre d'occurrences dans une chaîne.
 *
 * @param {string} str - La chaîne de caractères à analyser.
 * @param {RegExp|string} regex1 - La première expression régulière (ou une chaîne représentant une regex).
 * @param {RegExp|string} regex2 - La deuxième expression régulière (ou une chaîne représentant une regex).
 * @returns {boolean} - Retourne `true` si les deux expressions correspondent au même nombre de fois, sinon `false`.
 */
function sameAmount(str, regex1, regex2) {
    // S'assurer que les arguments regex1 et regex2 sont bien des expressions régulières.
    // Si ce sont des chaînes, les convertir en RegExp avec le drapeau 'g' (global).
    const re1 = new RegExp(regex1, 'g');
    const re2 = new RegExp(regex2, 'g');

    // Utilisation de `match()` pour récupérer toutes les occurrences correspondant à chaque regex.
    // Si `match()` retourne `null` (aucune correspondance), alors on considère qu'il y a 0 occurrence.
    const matches1 = str.match(re1);
    const matches2 = str.match(re2);

    // Comparaison du nombre d'occurrences des deux expressions régulières.
    // `matches ? matches.length : 0` permet de gérer le cas où `match()` retourne `null`.
    return (matches1 ? matches1.length : 0) === (matches2 ? matches2.length : 0);
}