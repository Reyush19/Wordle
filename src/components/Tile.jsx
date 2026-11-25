function Tile({ letter = '', status = '', revealIndex = 0, isCurrent = false }) {
  const classNames = [
    'tile',
    status && `tile-${status}`,
    letter && !status && 'tile-filled',
    isCurrent && 'tile-current',
    status && 'tile-reveal',
  ].filter(Boolean).join(' ')

  return (
    <div className={classNames} style={{ '--reveal-index': revealIndex }}>
      {letter.toUpperCase()}
    </div>
  )
}

export default Tile
