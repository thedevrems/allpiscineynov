package piscine

func NRune(s string, n int) rune {
	str := []rune(s)
	l := len(s)
	if n > l || n <= 0 || l == 0 {
		return 0
	} else {
		pos := n - 1
		return str[pos]
	}
}
