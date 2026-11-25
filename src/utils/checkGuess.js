export function checkGuess(guess, answer) {
  const result = Array.from(guess, (letter) => ({ letter, status: 'absent' }))
  const remainingLetters = new Map()

  for (const letter of answer) {
    remainingLetters.set(letter, (remainingLetters.get(letter) || 0) + 1)
  }

  for (let index = 0; index < guess.length; index += 1) {
    if (guess[index] === answer[index]) {
      result[index].status = 'correct'
      remainingLetters.set(guess[index], remainingLetters.get(guess[index]) - 1)
    }
  }

  for (let index = 0; index < guess.length; index += 1) {
    if (result[index].status === 'correct') continue

    const remaining = remainingLetters.get(guess[index]) || 0
    if (remaining > 0) {
      result[index].status = 'present'
      remainingLetters.set(guess[index], remaining - 1)
    }
  }

  return result
}
