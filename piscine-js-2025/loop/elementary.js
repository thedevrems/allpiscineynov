/**
 * Multiplie deux nombres sans utiliser l'opérateur `*`.
 * @param {number} a - Le premier nombre.
 * @param {number} b - Le deuxième nombre.
 * @returns {number} - Le produit de `a` et `b`.
 */
function multiply(a, b) {
    let result = 0;
    const positiveB = Math.abs(b);
    
    // Ajoute `a` à `result` un total de `b` fois
    for (let i = 0; i < positiveB; i++) {
        result += a;
    }
    
    // Si `b` est négatif, on inverse le signe du résultat
    return b < 0 ? -result : result;
}

/**
 * Effectue une division entière sans utiliser l'opérateur `/`.
 * @param {number} a - Le dividende.
 * @param {number} b - Le diviseur (ne peut pas être 0).
 * @returns {number} - Le quotient entier de `a / b`.
 * @throws {Error} - Si `b` est 0.
 */
function divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    
    let quotient = 0;
    const positiveA = Math.abs(a);
    const positiveB = Math.abs(b);
    let sum = positiveB;
    
    // Soustrait `b` à `a` jusqu'à ce que `a` soit inférieur à `b`
    while (sum <= positiveA) {
        sum += positiveB;
        quotient++;
    }
    
    // Applique le signe correct au quotient
    return (a < 0) !== (b < 0) ? -quotient : quotient;
}

/**
 * Calcule le reste d'une division entière sans utiliser l'opérateur `%`.
 * @param {number} a - Le dividende.
 * @param {number} b - Le diviseur (ne peut pas être 0).
 * @returns {number} - Le reste de la division `a % b`.
 * @throws {Error} - Si `b` est 0.
 */
function modulo(a, b) {
    if (b === 0) throw new Error("Division by zero");
    
    const positiveA = Math.abs(a);
    const positiveB = Math.abs(b);
    let remainder = positiveA;
    
    // Soustrait `b` à `a` jusqu'à obtenir le reste
    while (remainder >= positiveB) {
        remainder -= positiveB;
    }
    
    // Applique le signe correct au reste
    return a < 0 ? -remainder : remainder;
}