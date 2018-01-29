/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
// find a middle variable to keep B and then change them
function dcate(A, B) {
	/** Fill in here **/
	for (var p = A; p !== null; p = p.tail) {
		if (p.tail === null) {
			p.tail = B;
			break;
		}
	}
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
	var p;
	var k;
	var j;
	var i = 0;
	var head0;
	for (p = L; i < start + len; p = p.tail, i++) {
		if (i == start) {
			head0 = p.head;
			k = new Array(head0, null);
			j = k;
		} else if (i > start && i < start + len)
			head0 = p.head;
		j.tail = new Array(head0, null);
		j = j.tail;
	}
	return k;
}
