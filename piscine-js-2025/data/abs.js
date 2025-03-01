/**
 * Vérifie si un nombre est strictement positif.
 * 
 * @param {number} num - Le nombre à tester.
 * @returns {boolean} - Retourne `true` si le nombre est strictement positif, sinon `false`.
 */
function isPositive(num) {
  return num > 0;
}

/**
* Calcule la valeur absolue d'un nombre sans utiliser Math.abs().
* 
* @param {number} num - Le nombre dont on veut obtenir la valeur absolue.
* @returns {number} - La valeur absolue du nombre.
*/
function abs(num) {
  return num < 0 ? -num : num;
}
