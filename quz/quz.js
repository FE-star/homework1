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
	var C = [];
	var L1 = A;
	var L2 = B;
	for (A; A != null; A = A.tail) {
		C.push(A.head);
	}
	for (B; B != null; B = B.tail) {
		C.push(B.head);
	}
	//L1.tail = A;
	//L2.tail = B;
	return List.list(C);
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
	var C = [];
	for (L; L != null; L = L.tail) {
		C.push(L.head);
	}
	C = C.splice(start, len);
	return List.list(C);
}
