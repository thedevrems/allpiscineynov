package piscine

func ToUpper(s string) string {
	var result string
	for i := 0; i < len(s); i++ {
		if s[i] <= 'z' && s[i] >= 'a' {
			result += string(s[i] - 32)
		} else {
			result += string(s[i])
		}
	}
	return result
}
