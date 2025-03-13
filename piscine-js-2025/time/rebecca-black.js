/**
 * Vérifie si une date donnée est un vendredi.
 * 
 * @param {Date} date - La date à vérifier.
 * @returns {boolean} - True si la date est un vendredi, sinon false.
 */
function isFriday(date) {
  return date.getDay() === 5;
}

/**
 * Vérifie si une date tombe un week-end (samedi ou dimanche).
 * 
 * @param {Date} date - La date à vérifier.
 * @returns {boolean} - True si la date est un samedi ou un dimanche, sinon false.
 */
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/**
 * Vérifie si l'année de la date donnée est une année bissextile.
 * 
 * @param {Date} date - La date dont l'année est à vérifier.
 * @returns {boolean} - True si l'année est bissextile, sinon false.
 */
function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Vérifie si une date est le dernier jour du mois.
 * 
 * @param {Date} date - La date à vérifier.
 * @returns {boolean} - True si la date est le dernier jour du mois, sinon false.
 */
function isLastDayOfMonth(date) {
  const nextMonth = new Date(date);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  nextMonth.setDate(0);
  return date.getDate() === nextMonth.getDate();
}