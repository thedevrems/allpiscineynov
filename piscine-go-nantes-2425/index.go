package piscine

func Index(s string, toFind string) int {
	lenS := len(s)
	lenToFind := len(toFind)
	if lenS == 0 || lenToFind == 0 || lenToFind > lenS {
		return 0
	}
	for i := 0; i <= lenS-lenToFind; i++ {
		if s[i:i+lenToFind] == toFind {
			return i
		}
	}
	return -1
}
