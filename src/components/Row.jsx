import Tile from './Tile.jsx'

function Row({ guess, currentGuess, isCurrent }) {
  const letters = guess
    ? guess.map(({ letter }) => letter)
    : isCurrent
      ? Array.from(currentGuess.padEnd(5, ' '))
      : []

  return (
    <div className="board-row" role="row">
      {Array.from({ length: 5 }, (_, index) => {
        const tile = guess?.[index]
        const letter = tile?.letter || letters[index]?.trim() || ''
        return (
          <Tile
            key={index}
            letter={letter}
            status={tile?.status}
            isCurrent={isCurrent && Boolean(letter)}
            revealIndex={index}
          />
        )
      })}
    </div>
  )
}

export default Row
