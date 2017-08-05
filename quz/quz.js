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
	var L;
	for (L = A; L !== null; L = L.tail) {
		if (L.tail === null) {
			L.tail = B;
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
	var i=0;
	var res=[];
	for (Z = L; Z !== null; Z = Z.tail, i++) {
		if(i >= start && len--) {
			res.push(Z.head);
		}
	}
	return List.list(res);
}
