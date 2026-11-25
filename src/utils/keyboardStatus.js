const STATUS_PRIORITY = {
  absent: 1,
  present: 2,
  correct: 3,
}

export function mergeKeyboardStatus(previous, result) {
  return result.reduce((statuses, { letter, status }) => {
    const currentPriority = STATUS_PRIORITY[statuses[letter]] || 0
    if (STATUS_PRIORITY[status] > currentPriority) {
      statuses[letter] = status
    }
    return statuses
  }, { ...previous })
}
