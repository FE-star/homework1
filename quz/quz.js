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
	// 找到最后一个list.tail 的地址就OK了
	var p = A;
	for (; !!p.tail; ) {
		p = p.tail
	}
	p.tail = B
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
	var p = L.toString().split(" "),
		L = p.length,
		r = [];

	p = p.slice(1, L - 1);

	for (var i = start; i < p.length && len; i++, len--) {
		r.push(p[i])
	}

	if (r.length === 0) {
		return new List();
	} else {
		return List.list(r);
	}
}
