/**
 * Formate une date donnée selon une chaîne de format spécifiée, en utilisant des symboles de champ de date Unicode.
 * 
 * @param {Date} date - La date à formater.
 * @param {string} formatStr - La chaîne de format spécifiant le format de sortie.
 * @returns {string} - La chaîne formatée représentant la date.
 */
function format(date, formatStr) {
  if (!(date instanceof Date)) {
    return ''; // Retourne une chaîne vide si l'entrée n'est pas une instance de Date
  }

  // Définition des formateurs pour chaque symbole de format
  const formatters = {
    y: () => String(Math.abs(date.getFullYear())),
    yyyy: () => String(Math.abs(date.getFullYear())).padStart(4, '0'),

    G: () => (date.getFullYear() < 0 ? 'BC' : 'AD'),
    GGGG: () => (date.getFullYear() < 0 ? 'Before Christ' : 'Anno Domini'),

    M: () => String(date.getMonth() + 1),
    MM: () => String(date.getMonth() + 1).padStart(2, '0'),
    MMM: () => getMonthAbbreviation(date.getMonth()),
    MMMM: () => getMonthName(date.getMonth()),

    d: () => String(date.getDate()),
    dd: () => String(date.getDate()).padStart(2, '0'),

    E: () => getDayAbbreviation(date.getDay()),
    EEEE: () => getDayName(date.getDay()),

    h: () => String(getHour12(date.getHours())),
    hh: () => String(getHour12(date.getHours())).padStart(2, '0'),

    H: () => String(date.getHours()),
    HH: () => String(date.getHours()).padStart(2, '0'),

    m: () => String(date.getMinutes()),
    mm: () => String(date.getMinutes()).padStart(2, '0'),

    s: () => String(date.getSeconds()),
    ss: () => String(date.getSeconds()).padStart(2, '0'),

    a: () => (date.getHours() < 12 ? 'AM' : 'PM')
  };

  // Trie les motifs de format par longueur décroissante pour éviter les conflits de sous-chaînes
  const patterns = Object.keys(formatters).sort((a, b) => b.length - a.length);

  let result = '';
  let i = 0;

  // Parcourt la chaîne de format pour appliquer les formateurs
  while (i < formatStr.length) {
    if (formatStr[i] === '[') {
      let bracketContent = '';
      i++;

      // Traite le contenu entre crochets sans appliquer de format
      while (i < formatStr.length && formatStr[i] !== ']') {
        bracketContent += formatStr[i];
        i++;
      }

      result += '[' + processFormatTokens(bracketContent, patterns, formatters) + ']';
      if (i < formatStr.length) i++;
      continue;
    }

    if (formatStr[i] === '<') {
      let angleContent = '';
      i++;

      // Traite le contenu entre chevrons sans appliquer de format
      while (i < formatStr.length && formatStr[i] !== '>') {
        angleContent += formatStr[i];
        i++;
      }

      result += '<' + processFormatTokens(angleContent, patterns, formatters) + '>';
      if (i < formatStr.length) i++;
      continue;
    }

    let matchFound = false;
    for (const pattern of patterns) {
      if (formatStr.substring(i, i + pattern.length) === pattern) {
        result += formatters[pattern](); // Applique le formateur correspondant au motif trouvé
        i += pattern.length;
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      result += formatStr[i]; // Ajoute le caractère tel quel si aucun motif n'est trouvé
      i++;
    }
  }

  return result; // Retourne la chaîne formatée
}

/**
 * Traite les jetons de format dans une sous-chaîne donnée.
 * 
 * @param {string} str - La sous-chaîne à traiter.
 * @param {Array} patterns - Les motifs de format disponibles.
 * @param {Object} formatters - Les fonctions de formatage associées aux motifs.
 * @returns {string} - La sous-chaîne formatée.
 */
function processFormatTokens(str, patterns, formatters) {
  let result = '';
  let i = 0;

  // Parcourt la sous-chaîne pour appliquer les formateurs
  while (i < str.length) {
    let matchFound = false;
    for (const pattern of patterns) {
      if (str.substring(i, i + pattern.length) === pattern) {
        result += formatters[pattern](); // Applique le formateur correspondant au motif trouvé
        i += pattern.length;
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      result += str[i]; // Ajoute le caractère tel quel si aucun motif n'est trouvé
      i++;
    }
  }

  return result; // Retourne la sous-chaîne formatée
}

/**
 * Convertit une heure au format 24 heures en format 12 heures.
 * 
 * @param {number} hour24 - L'heure au format 24 heures.
 * @returns {number} - L'heure au format 12 heures.
 */
function getHour12(hour24) {
  return hour24 % 12 || 12; // Retourne 12 au lieu de 0 pour les heures de midi et minuit
}

/**
 * Retourne le nom complet du mois pour un index de mois donné.
 * 
 * @param {number} monthIndex - L'index du mois (0 pour janvier, 11 pour décembre).
 * @returns {string} - Le nom complet du mois.
 */
function getMonthName(monthIndex) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[monthIndex];
}

/**
 * Retourne l'abréviation du mois pour un index de mois donné.
 * 
 * @param {number} monthIndex - L'index du mois (0 pour janvier, 11 pour décembre).
 * @returns {string} - L'abréviation du mois.
 */
function getMonthAbbreviation(monthIndex) {
  const abbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return abbr[monthIndex];
}

/**
 * Retourne le nom complet du jour de la semaine pour un index de jour donné.
 * 
 * @param {number} dayIndex - L'index du jour de la semaine (0 pour dimanche, 6 pour samedi).
 * @returns {string} - Le nom complet du jour de la semaine.
 */
function getDayName(dayIndex) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayIndex];
}

/**
 * Retourne l'abréviation du jour de la semaine pour un index de jour donné.
 * 
 * @param {number} dayIndex - L'index du jour de la semaine (0 pour dimanche, 6 pour samedi).
 * @returns {string} - L'abréviation du jour de la semaine.
 */
function getDayAbbreviation(dayIndex) {
  const abbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return abbr[dayIndex];
}