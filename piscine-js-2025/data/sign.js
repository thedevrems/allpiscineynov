/**
 * Détermine le signe d'un nombre.
 * 
 * @param {number} num - Le nombre dont on veut connaître le signe.
 * @returns {number} - Retourne 1 si le nombre est positif, -1 s'il est négatif, et 0 s'il est nul.
 */
function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}

/**
* Vérifie si deux nombres ont le même signe.
* 
* @param {number} a - Premier nombre.
* @param {number} b - Deuxième nombre.
* @returns {boolean} - Retourne `true` si les deux nombres ont le même signe, sinon `false`.
*/
function sameSign(a, b) {
  return sign(a) === sign(b);
}
