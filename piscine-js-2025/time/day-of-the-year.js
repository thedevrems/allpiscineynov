/**
 * Calcule le nombre de jours écoulés depuis le premier jour de l'année jusqu'à la date donnée.
 * 
 * @param {Date} date - La date pour laquelle calculer le nombre de jours écoulés depuis le début de l'année.
 * @returns {number} - Le nombre de jours écoulés depuis le premier jour de l'année.
 */
function dayOfTheYear(date) {
  if (!(date instanceof Date)) {
    return 0; // Retourne 0 si l'entrée n'est pas une instance de Date
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Nombre de jours dans chaque mois, en supposant une année non bissextile
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Ajuste pour les années bissextiles
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29; // Février a 29 jours dans une année bissextile
  }

  let dayNumber = day;
  // Additionne les jours des mois précédents pour obtenir le jour de l'année
  for (let i = 0; i < month; i++) {
    dayNumber += daysInMonth[i];
  }

  return dayNumber; // Retourne le nombre de jours écoulés depuis le début de l'année
}