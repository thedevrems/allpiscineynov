// Expression régulière qui recherche l'occurrence de 'hi' n'importe où dans la chaîne
const normal = /hi/;

// Expression régulière qui recherche 'hi' uniquement s'il est placé au début de la chaîne
// Le symbole ^ (accent circonflexe) indique le début de la chaîne
const begin = /^hi/;

// Expression régulière qui recherche 'hi' uniquement s'il est placé à la fin de la chaîne
// Le symbole $ (dollar) indique la fin de la chaîne
const end = /hi$/;

// Expression régulière qui valide uniquement la chaîne exacte 'hi'
// La combinaison de ^ (début) et $ (fin) signifie que la chaîne ne doit contenir que 'hi'
const beginEnd = /^hi$/;
