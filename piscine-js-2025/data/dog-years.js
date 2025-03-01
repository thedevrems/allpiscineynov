/*
 * Définition de la constante EARTH, qui représente le nombre de secondes
 * dans une année terrestre (365,25 jours).
 */
const EARTH = 31557600;

/*
 * Objet ORBITAL_PERIODS contenant les périodes orbitales des planètes
 * en années terrestres. Ces valeurs sont utilisées pour convertir un âge
 * terrestre en âge sur une autre planète.
 */
const ORBITAL_PERIODS = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

/**
 * Fonction permettant de calculer l'âge d'un chien sur une planète donnée.
 *
 * @param {string} planet - Le nom de la planète sur laquelle on veut connaître l'âge.
 * @param {number} ageInSeconds - L'âge du chien en secondes.
 * @returns {number} - L'âge du chien en années canines sur la planète spécifiée,
 *                     arrondi à deux décimales.
 */
function dogYears(planet, ageInSeconds) {
    // Conversion de l'âge du chien en années terrestres
    const earthYears = ageInSeconds / EARTH;
    
    // Récupération de la période orbitale de la planète donnée
    const orbitalPeriod = ORBITAL_PERIODS[planet];
    
    // Conversion en années canines (1 année terrestre équivaut à 7 années canines)
    const dogYears = (earthYears / orbitalPeriod) * 7;
    
    // Arrondi du résultat à deux décimales avant de le retourner
    return parseFloat(dogYears.toFixed(2));
}