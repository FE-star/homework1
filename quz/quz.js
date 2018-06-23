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
	// List{head: 4, tail: List{head: 6, tail: List{head: ..., tail: ...}}}
	let pointer = A.tail;

	while (pointer.tail) {
		pointer = pointer.tail;
	}

	pointer.tail = B;

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
	// [ 19 8 7 3 2 ]
	let pointer = L;

	while (--start >= 0) {
		pointer = pointer.tail;
	}

	const result = [];

	while (len-- > 0) {
		result.push(pointer.head);
		pointer = pointer.tail;
	}

	return List.list(result);
}
