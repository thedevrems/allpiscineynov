/**
 * Ajoute un point après chaque voyelle dans une chaîne de caractères.
 *
 * @param {string} str - La chaîne de caractères d'entrée.
 * @returns {string} - La chaîne modifiée avec un point après chaque voyelle.
 */
function vowelDots(str) {
  // Expression régulière pour détecter les voyelles (a, e, i, o, u).
  // [aeiou] : correspond à l'une des voyelles en minuscules.
  // Le drapeau 'gi' signifie :
  // - 'g' (global) : applique la recherche sur toute la chaîne, et pas seulement sur la première occurrence.
  // - 'i' (insensible à la casse) : permet de détecter aussi les voyelles en majuscules.
  const vowels = /[aeiou]/gi;

  // Remplace chaque voyelle trouvée par elle-même suivie d'un point.
  return str.replace(vowels, match => match + '.');
}