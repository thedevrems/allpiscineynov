package piscine

func AppendRange(min, max int) []int {
	if min >= max {
		return nil
	} else {
		var tab []int
		for i := min; i < max; i++ {
			tab = append(tab, i)
		}
		return tab
	}
}
