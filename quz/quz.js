const List = require('../js/list')

/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate (A, B) {
  let p = A
  let first = A
  while (p.tail) {
    p = p.tail
  }
  p.tail = B
  return first
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub (L, start, len) {
  let sentinel = new List()
  let p = sentinel
  let index = 0
  if (len === 0) return new List()
  while (L && index < start + len) {
    if (start <= index) {
      p.tail = new List(L.head)
      p = p.tail
    }
    if (index === start + len - 1) break
    L = L.tail
    index++
  }

  if (p.tail) p.tail = null
  return sentinel.tail
}

module.exports = {
  dcate,
  sub
}
