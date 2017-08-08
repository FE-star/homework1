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
	let first = A,
      next = A.tail,
			temp
	while (next) {
    temp = next
    next = next.tail
	}
  temp.tail = B
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
	let index = 0
	let step = L.tail
  let nodesArray = []
  while (index < start - 1) {
    step = step.tail
    index++
  }
  nodesArray.push(step.head)
  for (let i = 0; i < len - 1; i++) {
    step = step.tail
    nodesArray.push(step.head)
  }
  return List.list(nodesArray)
}