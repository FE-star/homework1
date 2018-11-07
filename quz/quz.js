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
	let x = A
	while(true) {
		if (x.tail !== null) {
			x = x.tail
		} else {
			x.tail = B
			break;
		}
	}
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
	let x = L
	let y = []
	for(let i = 0; i < start + len; i++) {
		if(i >= start) {
			y.push(x.head)
		}
		x = x.tail
	}
	return List.list(y)
}
