// Déclaration de différentes variables et objets en JavaScript

// Déclare une chaîne de caractères contenant des caractères d'échappement
const escapeStr = "`\\\"\'/";

// Déclare un tableau contenant un nombre et une chaîne de caractères
const arr = [4, '2'];

// Déclare un objet 'nested' qui est gelé pour empêcher toute modification
const nested = Object.freeze({
    // Propriété 'arr' qui est un tableau gelé
    arr: Object.freeze([4, undefined, '2']),
    // Propriété 'obj' qui est un objet gelé
    obj: Object.freeze({
        str: "nested string value", // Chaîne de caractères
        num: 24,                    // Nombre
        bool: false                 // Booléen
    })
});

// Déclare un objet 'obj' avec plusieurs propriétés
const obj = {
    str: "string value", // Chaîne de caractères
    num: 42,             // Nombre
    bool: true,          // Booléen
    undef: undefined,    // Indéfini
    nested: nested       // Objet 'nested' précédemment défini
};