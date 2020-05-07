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
	var L = null;
	for (L = A.tail; L.tail !== null; L = L.tail)
		;
	L.tail = B;
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
	if (start < 0) {
		throw(new SyntaxError('数据越界'));
	}
	var sentinel = new List(L.head), C, b;
	b = sentinel;
	// deep copy L 
	for (C = L.tail; C.tail !== null; C = C.tail) {
		b.tail = new List(C.head);
		b = b.tail;
	}
	b.tail = new List(C.head);
	var L1 = null,
	L2 = null,
	end = 1,
	deep = 0;
	for (L1 = sentinel; L1.tail !== null && deep < start;) {
		L1 = L1.tail;
		deep++;
	}
	if (deep < start) {
		throw(new SyntaxError('数据越界'));
	}
	for (L2 = L1; L2.tail !== null && end < len;) {
		end++;
		L2 = L2.tail;
	}
	if (end < len) {
		throw(new SyntaxError('数据越界'));
	}
	L2.tail = null;
	return L1;
}
