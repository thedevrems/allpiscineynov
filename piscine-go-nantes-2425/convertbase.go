package piscine

func ConvertBase(nbr, baseFrom, baseTo string) string {
	// Step 1: Convert nbr from baseFrom to decimal (base 10)
	decimalValue := 0
	baseFromLen := len(baseFrom)
	for i := 0; i < len(nbr); i++ {
		char := nbr[i]
		// Find the index of the character in baseFrom
		for j := 0; j < baseFromLen; j++ {
			if baseFrom[j] == char {
				decimalValue = decimalValue*baseFromLen + j
				break
			}
		}
	}

	// Step 2: Convert decimal to baseTo
	if decimalValue == 0 {
		return string(baseTo[0])
	}

	baseToLen := len(baseTo)
	result := ""
	for decimalValue > 0 {
		remainder := decimalValue % baseToLen
		result = string(baseTo[remainder]) + result
		decimalValue /= baseToLen
	}

	return result
}
