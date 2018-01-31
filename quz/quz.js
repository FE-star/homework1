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
	var i = A;
	while (i.tail) {
		i = i.tail;
	}
	i.tail = B;
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
	var arr = [];
	var p = L;
	var end = start + len;
	var i = 0;
	while (p && i < start) {
		i += 1;
		p = p.tail;
	}
	while (p && i < end) {
		arr.push(p.head);
		p = p.tail;
		i += 1;
	}
	if (arr.length < 1) {
		throw new Error('no' + len + 'items exist from' + start);
	}
	return L.constructor.list(arr);
}
