
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
	let header = A;
	while(header.tail !== null) {
		header = header.tail;
	}

	header.tail = B;
	
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
function sub(L, start = 0, len) {
	/** Fill in here **/

	let header = L;

	for (let i = 0; i < start; i++) {
		if (!header) return new List()
		header = header.tail;
	}

	let p = result = new List()
	let i = 0;
	while ((!!len && len > i) || !len) {
		if (!header) break;
		p.tail = new List(header.head)
		header = header.tail;
		p = p.tail;
		i++;
	}

	return result.tail;
}
