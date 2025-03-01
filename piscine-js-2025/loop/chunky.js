/**
 * Divise un tableau en plusieurs sous-tableaux de taille spécifiée.
 * 
 * @param {Array} array - Le tableau d'origine à diviser.
 * @param {number} size - La taille maximale de chaque sous-tableau.
 * @returns {Array} - Un tableau contenant les sous-tableaux découpés.
 */
function chunk(array, size) {
  const result = []; // Initialise un tableau pour stocker les sous-tableaux.
  
  // Parcourt le tableau avec un pas de "size"
  for (let i = 0; i < array.length; i += size) {
      // Extrait une tranche du tableau de l'index "i" à "i + size"
      // et l'ajoute au tableau "result".
      result.push(array.slice(i, i + size));
  }
  
  return result; // Retourne le tableau contenant les sous-tableaux.
}
