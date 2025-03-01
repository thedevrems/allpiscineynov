/**
 * Sépare une chaîne de caractères en un tableau de mots.
 * 
 * @param {string} str - La chaîne de caractères à diviser.
 * @returns {string[]} - Un tableau contenant les mots extraits de la chaîne.
 */
function words(str) {
  return str.split(' ');
}

/**
* Concatène un tableau de mots en une phrase unique.
* 
* @param {string[]} arr - Un tableau contenant des mots.
* @returns {string} - Une phrase formée en joignant les mots avec des espaces.
*/
function sentence(arr) {
  return arr.join(' ');
}

/**
* Transforme une chaîne de caractères en majuscules.
* 
* @param {string} str - La chaîne de caractères à convertir.
* @returns {string} - La chaîne convertie en majuscules.
*/
function yell(str) {
  return str.toUpperCase();
}

/**
* Transforme une chaîne de caractères en minuscules et l'entoure d'astérisques.
* 
* @param {string} str - La chaîne de caractères à convertir.
* @returns {string} - La chaîne convertie en minuscules et entourée d'astérisques.
*/
function whisper(str) {
  return `*${str.toLowerCase()}*`;
}

/**
* Met en majuscule la première lettre d'une chaîne et le reste en minuscule.
* 
* @param {string} str - La chaîne de caractères à transformer.
* @returns {string} - La chaîne avec une capitale en début et le reste en minuscule.
*/
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
