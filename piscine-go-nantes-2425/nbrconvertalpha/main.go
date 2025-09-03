package main

import (
	"os"

	"github.com/01-edu/z01"
)

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

func main() {
	args := os.Args[1:]
	caps := false
	if len(args) == 0 {
		return
	}
	if args[0] == "--upper" {
		caps = true
	}
	for i, arg := range args {
		if i == 0 && caps {
			continue
		}
		char_int := Atoi(arg)
		if char_int == 0 || char_int > 26 {
			z01.PrintRune(' ')
		} else {
			if caps {
				z01.PrintRune(rune(char_int + 'A' - 1))
			} else {
				z01.PrintRune(rune(char_int + 'a' - 1))
			}
		}
	}
	z01.PrintRune('\n')
}
