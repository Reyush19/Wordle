import Row from './Row.jsx'

function Board({ guesses, currentGuess, turn }) {
  return (
    <div className="board" role="grid" aria-label="Six rows of five letter tiles">
      {guesses.map((guess, index) => (
        <Row
          key={index}
          guess={guess}
          currentGuess={currentGuess}
          isCurrent={index === turn}
        />
      ))}
    </div>
  )
}

export default Board
