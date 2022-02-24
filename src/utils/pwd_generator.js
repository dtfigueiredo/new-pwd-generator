export default function pwdGenerator(pwdSize, hasSymbols, hasNumbers) {
  const symbols = ['!', '?', '@', '#', '$', '%', '&', '*', '+', '-', '=', '_', ':', ';', '.']
  const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const randomSymbolsCharacter = () => symbols[Math.floor(Math.random() * symbols.length)]
  const randomUpperLettersCharacter = () => lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  const randomLowerLettersCharacter = () => upperLetters[Math.floor(Math.random() * upperLetters.length)]
  const randomNumbersCharacter = () => numbers[Math.floor(Math.random() * numbers.length)]

  const randomCharacter = [
    randomUpperLettersCharacter,
    randomLowerLettersCharacter,
  ]

  if (hasSymbols) {
    randomCharacter.push(randomSymbolsCharacter)
  }

  if (hasNumbers) {
    randomCharacter.push(randomNumbersCharacter)
  }

  //* essa função sorteia qual função irá preencher determinado caractere da senha
  const randomCharacterPickFunction = () => randomCharacter[Math.floor(Math.random() * randomCharacter.length)]
  //* esse callback recebe o resultado do sorteio de qual função vai gerar determinado caractere da senha e o executa
  const randomCharacterPickCallback = (fn) => fn()

  const newPwd = new Array(pwdSize) //* criando um array com o tamanho da senha
    .fill()
    .map(randomCharacterPickFunction)
    .map(randomCharacterPickCallback)
    .join('')

  return newPwd
}
