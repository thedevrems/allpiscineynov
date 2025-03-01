/**
 * Convertit un tableau en un ensemble (Set), supprimant ainsi les doublons.
 * @param {Array} arr - Le tableau à convertir.
 * @returns {Set} - L'ensemble créé à partir du tableau.
 */
function arrToSet(arr) {
    return new Set(arr);
}

/**
 * Convertit un tableau en une chaîne de caractères.
 * @param {Array} arr - Le tableau à convertir.
 * @returns {string} - La chaîne résultante de la concaténation des éléments du tableau.
 */
function arrToStr(arr) {
    return arr.join('');
}

/**
 * Convertit un ensemble (Set) en tableau.
 * @param {Set} set - L'ensemble à convertir.
 * @returns {Array} - Le tableau contenant les éléments de l'ensemble.
 */
function setToArr(set) {
    return Array.from(set);
}

/**
 * Convertit un ensemble (Set) en une chaîne de caractères.
 * @param {Set} set - L'ensemble à convertir.
 * @returns {string} - La chaîne résultante de la concaténation des éléments de l'ensemble.
 */
function setToStr(set) {
    return Array.from(set).join('');
}

/**
 * Convertit une chaîne de caractères en un tableau de caractères.
 * @param {string} str - La chaîne à convertir.
 * @returns {Array} - Le tableau de caractères.
 */
function strToArr(str) {
    return str.split('');
}

/**
 * Convertit une chaîne de caractères en un ensemble (Set) de caractères uniques.
 * @param {string} str - La chaîne à convertir.
 * @returns {Set} - L'ensemble contenant les caractères uniques de la chaîne.
 */
function strToSet(str) {
    return new Set(str);
}

/**
 * Convertit une Map en un objet simple.
 * @param {Map} map - La Map à convertir.
 * @returns {Object} - L'objet résultant.
 */
function mapToObj(map) {
    return Object.fromEntries(map);
}

/**
 * Convertit un objet en un tableau contenant ses valeurs.
 * @param {Object} obj - L'objet à convertir.
 * @returns {Array} - Le tableau contenant les valeurs de l'objet.
 */
function objToArr(obj) {
    return Object.values(obj);
}

/**
 * Convertit un objet en une Map.
 * @param {Object} obj - L'objet à convertir.
 * @returns {Map} - La Map résultante.
 */
function objToMap(obj) {
    return new Map(Object.entries(obj));
}

/**
 * Convertit un tableau en un objet, où les index deviennent des clés.
 * @param {Array} arr - Le tableau à convertir.
 * @returns {Object} - L'objet résultant.
 */
function arrToObj(arr) {
    return arr.reduce((acc, curr, idx) => {
        acc[idx] = curr;
        return acc;
    }, {});
}

/**
 * Convertit une chaîne de caractères en un objet, où chaque caractère a un index comme clé.
 * @param {string} str - La chaîne à convertir.
 * @returns {Object} - L'objet résultant.
 */
function strToObj(str) {
    return str.split('').reduce((acc, curr, idx) => {
        acc[idx] = curr;
        return acc;
    }, {});
}

/**
 * Détermine le type avancé d'une valeur (ex: Map, Set, Array, etc.).
 * @param {*} value - La valeur à tester.
 * @returns {string} - Le type de la valeur sous forme de chaîne.
 */
function superTypeOf(value) {
    if (value instanceof Map) {
        return 'Map';
    }
    if (value instanceof Set) {
        return 'Set';
    }
    if (value instanceof Array) {
        return 'Array';
    }
    if (value === null) {
        return 'null';
    }
    if (value === undefined) {
        return 'undefined';
    }
    if (value && typeof value === 'object') {
        return 'Object';
    }
    const type = typeof value;
    return type.charAt(0).toUpperCase() + type.slice(1);
}
