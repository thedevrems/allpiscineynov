/**
 * Récupère une valeur dans un objet en suivant un chemin spécifié sous forme de chaîne.
 * 
 * @param {Object} src - L'objet source dans lequel chercher la valeur.
 * @param {string} path - Le chemin d'accès à la valeur, sous forme de chaîne avec des clés séparées par des points.
 * @returns {*} - La valeur trouvée à l'emplacement spécifié, ou `undefined` si le chemin n'existe pas.
 */
function get(src, path) {
  const keys = path.split('.'); // Divise le chemin en un tableau de clés.
  let result = src; // Initialise la variable avec l'objet source.

  // Parcourt chaque clé du chemin pour accéder à la valeur correspondante.
  for (const key of keys) {
      // Vérifie si la valeur courante est `undefined` ou `null`, pour éviter une erreur d'accès aux propriétés.
      if (result === undefined || result === null) {
          return undefined; // Retourne `undefined` si le chemin est invalide.
      }
      result = result[key]; // Met à jour `result` avec la propriété actuelle.
  }

  return result; // Retourne la valeur finale trouvée.
}
