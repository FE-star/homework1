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
	let p = A
	while (p.tail !== null) {
		p = p.tail
	}
	p.tail = B
	return A
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
	let p = L
	let res = new List()
	let q = res
	while (p.tail !== null && start > 0) {
		if (p.tail == null) throw "the next tail doesn't exist"
		p = p.tail
		start--
	}
	while (len > 0 && p !== null) {
		q.tail = new List(p.head)
		if (p === null) throw("the next tail doesn't exist")
		p = p.tail
		q = q.tail
		len--
	}
	return res.tail
}
