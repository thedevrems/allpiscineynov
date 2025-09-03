package piscine

func ToLower(s string) string {
	var result string
	for i := 0; i < len(s); i++ {
		if s[i] <= 'Z' && s[i] >= 'A' {
			result += string(s[i] + 32)
		} else {
			result += string(s[i])
		}
	}
	return result
}
