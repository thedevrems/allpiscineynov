package piscine

func Join(strs []string, sep string) string {
	var result string = strs[0]
	for i := 1; i < len(strs); i++ {
		if !(i == len(strs)) {
			result = result + sep + strs[i]
		}
	}
	return result
}
