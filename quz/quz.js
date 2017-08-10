const {List} = require('../js/list');
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
	var tmp;
	for (tmp = A; tmp !== null; tmp = tmp.tail) {
		if (tmp.tail === null) {
			tmp.tail = B;
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
	var tmp, i, j, p,
		end = start + len,
		newList = new List();
	for (var tmp = L, i = 0, p = newList; tmp !== null; tmp = tmp.tail, i++) {
		if (i >= start && i < end) {
			p.tail = new List(tmp.head);
			p = p.tail;
		}
	}
	return newList.tail;
}
module.exports={
	dcate,
	sub
}