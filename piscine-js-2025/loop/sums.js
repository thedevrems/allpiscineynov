/**
 * Génère toutes les partitions d'un nombre donné où la somme des éléments est égale à ce nombre.
 * Les partitions sont uniques (pas de permutations en double) et triées.
 * 
 * @param {number} n - Le nombre à partitionner.
 * @returns {Array<Array<number>>} - Une liste de partitions valides triées.
 */
function sums(n) {
    const result = []; // Tableau pour stocker les partitions.

    /**
     * Fonction auxiliaire récursive pour générer les partitions.
     * 
     * @param {number} remaining - La valeur restante à atteindre.
     * @param {Array<number>} current - La partition en cours de construction.
     * @param {number} start - La valeur minimale à ajouter (évite les permutations en double).
     */
    function helper(remaining, current, start) {
        if (remaining === 0) {
            if (current.length >= 2) {
                result.push([...current]); // Ajoute la partition trouvée si elle contient au moins 2 éléments.
            }
            return;
        }
        
        // Boucle à partir de `start` pour éviter les permutations en double.
        for (let i = start; i <= remaining; i++) {
            current.push(i); // Ajoute `i` à la partition courante.
            helper(remaining - i, current, i); // Réduit le problème récursivement.
            current.pop(); // Retire le dernier élément pour tester d'autres combinaisons.
        }
    }

    helper(n, [], 1); // Démarre la récursion avec `n` comme valeur cible.
    return result; // Retourne toutes les partitions trouvées.
}
