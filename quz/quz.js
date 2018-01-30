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
	let tmp = A;
	while (tmp.tail) {
		tmp = tmp.tail;
	}
	tmp.tail = B;
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
	if(start < 0 || len < 0) return null;
	let res = new List();
	let tmp = L;
	let p = res;
	while(start--) {
		tmp = tmp.tail;
		if (!tmp) return null;
	}

	res.head = tmp.head;
	while(--len) {
		tmp = tmp.tail;
		if (!tmp) return null;
		p.tail = new List(tmp.head);
	}
	return res;
}
