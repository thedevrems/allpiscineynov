package main

import (
	"os"

	"github.com/01-edu/z01"
)

func Contains(str string, ch rune) bool {
	for _, c := range str {
		if c == ch {
			return true
		}
	}
	return false
}

func main() {
	if len(os.Args) < 2 {
		z01.PrintRune('\n')
		return
	}
	args := os.Args[1:]
	var args_s []rune
	for i, arg := range args {
		for _, c := range arg {
			args_s = append(args_s, c)
		}
		if i < len(args)-1 {
			args_s = append(args_s, ' ')
		}
	}
	var vowelIndices []int
	vowels := "aeiouAEIOU"
	for i, c := range args_s {
		if Contains(vowels, c) {
			vowelIndices = append(vowelIndices, i)
		}
	}
	if len(vowelIndices) == 0 {
		for _, c := range args_s {
			z01.PrintRune(c)
		}
		z01.PrintRune('\n')
		return
	}
	for i := 0; i < len(vowelIndices)/2; i++ {
		args_s[vowelIndices[i]], args_s[vowelIndices[len(vowelIndices)-1-i]] = args_s[vowelIndices[len(vowelIndices)-1-i]], args_s[vowelIndices[i]]
	}
	for _, c := range args_s {
		z01.PrintRune(c)
	}
	z01.PrintRune('\n')
}
