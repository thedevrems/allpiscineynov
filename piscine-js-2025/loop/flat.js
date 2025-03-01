/**
 * Aplatie un tableau jusqu'à une profondeur donnée.
 * Fonctionne comme `Array.prototype.flat()`, mais prend le tableau en premier argument.
 * 
 * @param {Array} arr - Le tableau à aplatir.
 * @param {number} [depth=1] - La profondeur d'aplatissement.
 * @returns {Array} - Le tableau aplati jusqu'à la profondeur spécifiée.
 */
function flat(arr, depth = 1) {
  // Si la profondeur est 0, retourne une copie du tableau sans modification.
  if (depth === 0) return arr.slice();
  
  // Réduit le tableau en aplatissant les sous-tableaux jusqu'à la profondeur spécifiée.
  return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
          // Si la valeur est un tableau, l'aplatir récursivement avec une profondeur réduite.
          acc.push(...flat(val, depth - 1));
      } else {
          // Sinon, l'ajouter directement au tableau résultant.
          acc.push(val);
      }
      return acc;
  }, []);
}
