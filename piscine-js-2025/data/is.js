// Objet contenant des fonctions de vérification des types de valeurs
const is = {};

/**
 * Vérifie si une valeur est un nombre.
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est un nombre, sinon False.
 */
is.num = function(value) {
    return typeof value === 'number';
};

/**
 * Vérifie si une valeur est NaN (Not a Number).
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est NaN, sinon False.
 */
is.nan = function(value) {
    return is.num(value) && isNaN(value);
};

/**
 * Vérifie si une valeur est une chaîne de caractères.
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est une chaîne, sinon False.
 */
is.str = function(value) {
    return typeof value === 'string';
};

/**
 * Vérifie si une valeur est un booléen.
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est un booléen, sinon False.
 */
is.bool = function(value) {
    return typeof value === 'boolean';
};

/**
 * Vérifie si une valeur est "undefined".
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est undefined, sinon False.
 */
is.undef = function(value) {
    return typeof value === 'undefined';
};

/**
 * Vérifie si une valeur est définie (différente de undefined).
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est définie, sinon False.
 */
is.def = function(value) {
    return !is.undef(value);
};

/**
 * Vérifie si une valeur est un tableau.
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est un tableau, sinon False.
 */
is.arr = function(value) {
    return Array.isArray(value);
};

/**
 * Vérifie si une valeur est un objet (exclut null et les tableaux).
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est un objet simple, sinon False.
 */
is.obj = function(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
};

/**
 * Vérifie si une valeur est une fonction.
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est une fonction, sinon False.
 */
is.fun = function(value) {
    return typeof value === 'function';
};

/**
 * Vérifie si une valeur est "truthy" (évaluée comme vraie en contexte booléen).
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est truthy, sinon False.
 */
is.truthy = function(value) {
    return !!value;
};

/**
 * Vérifie si une valeur est "falsy" (évaluée comme fausse en contexte booléen).
 * @param {*} value - La valeur à tester.
 * @returns {boolean} - True si la valeur est falsy, sinon False.
 */
is.falsy = function(value) {
    return !value;
};
