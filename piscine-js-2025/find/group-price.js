/**
 * Extrait les prix d'une chaîne et retourne un tableau 2D avec leur décomposition.
 *
 * @param {string} str - La chaîne de caractères contenant les prix.
 * @returns {Array} - Un tableau contenant les prix sous forme de sous-tableaux [prix complet, partie entière, décimale].
 */
function groupPrice(str) {
  // Expression régulière pour capturer les prix sous différents formats :
  // ([A-Z]{3}|\$) : Capture un symbole monétaire (3 lettres majuscules comme "USD" ou "$").
  // (\d+) : Capture la partie entière du prix (un ou plusieurs chiffres).
  // \. : Capture le point décimal.
  // (\d{2}) : Capture les deux chiffres après la virgule (centimes).
  const regex = /([A-Z]{3}|\$)(\d+)\.(\d{2})/g;
  
  let matches; // Stocke le résultat temporaire de `exec()`.
  const result = []; // Tableau pour stocker les résultats finaux.
  
  // Utilisation d'une boucle `while` pour récupérer toutes les correspondances.
  while ((matches = regex.exec(str)) !== null) {
      // `matches[0]` : Prix complet (ex: "$12.34" ou "USD45.67").
      // `matches[2]` : Partie entière du prix.
      // `matches[3]` : Partie décimale (centimes).
      result.push([matches[0], matches[2], matches[3]]);
  }
  
  return result; // Retourne le tableau contenant toutes les correspondances.
}
