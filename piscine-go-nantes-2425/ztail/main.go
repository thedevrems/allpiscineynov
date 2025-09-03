package main

import (
	"fmt"
	"os"
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
	c := args[1]
	args = args[2:]
	didWoopsie := false
	for i := 0; i < len(args); i++ {
		f, err := os.Open(args[i])
		if err != nil {
			fmt.Printf(err.Error() + "\n")
			didWoopsie = true
		} else {
			defer f.Close()
			b, err := os.ReadFile(args[i])
			if err != nil {
				fmt.Printf(err.Error() + "\n")
				didWoopsie = true
				continue
			}
			if Atoi(c) < len(b) {
				b = b[len(b)-Atoi(c):]
			}
			if i != 0 {
				fmt.Printf("\n")
			}
			fmt.Printf("==> " + args[i] + " <==\n")
			fmt.Printf(string(b))
		}
	}
	if didWoopsie {
		os.Exit(1)
	} else {
		os.Exit(0)
	}
}
