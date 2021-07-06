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
	let next = A.tail;
	while(next.tail) {
		next = next.tail;
	}
	next.tail = B;
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
	let next = L;
	while(start) {
		next = next.tail;
		start--;
		if (!next && start) throw "the desired items don't exist";
	}
	const array = [];
	while(len) {
		array.push(next.head);
		next = next.tail;
		len--;
		if (!next && len) throw "the desired items don't exist";
	}
	return List.list(array);
}