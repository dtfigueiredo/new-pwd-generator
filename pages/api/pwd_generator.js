const symbols = ['!', '?', '@', '#', '$', '%', '&', '*', '+', '-', '=', '_', ':', ';', '.']
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const symbolsChar = () => symbols[Math.floor(Math.random() * symbols.length)]
const upperLettersChar = () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
const lowerLettersChar = () => upperLetters[Math.floor(Math.random() * upperLetters.length)]
const numbersChar = () => numbers[Math.floor(Math.random() * numbers.length)]

