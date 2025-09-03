package piscine

import "github.com/01-edu/z01"

func PrintCombN(n int) {
	if n <= 0 || n >= 10 {
		return
	}
	printCombNHelper(n, 0, []rune{}, '0')
	z01.PrintRune('\n')
}

func printCombNHelper(n, depth int, current []rune, start rune) {
	if depth == n {
		for _, r := range current {
			z01.PrintRune(r)
		}
		if current[0] != '9'-rune(n-1) {
			z01.PrintRune(',')
			z01.PrintRune(' ')
		}
		return
	}

	for i := start; i <= '9'; i++ {
		printCombNHelper(n, depth+1, append(current, i), i+1)
	}
}
