/**
 * Trouve une séquence d'opérations pour atteindre un nombre donné à partir de 1,
 * en utilisant uniquement *2 et +4.
 * 
 * @param {number} num - Le nombre cible à atteindre.
 * @param {number} [current=1] - La valeur actuelle de la séquence (défaut : 1).
 * @param {string} [expression='1'] - L'expression formée jusqu'à présent.
 * @returns {string|undefined} - Une chaîne représentant l'expression ou `undefined` si impossible.
 */
function findExpression(num, current = 1, expression = '1') {
  if (current === num) {
      return expression; // Si la valeur actuelle correspond au nombre cible, retourner l'expression.
  }

  if (current > num) {
      return undefined; // Si la valeur actuelle dépasse le nombre cible, il est impossible de continuer.
  }

  // Essaye d'abord la multiplication par 2.
  const mulResult = findExpression(num, current * 2, expression + ' *2');
  if (mulResult !== undefined) {
      return mulResult;
  }

  // Si la multiplication ne fonctionne pas, essaye l'addition de 4.
  const addResult = findExpression(num, current + 4, expression + ' +4');
  if (addResult !== undefined) {
      return addResult;
  }

  return undefined; // Si aucune opération n'aboutit au nombre cible, retourner `undefined`.
}
