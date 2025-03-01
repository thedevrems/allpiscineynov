/**
 * Génère une chaîne contenant les nombres de 1 à N avec des remplacements spécifiques :
 * - Remplace les multiples de 3 par "NA".
 * - Remplace les multiples de 5 par "SA".
 * - Remplace les multiples de 3 et 5 par "NASA".
 * 
 * @param {number} N - Le nombre limite jusqu'auquel générer la séquence.
 * @returns {string} - Une chaîne contenant les nombres transformés et séparés par des espaces.
 */
function nasa(N) {
  let result = []; // Initialise un tableau pour stocker les valeurs.

  // Parcourt tous les nombres de 1 à N
  for (let i = 1; i <= N; i++) {
      // Vérifie si le nombre est divisible à la fois par 3 et par 5
      if (i % 3 === 0 && i % 5 === 0) {
          result.push("NASA");
      } 
      // Vérifie si le nombre est divisible par 3 uniquement
      else if (i % 3 === 0) {
          result.push("NA");
      } 
      // Vérifie si le nombre est divisible par 5 uniquement
      else if (i % 5 === 0) {
          result.push("SA");
      } 
      // Sinon, ajoute le nombre sous forme de chaîne de caractères
      else {
          result.push(i.toString());
      }
  }
  
  // Retourne une chaîne avec les valeurs jointes par un espace
  return result.join(" ");
}
