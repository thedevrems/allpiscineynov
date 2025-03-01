/**
 * Extrait toutes les URLs présentes dans une chaîne de caractères.
 *
 * @param {string} dataSet - La chaîne de caractères contenant des URLs.
 * @returns {Array} - Un tableau contenant toutes les URLs trouvées.
 */
function getURL(dataSet) {
    // Expression régulière pour capturer les URLs commençant par "http://" ou "https://".
    // https? : Correspond à "http" ou "https".
    // :\/\/ : Échappement des caractères spéciaux "://" pour détecter la structure d'une URL.
    // [^\s]+ : Capture tous les caractères suivants jusqu'à un espace (délimite l'URL).
    const regex = /https?:\/\/[^\s]+/g;

    // Utilisation de `match()` pour extraire toutes les correspondances sous forme de tableau.
    // Si aucune URL n'est trouvée, retourne un tableau vide.
    return dataSet.match(regex) || [];
}

/**
 * Extrait les URLs contenant au moins 3 paramètres de requête.
 *
 * @param {string} dataSet - La chaîne de caractères contenant des URLs.
 * @returns {Array} - Un tableau contenant les URLs avec au moins 3 paramètres de requête.
 */
function greedyQuery(dataSet) {
    // Filtrage des URLs pour ne conserver que celles ayant 3 paramètres ou plus.
    return getURL(dataSet).filter(url => {
        // Extraction de la partie après le "?" (les paramètres de requête).
        const queryParams = url.split('?')[1];

        // Vérification du nombre de paramètres (séparés par "&").
        return queryParams && queryParams.split('&').length >= 3;
    });
}

/**
 * Extrait les URLs contenant entre 2 et 3 paramètres de requête (inclus).
 *
 * @param {string} dataSet - La chaîne de caractères contenant des URLs.
 * @returns {Array} - Un tableau contenant les URLs ayant entre 2 et 3 paramètres de requête.
 */
function notSoGreedy(dataSet) {
    // Filtrage des URLs pour ne conserver que celles ayant entre 2 et 3 paramètres.
    return getURL(dataSet).filter(url => {
        // Extraction de la partie après le "?" (les paramètres de requête).
        const queryParams = url.split('?')[1];

        // Comptage du nombre de paramètres (séparés par "&").
        const count = queryParams ? queryParams.split('&').length : 0;

        // Vérification que le nombre de paramètres est entre 2 et 3.
        return count >= 2 && count <= 3;
    });
}