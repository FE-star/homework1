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
	A.getLastTailOwner().tail = B;
	A.lastTailOwner = B.lastTailOwner;
	return A;
	// for (var L = A; L !== null; L = L.tail) {
	// 	OtailIsNull = L;
	// };
	// OtailIsNull.tail = B;
	// return A;
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
	var R = [];
	for (var i = 0;; i++) {
		if (L !== null) {
			if (i >= start && i < start + len) {
				R.push(L.head);
			}
			L = L.tail;
		} else {
			break;
		}
	};
	return List.list(R);
}
