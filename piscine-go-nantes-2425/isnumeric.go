package piscine

func IsNumeric(s string) bool {
	str := []rune(s)
	lenStr := len(s)
	for i := 0; i < lenStr; i++ {
		if !(str[i] <= '9' && str[i] >= '0') {
			return false
		}
	}
	return true
}
