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
	var p = A;
	while (p.tail) {
		p = p.tail;
	}

	p.tail = B;
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
	var sentinel = new List();

	for (var p = L, i = 0; p.tail && i < start; i++, p = p.tail) {}

	if (i < start) {
		throw new Error('invalid start parameter');
	}

	var q = sentinel;
	for (i = 0; p && i < len; i++, p = p.tail) {
		q.head = p.head;
		q.tail = (i < len - 1) ? new List() : null;
		q = q.tail;
	}

	if (i < len) {
		throw new Error('invalid length parameter');
	}

	return sentinel;
}
