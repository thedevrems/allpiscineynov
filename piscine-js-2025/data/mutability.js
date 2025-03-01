// Création de clones et manipulation d'un objet 'person'

// Crée un clone superficiel de l'objet 'person' en utilisant Object.assign
const clone1 = Object.assign({}, person);

// Crée un clone profond de l'objet 'person' en utilisant JSON.parse et JSON.stringify
const clone2 = JSON.parse(JSON.stringify(person));

// Référence directe à l'objet 'person'
const samePerson = person;

// Incrémente la propriété 'age' de l'objet 'person'
person.age++;

// Ajoute ou modifie la propriété 'country' de l'objet 'person' pour qu'elle soit 'FR'
person.country = 'FR';