// Définition de fonctions pour manipuler les éléments d'un tableau ou d'une chaîne de caractères

// Fonction qui retourne le premier élément de l'entrée
function first(input) {
    return input[0];
}

// Fonction qui retourne le dernier élément de l'entrée
function last(input) {
    return input[input.length - 1];
}

// Fonction qui retourne un tableau contenant le dernier et le premier élément de l'entrée
function kiss(input) {
    return [last(input), first(input)];
}