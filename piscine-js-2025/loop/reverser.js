/**
 * Inverse l'ordre des éléments d'un tableau ou d'une chaîne de caractères.
 * 
 * @param {string | any[]} input - La chaîne ou le tableau à inverser.
 * @returns {string | any[]} - La chaîne ou le tableau inversé.
 */
function reverse(input) {
    const isString = typeof input === 'string'; // Vérifie si l'entrée est une chaîne.
    const length = input.length; // Récupère la longueur de l'entrée.
    let result = isString ? '' : []; // Initialise le résultat sous forme de chaîne ou de tableau.

    // Parcourt l'entrée de la fin vers le début pour inverser l'ordre des éléments.
    for (let i = length - 1; i >= 0; i--) {
        if (isString) {
            result += input[i]; // Concatène les caractères si l'entrée est une chaîne.
        } else {
            result.push(input[i]); // Ajoute les éléments en ordre inverse si l'entrée est un tableau.
        }
    }

    return result; // Retourne le tableau ou la chaîne inversée.
}
