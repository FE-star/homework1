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
	let arrA = toArray(A);
	let arrAB = toArray(B);
	A = arrAB;
	return List.list(arrAB);
}

var res = [];
function toArray(obj) {
	for (k in obj) {
		if (!obj['tail']) {
			res.push(obj['head']);
		} else {
			res.push(obj['head']);
			obj = toArray(obj['tail']);
		}
		return res;
	}
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
}
