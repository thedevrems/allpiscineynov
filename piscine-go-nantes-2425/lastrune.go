package piscine

func LastRune(s string) rune {
	str := []rune(s)
	l := len(s)
	return str[l-1]
}
