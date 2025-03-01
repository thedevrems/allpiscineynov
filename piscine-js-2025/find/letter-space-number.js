/**
 * Extrait toutes les occurrences d'une lettre suivie d'un espace et d'un chiffre unique.
 *
 * @param {string} str - La chaîne de caractères à analyser.
 * @returns {Array} - Un tableau contenant les correspondances trouvées.
 */
function letterSpaceNumber(str) {
    // Expression régulière pour détecter une lettre suivie d'un espace puis d'un chiffre unique.
    // [a-zA-Z] : correspond à une lettre majuscule ou minuscule.
    // ' ' : représente un espace obligatoire entre la lettre et le chiffre.
    // \d : correspond à un chiffre unique (0-9).
    // (?!\d) : s'assure que ce chiffre n'est pas suivi d'un autre chiffre.
    // (?![a-zA-Z]) : s'assure que ce chiffre n'est pas suivi d'une autre lettre.
    const regex = /[a-zA-Z] \d(?!\d)(?![a-zA-Z])/g;

    // Recherche toutes les correspondances dans la chaîne fournie.
    // Renvoie un tableau contenant les résultats ou un tableau vide si aucune correspondance n'est trouvée.
    return str.match(regex) || [];
}
