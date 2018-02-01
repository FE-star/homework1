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
	let c = A;
	while (c.tail != null) {
		c = c.tail
	}
	c.tail = B;
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
	let M, i = 0, l = 1, arr = [];
	for (M = L; M != null; M = M.tail, i++) {
		if (start <= i) {
			if (l > len) break;
			arr.push(M.head);
			i++;
		}
	}
	return List.list(arr);
}