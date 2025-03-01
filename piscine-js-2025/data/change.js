// Définition de fonctions pour accéder et modifier les propriétés d'un objet 'sourceObject'

// Fonction qui retourne la valeur associée à une clé donnée dans 'sourceObject'
function get(key) {
  return sourceObject[key];
}

// Fonction qui assigne une valeur à une clé donnée dans 'sourceObject' et retourne cette valeur
function set(key, value) {
  sourceObject[key] = value;
  return value;
}