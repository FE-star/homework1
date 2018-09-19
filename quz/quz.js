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
	if (! (A instanceof List) || !(B instanceof List)) {
		throw new TypeError('传入的类型不是List')
	}
	let tail = A;
	while(tail.tail) {
		tail = tail.tail
	}
	tail.tail = B
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
	if (!(L instanceof List)) {
		throw new TypeError('传入的类型不是List')
	}
	let first = L;
	for (let i = 0; i < start; i++ ) {
		first = first.tail
		if (!first) {
			throw new TypeError('List 的长度必须大于 start')
		}
	}
	const s = new List(first.head)
	first = first.tail
	for(let i = 0; i < len; i++) {
		let { head } = first;
		s.tail = new List(head)
	}
	return s
}
