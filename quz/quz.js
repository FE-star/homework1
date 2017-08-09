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
  if (!(A instanceof List) || !(B instanceof List)) {
    throw new TypeError('"A" 和 "B" 都应该是 List 类型实例')
  }
  if (!B) {
    return A
  }

	let first = A
	while (A.tail) {
    A = A.tail
	}
  A.tail = B
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
function sub(L, start, len) {
	/** Fill in here **/
  if(start < 0 || len < 0) {
    return new Error('start 或者 len 设定值超出范围')
  }
	let index = 0
  let nodesArray = []
  while (index < start) {
    L = L.tail
    index++
  }
  while (len && L) {
    nodesArray.push(L.head)
    L = L.tail
    len--
  }
  return List.list(nodesArray)
}