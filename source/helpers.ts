interface MinusNumbersObject {
  number1: number
  number2: number
  result: number
}

type MinusNumbers = (
  number1: number,
  number2: number
) => MinusNumbersObject

export const minusNumbers: MinusNumbers = (number1, number2) => {
  const result = number1 - number2

  return {
    number1,
    number2,
    result
  }
}

export default {
  minusNumbers
}