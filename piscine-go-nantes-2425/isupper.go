package piscine

func IsUpper(s string) bool {
	str := []rune(s)
	lenStr := len(str)
	for i := 0; i < lenStr; i++ {
		if !(str[i] <= 'Z' && str[i] >= 'A') {
			return false
		}
	}
	return true
}
