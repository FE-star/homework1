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
	var L = B;
	A.push(L.head);
	while (L.tail) {
		A.push(L.tail.head);
		L = L.tail;
	}
	return A;
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
	if (start < 0 || start > L.count() - 1 || len <= 0) return null;
	var R = L.get(start);
	var res = new List(R.head);
	R = R.tail;
	len--;
	while (R && len--) {
		res.push(R.head);
		R = R.tail;
	}
	return res;
}