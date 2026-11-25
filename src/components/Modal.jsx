function Modal({ answer, didWin, onPlayAgain }) {
  return (
    <div className="modal-backdrop">
      <section aria-labelledby="result-title" aria-modal="true" className="result-modal" role="dialog">
        <div className={`result-icon${didWin ? ' result-icon-win' : ''}`} aria-hidden="true">
          {didWin ? '✦' : '↗'}
        </div>
        <p className="round-label">{didWin ? 'BEAUTIFULLY DONE' : 'GOOD GAME'}</p>
        <h2 id="result-title">{didWin ? 'You found it!' : 'There’s always tomorrow.'}</h2>
        <p className="result-copy">
          {didWin ? 'Your word was' : 'The word we were looking for was'}
        </p>
        <div className="answer-reveal" aria-label={`The answer was ${answer}`}>
          {answer.split('').map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>
        <button className="play-again-button" onClick={onPlayAgain} type="button">
          Play again <span aria-hidden="true">↗</span>
        </button>
      </section>
    </div>
  )
}

export default Modal
