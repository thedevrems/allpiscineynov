package main

import (
	"io"
	"os"

	"github.com/01-edu/z01"
)

func main() {
	if len(os.Args) < 2 {
		io.Copy(os.Stdout, os.Stdin)
		return
	}
	for _, fileName := range os.Args[1:] {
		content, err := os.ReadFile(fileName)
		if err != nil {
			nameError := "ERROR: " + err.Error()
			for _, r := range nameError {
				z01.PrintRune(r)
			}
			z01.PrintRune('\n')
			os.Exit(1)
		}
		for _, r := range string(content) {
			z01.PrintRune(r)
		}
	}
}
