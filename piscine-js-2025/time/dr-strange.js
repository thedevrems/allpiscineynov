/**
 * Ajoute une semaine de 14 jours à une date donnée et retourne le jour de la semaine.
 * 
 * @param {Date} date - La date pour laquelle déterminer le jour de la semaine.
 * @returns {string} - Le jour de la semaine dans le format de la nouvelle semaine de 14 jours.
 */
function addWeek(date) {
    const daysOfWeek = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];

    // Calcule le nombre de jours depuis l'époque 0001-01-01
    const epoch = new Date('0001-01-01');
    const diffTime = date.getTime() - epoch.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Détermine le jour de la nouvelle semaine de 14 jours
    const dayIndex = diffDays % 14;
    return daysOfWeek[dayIndex];
}

/**
 * Modifie l'heure d'une date donnée selon les valeurs fournies et retourne la nouvelle date.
 * 
 * @param {Object} param0 - Un objet contenant la date et les valeurs d'heure, minute et seconde à ajuster.
 * @param {Date} param0.date - La date à modifier.
 * @param {number} [param0.hour=0] - L'heure à définir.
 * @param {number} [param0.minute=0] - La minute à définir.
 * @param {number} [param0.second=0] - La seconde à définir.
 * @returns {Date} - La nouvelle date avec l'heure modifiée.
 */
function timeTravel({ date, hour = 0, minute = 0, second = 0 }) {
    const newDate = new Date(date);

    // Ajuste l'heure selon les valeurs fournies
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);

    return newDate;
}