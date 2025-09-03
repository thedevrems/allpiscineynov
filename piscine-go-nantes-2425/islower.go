package piscine

func IsLower(s string) bool {
	str := []rune(s)
	lenStr := len(str)
	for i := 0; i < lenStr; i++ {
		if !(str[i] <= 'z' && str[i] >= 'a') {
			return false
		}
	}
	return true
}
