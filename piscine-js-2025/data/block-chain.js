/**
 * Crée un bloc dans une blockchain simple en utilisant un système de hachage.
 * Chaque bloc contient un index, des données, un lien vers le bloc précédent et un hash unique.
 * 
 * @param {Object} data - Les données à stocker dans le bloc.
 * @param {Object} [prev={ index: 0, hash: '0' }] - Le bloc précédent (par défaut, le bloc génésis).
 * @param {number} prev.index - L'index du bloc précédent.
 * @param {string} prev.hash - Le hash du bloc précédent.
 * 
 * @returns {Object} - Le bloc nouvellement créé avec ses propriétés et une fonction pour enchaîner un nouveau bloc.
 */
function blockChain(data, prev = { index: 0, hash: '0' }) {
  const block = {
      index: prev.index + 1, // Incrémente l'index du bloc par rapport au bloc précédent.
      data: data, // Stocke les données fournies.
      prev: prev // Lien vers le bloc précédent.
  };
  
  // Génère un hash unique basé sur l'index, le hash du bloc précédent et les données.
  block.hash = hashCode(`${block.index}${prev.hash}${JSON.stringify(data)}`);
  
  /**
   * Fonction permettant d'ajouter un nouveau bloc à la chaîne.
   * 
   * @param {Object} newData - Les données du nouveau bloc.
   * @returns {Object} - Le nouveau bloc ajouté à la chaîne.
   */
  block.chain = (newData) => blockChain(newData, block);
  
  return block;
}