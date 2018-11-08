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
	let x = A.tail
	while (x) {
		if (x.tail) {
			x = x.tail
		} else {
			x.tail = B
			break;
		}
	}
	return A
	/** Fill in here **/
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
	let x = L
	while (x.head != start) {
		x = x.tail
	}
	console.log('x', x);
	let arr = []
	for(var i = 0; i < len; i++) {
		if (x.head) {
			arr.push(x.head)
			x = x.tail
		} else {
			arr.push(x)
			break;
		}
	}
	return List.list(arr)
	/** Fill in here **/
}