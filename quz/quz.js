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
	// get the last item of A
	let lastItemOfA = A
	while(lastItemOfA.tail) {
		lastItemOfA = lastItemOfA.tail
	}
	// join B to A
	lastItemOfA.tail = B
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
	let tempItem = L
	let resList = new List()
	// find the start position
	while(start > 0) {
		tempItem = tempItem.tail
		start --
	}

	resList.tail = tempItem
	// to the end position
	while(len > 0) {
		tempItem = tempItem.tail
		len --
	}
	return resList.tail
}