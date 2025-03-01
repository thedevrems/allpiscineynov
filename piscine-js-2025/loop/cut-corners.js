/**
 * Tronque un nombre en supprimant sa partie décimale.
 * 
 * @param {number} number - Le nombre à tronquer.
 * @returns {number} - La partie entière du nombre.
 */
function trunc(number) {
    if (number === 0) return 0; // Si le nombre est 0, on retourne directement 0.
    
    let negative = number < 0; // Vérifie si le nombre est négatif.
    let n = negative ? -number : number; // Prend la valeur absolue du nombre.
    let result = 0; // Stocke le résultat final (partie entière du nombre).
    let step = 1000000; // Définit un pas initial élevé pour optimiser la boucle.

    // Réduction progressive de `step` jusqu'à atteindre 1, pour accumuler la partie entière de `n`.
    while (step >= 1) {
        while (result + step <= n) { // Ajoute `step` tant que le résultat ne dépasse pas `n`.
            result += step;
        }
        step = step / 10; // Réduit `step` par facteur de 10.
    }

    return negative ? -result : result; // Restaure le signe négatif si nécessaire.
}

/**
 * Arrondit un nombre à l'entier inférieur.
 * 
 * @param {number} number - Le nombre à arrondir.
 * @returns {number} - L'entier inférieur le plus proche.
 */
function floor(number) {
    if (number >= 0) {
        return trunc(number); // Pour un nombre positif, floor() est équivalent à trunc().
    } else {
        const integer = trunc(number); // On récupère la partie entière.
        return number < integer ? integer - 1 : integer; // Si le nombre initial était strictement plus petit, on décrémente de 1.
    }
}

/**
 * Arrondit un nombre à l'entier supérieur.
 * 
 * @param {number} number - Le nombre à arrondir.
 * @returns {number} - L'entier supérieur le plus proche.
 */
function ceil(number) {
    if (number > 0) {
        const integer = trunc(number); // On récupère la partie entière.
        return number > integer ? integer + 1 : integer; // Si le nombre initial était strictement plus grand, on incrémente de 1.
    } else {
        return trunc(number); // Pour un nombre négatif, ceil() est équivalent à trunc().
    }
}

/**
 * Arrondit un nombre à l'entier le plus proche.
 * 
 * @param {number} number - Le nombre à arrondir.
 * @returns {number} - L'entier le plus proche.
 */
function round(number) {
    const decimal = number - trunc(number); // On extrait la partie décimale.

    if (number >= 0) {
        return decimal >= 0.5 ? trunc(number) + 1 : trunc(number); // Si la partie décimale est >= 0.5, on arrondit vers le haut.
    } else {
        return decimal <= -0.5 ? trunc(number) - 1 : trunc(number); // Si la partie décimale est <= -0.5, on arrondit vers le bas.
    }
}
