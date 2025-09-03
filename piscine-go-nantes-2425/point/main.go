package main

import "github.com/01-edu/z01"

type point struct {
	x int
	y int
}

func itoa(n int) string {
	if n == 0 {
		return "0"
	}
	result := ""
	isNegative := false
	if n < 0 {
		isNegative = true
		n = -n
	}
	for n > 0 {
		result = string(rune(n%10+'0')) + result
		n /= 10
	}
	if isNegative {
		result = "-" + result
	}
	return result
}

func setPoint(ptr *point) {
	ptr.x = 42
	ptr.y = 21
}

func main() {
	points := &point{}
	setPoint(points)
	output := "x = " + itoa(points.x) + ", y = " + itoa(points.y) + "\n"
	for _, char := range output {
		z01.PrintRune(char)
	}
}
