package piscine

func Capitalize(s string) string {
	s = ToLower(s)
	for i := 0; i < len(s); i++ {
		if i == 0 {
			s = ToUpper(string(s[i])) + s[i+1:]
		} else {
			if IsAlpha(string(s[i])) && !IsAlpha(string(s[i-1])) {
				if i != len(s)-1 {
					s = s[:i] + ToUpper(string(s[i])) + s[i+1:]
				} else {
					s = s[:i] + ToUpper(string(s[i]))
				}
			}
		}
	}
	return s
}
