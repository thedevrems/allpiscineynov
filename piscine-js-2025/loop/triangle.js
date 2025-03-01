/**
 * Génère une chaîne représentant un triangle constitué d'un caractère donné.
 * 
 * @param {string} char - Le caractère utilisé pour construire le triangle.
 * @param {number} height - La hauteur du triangle (nombre de lignes).
 * @returns {string} - Une chaîne de caractères représentant le triangle.
 */
function triangle(char, height) {
  let result = ''; // Initialise une chaîne vide pour stocker le triangle.

  // Boucle pour générer chaque ligne du triangle.
  for (let i = 1; i <= height; i++) {
      result += char.repeat(i); // Répète le caractère 'char' i fois pour créer la ligne actuelle.

      // Ajoute un saut de ligne sauf pour la dernière ligne.
      if (i < height) result += '\n';
  }

  return result; // Retourne la chaîne représentant le triangle.
}
