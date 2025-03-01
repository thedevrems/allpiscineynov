/**
 * Génère une chaîne représentant une pyramide constituée d'un caractère donné.
 * 
 * @param {string} char - Le caractère utilisé pour construire la pyramide.
 * @param {number} height - La hauteur de la pyramide (nombre de lignes).
 * @returns {string} - Une chaîne de caractères représentant la pyramide.
 */
function pyramid(char, height) {
    let result = ''; // Initialise une chaîne vide pour stocker la pyramide.
    const charLength = char.length; // Longueur du caractère (utile si plusieurs caractères sont utilisés).
    const maxWidth = (2 * height - 1) * charLength; // Largeur maximale de la base de la pyramide.

    // Boucle pour générer chaque ligne de la pyramide.
    for (let i = 1; i <= height; i++) {
        const chars = 2 * i - 1; // Nombre de caractères à afficher sur la ligne actuelle.
        const spaces = maxWidth - chars * charLength; // Nombre total d'espaces pour centrer la ligne.
        const leftSpaces = Math.floor(spaces / 2); // Espaces à gauche pour centrer le texte.

        // Construit la ligne avec les espaces à gauche suivis des caractères.
        result += ' '.repeat(leftSpaces) + char.repeat(chars);

        // Ajoute un saut de ligne sauf pour la dernière ligne.
        if (i < height) result += '\n';
    }

    return result; // Retourne la chaîne représentant la pyramide.
}
