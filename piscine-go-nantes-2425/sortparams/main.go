package main

import (
	"os"

	"github.com/01-edu/z01"
)

func SortIntegerTable(table []string) {
	for i := 1; i < len(table); i++ {
		key := table[i]
		j := i - 1
		for j >= 0 && table[j] > key {
			table[j+1] = table[j]
			j = j - 1
		}
		table[j+1] = key
	}
}

func main() {
	args := os.Args[1:]
	SortIntegerTable(args)
	for _, arg := range args {
		for _, b := range arg {
			z01.PrintRune(rune(b))
		}
		z01.PrintRune('\n')
	}
}
