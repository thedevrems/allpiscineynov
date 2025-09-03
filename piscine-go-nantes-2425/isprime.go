package piscine

// IsPrime vérifie si un nombre donné (nb) est un nombre premier.
// Un nombre premier est un nombre qui n'a que deux diviseurs : 1 et lui-même.
func IsPrime(nb int) bool {
	// Les nombres inférieurs à 2 ne sont pas premiers (0 et 1 inclus).
	if nb < 2 {
		return false
	} else if nb == 2 || nb == 3 {
		// Les nombres 2 et 3 sont des nombres premiers.
		// Ce sont des cas spéciaux à traiter directement.
		return true
	} else if nb%2 == 0 {
		// Si le nombre est pair (et supérieur à 2), il n'est pas premier.
		// Un nombre pair est divisible par 2.
		return false
	}
	// Boucle pour tester les diviseurs impairs à partir de 3.
	// On ne teste que les diviseurs jusqu'à la racine carrée de nb.
	// Si on trouve un diviseur (nb % i == 0), alors nb n'est pas premier.
	for i := 3; i*i <= nb; i += 2 {
		if nb%i == 0 {
			return false
		}
	}

	// Si aucun diviseur n'a été trouvé, le nombre est premier.
	return true
}
