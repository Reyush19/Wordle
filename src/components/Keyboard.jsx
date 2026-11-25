const KEY_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
]

function Keyboard({ usedKeys, onKeyPress, disabled }) {
  return (
    <div className="keyboard" aria-label="On-screen keyboard">
      {KEY_ROWS.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => {
            const classNames = [
              'key',
              key.length > 1 && 'key-wide',
              usedKeys[key] && `key-${usedKeys[key]}`,
            ].filter(Boolean).join(' ')

            return (
              <button
                aria-label={key === 'Backspace' ? 'Backspace' : key === 'Enter' ? 'Enter' : key}
                className={classNames}
                disabled={disabled}
                key={key}
                onClick={() => onKeyPress(key)}
                type="button"
              >
                {key === 'Backspace' ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M9 5 3 12l6 7h12V5H9Z" />
                    <path d="m12 9 6 6m0-6-6 6" />
                  </svg>
                ) : key}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
