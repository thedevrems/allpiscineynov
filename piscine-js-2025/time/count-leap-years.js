/**
 * Compte le nombre d'années bissextiles depuis l'année 1 jusqu'à l'année de la date donnée.
 * 
 * @param {Date} date - La date jusqu'à laquelle compter les années bissextiles.
 * @returns {number} - Le nombre d'années bissextiles depuis l'année 1 jusqu'à l'année de la date.
 */
function countLeapYears(date) {
  if (!(date instanceof Date)) {
    return 0; // Retourne 0 si l'entrée n'est pas une instance de Date
  }

  const year = date.getFullYear();
  let count = 0;

  // Boucle à travers les années depuis l'année 1 jusqu'à l'année de la date donnée
  for (let i = 1; i < year; i++) {
    // Vérifie si l'année est bissextile
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      count++; // Incrémente le compteur si l'année est bissextile
    }
  }
  return count; // Retourne le nombre total d'années bissextiles
}