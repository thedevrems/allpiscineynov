package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) != 1 && len(os.Args) <= 2 {

		file, err := os.Open(os.Args[1])
		if err != nil {
			fmt.Printf("Error: %s\n", err)
			os.Exit(1)
		}
		defer file.Close()
		arr := make([]byte, 100)
		for {
			n, err := file.Read(arr)
			if err != nil {
				break
			}
			os.Stdout.Write(arr[:n])
		}
	} else if len(os.Args) == 1 {
		fmt.Printf("File name missing\n")
	} else {
		fmt.Printf("Too many arguments\n")
	}
}
