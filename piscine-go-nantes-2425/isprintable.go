package piscine

func IsPrintable(s string) bool {
	str := []rune(s)
	lenStr := len(s)
	for i := 0; i < lenStr; i++ {
		if !(str[i] >= 32 && str[i] <= 127) {
			// voit table ascii
			return false
		}
	}
	return true
}
