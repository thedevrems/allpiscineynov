package piscine

func BasicJoin(elems []string) string {
	var result string
	for i := 0; i < len(elems); i++ {
		result += elems[i]
	}
	return result
}
