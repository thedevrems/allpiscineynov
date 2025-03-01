/**
 * Sépare une chaîne de caractères en un tableau de sous-chaînes selon un séparateur donné.
 * Fonctionne comme `String.prototype.split()`.
 * 
 * @param {string} str - La chaîne à découper.
 * @param {string} separator - Le séparateur utilisé pour diviser la chaîne.
 * @param {number} [limit] - (Optionnel) Nombre maximal d'éléments dans le tableau résultant.
 * @returns {string[]} - Tableau contenant les morceaux de la chaîne.
 */
function split(str, separator, limit) {
  str = String(str); // Assure que str est une chaîne.

  // Cas où le séparateur est une chaîne vide : découpe chaque caractère.
  if (separator === '') {
      const result = [];
      const maxLength = limit !== undefined ? Math.min(limit, str.length) : str.length;
      for (let i = 0; i < maxLength; i++) {
          result.push(str[i]);
      }
      return result;
  }

  const result = [];
  if (str === '') return ['']; // Cas d'une chaîne vide.
  if (separator === undefined) return [str]; // Cas où aucun séparateur n'est fourni.

  let startIndex = 0;
  let endIndex = 0;
  const sepLength = separator.length;

  while (endIndex !== -1) {
      if (limit !== undefined && result.length >= limit) {
          break; // Arrête si on atteint la limite.
      }

      endIndex = str.indexOf(separator, startIndex);

      if (endIndex === -1) {
          result.push(str.slice(startIndex)); // Dernier morceau.
      } else {
          result.push(str.slice(startIndex, endIndex)); // Ajoute la sous-chaîne découpée.
          startIndex = endIndex + sepLength;
      }
  }

  return result;
}

/**
* Concatène les éléments d'un tableau en une seule chaîne, séparés par un délimiteur donné.
* Fonctionne comme `Array.prototype.join()`.
* 
* @param {any[]} arr - Le tableau contenant les éléments à joindre.
* @param {string} [separator=','] - Le séparateur utilisé entre chaque élément (par défaut `,`).
* @returns {string} - La chaîne résultante.
*/
function join(arr, separator = ',') {
  if (arr.length === 0) return ''; // Retourne une chaîne vide si le tableau est vide.

  let result = arr[0].toString(); // Convertit le premier élément en chaîne.

  for (let i = 1; i < arr.length; i++) {
      result += separator + arr[i]; // Ajoute le séparateur entre les éléments.
  }

  return result;
}
