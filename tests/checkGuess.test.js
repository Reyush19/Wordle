import assert from 'node:assert/strict'
import test from 'node:test'
import { checkGuess } from '../src/utils/checkGuess.js'
import { mergeKeyboardStatus } from '../src/utils/keyboardStatus.js'

test('marks exact matches before using remaining letters for yellow matches', () => {
  const result = checkGuess('allee', 'apple')

  assert.deepEqual(result.map(({ letter, status }) => [letter, status]), [
    ['a', 'correct'],
    ['l', 'present'],
    ['l', 'absent'],
    ['e', 'absent'],
    ['e', 'correct'],
  ])
})

test('does not award more duplicate letters than the answer contains', () => {
  const result = checkGuess('ppppp', 'apple')

  assert.deepEqual(result.map(({ status }) => status), [
    'absent',
    'correct',
    'correct',
    'absent',
    'absent',
  ])
})

test('keeps the strongest keyboard status across guesses', () => {
  const afterFirstGuess = mergeKeyboardStatus({}, [
    { letter: 'a', status: 'correct' },
    { letter: 'b', status: 'present' },
    { letter: 'c', status: 'absent' },
  ])
  const afterSecondGuess = mergeKeyboardStatus(afterFirstGuess, [
    { letter: 'a', status: 'absent' },
    { letter: 'b', status: 'correct' },
    { letter: 'c', status: 'present' },
  ])

  assert.deepEqual(afterSecondGuess, {
    a: 'correct',
    b: 'correct',
    c: 'present',
  })
})
