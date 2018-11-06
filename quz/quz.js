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
  var sentinel = A
  // A遍历到末尾之后tail指向B即可
  while (A.tail) {
    A = A.tail
  }
  A.tail = B
  return sentinel
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
  var arr = [], C = L
  var i = 0

  while (C && i < start) {
    i++
    C = C.tail
  }

  while (C && i < start + len) {
    i++
    arr.push(C.head)
    C = C.tail
  }
  return List.list(arr)
}
