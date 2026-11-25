import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board.jsx'
import Keyboard from './components/Keyboard.jsx'
import Modal from './components/Modal.jsx'
import { getRandomWord } from './data/words.js'
import { useWordle } from './hooks/useWordle.js'

function App() {
  const [answer, setAnswer] = useState(getRandomWord)
  const { turn, currentGuess, guesses, isCorrect, usedKeys, message, handleKey, resetGame } =
    useWordle(answer)
  const isGameOver = isCorrect || turn === 6

  const onKeyDown = useCallback((event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return
    handleKey(event.key)
  }, [handleKey])

  useEffect(() => {
    if (isGameOver) return undefined

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isGameOver, onKeyDown])

  function startNewGame() {
    setAnswer(getRandomWord())
    resetGame()
  }

  return (
    <main className="game-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <span>W</span>
          </div>
          <div>
            <p className="eyebrow">THE DAILY WORD GAME</p>
            <h1>Wordle</h1>
          </div>
        </div>
        <button className="new-game-button" onClick={startNewGame} type="button">
          <span aria-hidden="true">↻</span>
          <span>New game</span>
        </button>
      </header>

      <section className="game-content" aria-label="Wordle game">
        <div className="game-intro">
          <div>
            <p className="round-label">A LITTLE WORD CHALLENGE</p>
            <h2>Find the hidden word.</h2>
            <p className="instructions">Six tries. Five letters. A fresh puzzle whenever you are.</p>
          </div>
          <div className="attempt-counter" aria-label={`${Math.min(turn + 1, 6)} of 6 guesses`}>
            <span className="attempt-number">{String(Math.min(turn + 1, 6)).padStart(2, '0')}</span>
            <span className="attempt-divider">/</span>
            <span className="attempt-total">06</span>
            <span className="attempt-caption">TRIES</span>
          </div>
        </div>

        <div className="board-wrap">
          <Board guesses={guesses} currentGuess={currentGuess} turn={turn} />
          <div className={`game-message${message ? ' is-visible' : ''}`} role="status" aria-live="polite">
            {message || '\u00a0'}
          </div>
        </div>

        <Keyboard usedKeys={usedKeys} onKeyPress={handleKey} disabled={isGameOver} />

        <footer className="game-footer">
          <span><span className="footer-dot" /> A fresh word every round</span>
          <span>Made for curious minds</span>
        </footer>
      </section>

      {isGameOver && (
        <Modal answer={answer} didWin={isCorrect} onPlayAgain={startNewGame} />
      )}
    </main>
  )
}

export default App
