package piscine

func Atoi(s string) int {
	var i int
	var positif bool = true
	var countsignefirst int = 0

	for positioncaractere, c := range s {
		positioncaractere++
		if (!(c >= '0' && c <= '9')) && !(c == '+' || c == '-') || countsignefirst == 2 || (positioncaractere > 3 && (c == '+' || c == '-')) {
			return 0
		}
		if c == '+' || c == '-' {
			countsignefirst++
			if countsignefirst > 1 {
				return 0
			}
			if c == '-' {
				positif = false
			}
			continue
		}
		i = i*10 + int(c-'0')
	}

	if positif {
		return i
	} else {
		return -i
	}
}
