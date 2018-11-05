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
	// 考察的是list集合的数组结构，解题思路是先找到A集合的尾部，依次把B集合追加到A集合后面。（当然，也可以直接修改list集合）
	let sentinel = A
	for (; A.tail !== null; A = A.tail);
	for (L = B; L.tail !== null; L = L.tail) {
		A.tail = L
		A = A.tail;
	}
	return  sentinel
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
	let sentinel = L, p
	for (; start--;) {
		sentinel = sentinel.tail
	}
	p = sentinel
	for (; sentinel = sentinel.tail; ) {
		if (len--) {
			sentinel.tail = null
			break
		} 
	}
	return p
}
