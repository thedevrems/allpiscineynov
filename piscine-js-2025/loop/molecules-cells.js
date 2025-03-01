/**
 * Convertit une séquence d'ADN en sa séquence complémentaire d'ARN.
 * 
 * Règles de conversion :
 * - 'G' devient 'C'
 * - 'C' devient 'G'
 * - 'T' devient 'A'
 * - 'A' devient 'U'
 * 
 * @param {string} dna - La chaîne ADN à convertir.
 * @returns {string} - La chaîne ARN complémentaire.
 */
function RNA(dna) {
  return dna.split('') // Sépare la chaîne ADN en un tableau de nucléotides.
      .map(nucleotide => { // Applique une transformation à chaque nucléotide.
          switch(nucleotide) {
              case 'G': return 'C';
              case 'C': return 'G';
              case 'T': return 'A';
              case 'A': return 'U';
              default: return nucleotide; // Si un caractère inconnu est rencontré, il est conservé tel quel.
          }
      })
      .join(''); // Rejoint le tableau transformé en une chaîne de caractères.
}

/**
* Convertit une séquence d'ARN en sa séquence complémentaire d'ADN.
* 
* Règles de conversion :
* - 'C' devient 'G'
* - 'G' devient 'C'
* - 'A' devient 'T'
* - 'U' devient 'A'
* 
* @param {string} rna - La chaîne ARN à convertir.
* @returns {string} - La chaîne ADN complémentaire.
*/
function DNA(rna) {
  return rna.split('') // Sépare la chaîne ARN en un tableau de nucléotides.
      .map(nucleotide => { // Applique une transformation à chaque nucléotide.
          switch(nucleotide) {
              case 'C': return 'G';
              case 'G': return 'C';
              case 'A': return 'T';
              case 'U': return 'A';
              default: return nucleotide; // Si un caractère inconnu est rencontré, il est conservé tel quel.
          }
      })
      .join(''); // Rejoint le tableau transformé en une chaîne de caractères.
}
