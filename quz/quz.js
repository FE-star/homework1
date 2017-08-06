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
  var tmp = A
  while (tmp.tail) {
    tmp = tmp.tail
  }

  tmp.tail = B
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
  var elements = [],
      subArr = [],
      ref = L,
      Ldepth

  while (ref) {
    elements.push(ref.head)
    ref = ref.tail
  }

  Ldepth = elements.length
  if (start < 0 || len < 0 || Ldepth < start + len) {
    return new Error('start or len out of range')
  }

  for (var i = 0; i < len; i++) {
    subArr[i] = elements[start + i]
  }

  return List.list(subArr)
}
