import { useCallback, useEffect, useState } from 'react'
import { VALID_GUESSES } from '../data/words.js'
import { checkGuess } from '../utils/checkGuess.js'
import { mergeKeyboardStatus } from '../utils/keyboardStatus.js'

const MAX_TURNS = 6

export function useWordle(answer) {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState(() => Array(MAX_TURNS).fill(null))
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({})
  const [message, setMessage] = useState('')
  const isGameOver = isCorrect || turn === MAX_TURNS

  useEffect(() => {
    if (!message) return undefined

    const timeout = window.setTimeout(() => setMessage(''), 1400)
    return () => window.clearTimeout(timeout)
  }, [message])

  const handleKey = useCallback((key) => {
    if (isGameOver) return

    if (key === 'Enter') {
      if (currentGuess.length !== 5) {
        setMessage('Not enough letters')
        return
      }

      if (!VALID_GUESSES.has(currentGuess)) {
        setMessage('Not in the word list')
        return
      }

      const result = checkGuess(currentGuess, answer)
      setGuesses((previous) => previous.map((guess, index) => (
        index === turn ? result : guess
      )))
      setUsedKeys((previous) => mergeKeyboardStatus(previous, result))
      setIsCorrect(currentGuess === answer)
      setCurrentGuess('')
      setTurn((previous) => previous + 1)
      setMessage('')
      return
    }

    if (key === 'Backspace') {
      setCurrentGuess((previous) => previous.slice(0, -1))
      return
    }

    if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((previous) => (previous + key.toLowerCase()).slice(0, 5))
    }
  }, [answer, currentGuess, isGameOver, turn])

  const resetGame = useCallback(() => {
    setTurn(0)
    setCurrentGuess('')
    setGuesses(Array(MAX_TURNS).fill(null))
    setIsCorrect(false)
    setUsedKeys({})
    setMessage('')
  }, [])

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    message,
    handleKey,
    resetGame,
  }
}
