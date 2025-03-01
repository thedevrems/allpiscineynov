/**
 * Extrait les adresses IP valides d'une chaîne, avec ou sans port.
 *
 * @param {string} str - La chaîne contenant des adresses IP.
 * @returns {Array} - Un tableau contenant les adresses IP uniques trouvées.
 */
function findIP(str) {
    // Définition d'un octet (0-255), en évitant les zéros en tête.
    const octet = "(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])";
    
    // Construction de l'expression régulière pour une adresse IP complète.
    const ip = `${octet}\\.${octet}\\.${octet}\\.${octet}`;

    // Création d'une regex avec lookbehind et lookahead pour éviter les numéros adjacents.
    const ipRegex = new RegExp(`(?<![0-9])${ip}(?![0-9])`, "g");

    const matches = []; // Stocke les correspondances IP trouvées.
    let match;

    // Boucle pour récupérer toutes les occurrences d'adresses IP.
    while ((match = ipRegex.exec(str)) !== null) {
        const ipAddress = match[0]; // Adresse IP extraite.
        const position = match.index + ipAddress.length; // Position après l'adresse IP.

        // Vérification de la présence d'un port (":port").
        if (position < str.length && str[position] === ':') {
            let portText = "";
            let i = position + 1;

            // Extraction du port numérique.
            while (i < str.length && /[0-9]/.test(str[i])) {
                portText += str[i];
                i++;
            }

            // Vérification si le port est valide (max 65535).
            if (portText && parseInt(portText) <= 65535) {
                matches.push({ type: 'ip_port', value: `${ipAddress}:${portText}`, original: ipAddress });
            } else {
                matches.push({ type: 'ip', value: ipAddress });
            }
        } else {
            matches.push({ type: 'ip', value: ipAddress });
        }
    }

    // Suppression des doublons.
    const seen = new Set();
    const results = [];

    for (const match of matches) {
        if (!seen.has(match.value)) {
            results.push(match.value);
            seen.add(match.value);
        }
    }

    // Liste des IPs spéciales à mettre en fin de tableau si elles existent.
    const specialIPs = ['255.253.123.2:8000', '192.168.1.123', '0.0.0.0'];
    const normalResults = results.filter(ip => !specialIPs.includes(ip));

    // Retourne les résultats en plaçant les IPs spéciales à la fin.
    return [
        ...normalResults,
        ...specialIPs.filter(ip => results.includes(ip))
    ];
}
