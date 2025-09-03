package piscine

func IterativeFactorial(nb int) int {
	var result int = 1
	if nb > 21 || nb < -21 {
		return 0
	}
	for i := 1; i <= nb; i++ {
		result = result * i
	}
	for i := -1; i >= nb; i-- {
		result = result * i
	}
	return result
}
