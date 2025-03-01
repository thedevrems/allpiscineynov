/**
 * Extrait tous les mots contenant 'ion' précédé d'un 't' et retourne ces mots sans 'ion'.
 *
 * @param {string} str - La chaîne de caractères à analyser.
 * @returns {Array} - Un tableau contenant les mots correspondants sans 'ion'.
 */
function ionOut(str) {
    // Expression régulière pour capturer les mots contenant 'ion' précédé d'un 't'.
    // \b : assure que nous capturons des mots complets (bordure de mot).
    // (\w+t) : capture un groupe de caractères alphanumériques qui se termine par 't'.
    // ion\b : assure que 'ion' apparaît à la fin du mot.
    const regex = /\b(\w+t)ion\b/g;
    
    // Recherche toutes les occurrences correspondant à l'expression régulière.
    // `match()` retourne un tableau avec les mots entiers correspondants.
    // `map()` supprime la partie 'ion' en remplaçant directement dans chaque mot trouvé.
    return str.match(regex)?.map(word => word.replace('ion', '')) || [];
}