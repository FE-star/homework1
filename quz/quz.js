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
	if (A.head == 0) {
		return B;
	} else if (B.head == 0) {
		return A;
	} else {
		var res;
		for (var L = A; L !== null; L = L.tail) {
			res = L;
		}
		res.tail = B;
		return A;
	}
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
	if (L.head == 0) {
		return L;
	}

	var res;
	for (var A = L, i = 0; A !== null; A = A.tail, i++) {
		if (i == start) {
			res = A;
		} 
		if ((A.tail == null && i <= (start + len)) || i == (start + len)) {
			A.tail = null;
		}
	}
	return res;
}
