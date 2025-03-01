/**
 * Recherche la première occurrence d'une valeur dans un tableau.
 * 
 * @param {Array} array - Le tableau dans lequel chercher.
 * @param {*} value - La valeur à rechercher.
 * @param {number} [fromIndex=0] - L'index de départ de la recherche (peut être négatif).
 * @returns {number} - L'index de la première occurrence ou -1 si la valeur n'est pas trouvée.
 */
function indexOf(array, value, fromIndex = 0) {
    // Détermine le point de départ en tenant compte d'un index négatif
    const start = fromIndex < 0 ? Math.max(array.length + fromIndex, 0) : fromIndex;
    
    // Parcourt le tableau à partir de l'index de départ
    for (let i = start; i < array.length; i++) {
        if (array[i] === value) {
            return i; // Retourne l'index de la première occurrence trouvée
        }
    }
    return -1; // Retourne -1 si la valeur n'est pas trouvée
}

/**
 * Recherche la dernière occurrence d'une valeur dans un tableau.
 * 
 * @param {Array} array - Le tableau dans lequel chercher.
 * @param {*} value - La valeur à rechercher.
 * @param {number} [fromIndex=array.length - 1] - L'index de départ pour la recherche à rebours (peut être négatif).
 * @returns {number} - L'index de la dernière occurrence ou -1 si la valeur n'est pas trouvée.
 */
function lastIndexOf(array, value, fromIndex = array.length - 1) {
    // Détermine le point de départ en tenant compte d'un index négatif
    const start = fromIndex < 0 ? array.length + fromIndex : fromIndex;
    
    // Parcourt le tableau à rebours depuis l'index de départ
    for (let i = start; i >= 0; i--) {
        if (array[i] === value) {
            return i; // Retourne l'index de la dernière occurrence trouvée
        }
    }
    return -1; // Retourne -1 si la valeur n'est pas trouvée
}

/**
 * Vérifie si une valeur est présente dans un tableau.
 * 
 * @param {Array} array - Le tableau dans lequel chercher.
 * @param {*} value - La valeur à rechercher.
 * @returns {boolean} - true si la valeur est trouvée, sinon false.
 */
function includes(array, value) {
    // Parcourt le tableau
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true; // Retourne true si la valeur est trouvée
        }
    }
    return false; // Retourne false si la valeur n'est pas trouvée
}