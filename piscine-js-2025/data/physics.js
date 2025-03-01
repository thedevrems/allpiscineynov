/**
 * Calcule l'accélération d'un objet en fonction des propriétés disponibles.
 * L'accélération est déterminée selon la deuxième loi du mouvement de Newton
 * ou d'autres formules physiques pertinentes.
 * 
 * @param {Object} obj - L'objet contenant les propriétés physiques.
 * @param {number} [obj.f] - La force appliquée (F).
 * @param {number} [obj.m] - La masse de l'objet (m).
 * @param {number} [obj.Δv] - La variation de vitesse (Δv).
 * @param {number} [obj.Δt] - La variation du temps (Δt).
 * @param {number} [obj.d] - La distance parcourue (d).
 * @param {number} [obj.t] - Le temps total (t).
 * 
 * @returns {number|string} - L'accélération calculée ou "impossible" si elle ne peut être déterminée.
 */
function getAcceleration(obj) {
    // Vérifie si la force et la masse sont disponibles pour appliquer la formule a = F / m
    if (obj.f && obj.m) {
        return obj.f / obj.m;
    }
    // Vérifie si la variation de vitesse et de temps sont disponibles pour appliquer la formule a = Δv / Δt
    if (obj.Δv && obj.Δt) {
        return obj.Δv / obj.Δt;
    }
    // Vérifie si la distance et le temps sont disponibles pour appliquer la formule a = 2d / t^2
    if (obj.d && obj.t) {
        return 2 * obj.d / obj.t ** 2;
    }
    // Si aucune condition n'est remplie, retourne "impossible"
    return 'impossible';
}