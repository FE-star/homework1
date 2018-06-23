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
	let res = A;
	while (res.tail) {
		res = res.tail
	}
	res.tail = B
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
	let res = []
 	let idx = 0
 	let target
 	for (target = L; target !== null; idx++) {
 		if (idx >= start && idx < (start + len)) {
 			res.push(target.head)
 		}
 		target = target.tail
 	}
 	return List.list(res)
}
