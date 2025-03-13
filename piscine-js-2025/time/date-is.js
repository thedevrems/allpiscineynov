/**
 * Vérifie si une date est valide.
 * 
 * @param {Date|number} date - La date à vérifier, peut être un objet Date ou un timestamp.
 * @returns {boolean} - False si la date est invalide, sinon true.
 */
function isValid(date) {
    if (typeof date === 'number') {
        date = new Date(date);
    }
    return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Vérifie si la première date est postérieure à la seconde.
 * 
 * @param {Date} date1 - La première date à comparer.
 * @param {Date} date2 - La seconde date à comparer.
 * @returns {boolean} - True si la première date est postérieure à la seconde, sinon false.
 */
function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
}

/**
 * Vérifie si la première date est antérieure à la seconde.
 * 
 * @param {Date} date1 - La première date à comparer.
 * @param {Date} date2 - La seconde date à comparer.
 * @returns {boolean} - True si la première date est antérieure à la seconde, sinon false.
 */
function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2;
}

/**
 * Vérifie si une date est dans le futur par rapport à la date actuelle.
 * 
 * @param {Date} date - La date à vérifier.
 * @returns {boolean} - True si la date est valide et dans le futur, sinon false.
 */
function isFuture(date) {
    const now = new Date();
    return isValid(date) && date > now;
}

/**
 * Vérifie si une date est dans le passé par rapport à la date actuelle.
 * 
 * @param {Date} date - La date à vérifier.
 * @returns {boolean} - True si la date est valide et dans le passé, sinon false.
 */
function isPast(date) {
    const now = new Date();
    return isValid(date) && date < now;
}