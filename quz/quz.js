/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
  var t = A
  while(t.tail !== null) {
    t = t.tail
  }
  t.tail = B
  return A
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
function sub(L, start, len) {
	/** Fill in here **/
  var index = 0,
      length = 0,
      res = []

  while (L !== null) {
    if (index >= start && length <= len) {
      res.push(L.head)
      length++
    }
    index++
    L = L.tail
  }

  return List.list(res)
}
