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
	var tmpList = null;
	var recurrence = function(A) {
		if (A.tail !== null) {
			tmpList = A.tail;
			arguments.callee(tmpList);
		} else {
			A.tail = B;
		}
	}
	recurrence(A);
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
	var resultList = null;
	for (var i = 0; i < start + len; L = L.tail, i++) {
		if (L === null) {
			throw new Error('超出长度');
		}
		if (i === start) {
			resultList = new List(L.head, null);
		} else if (i > start && i < start + len) {
			resultList.tail = new List(L.head, null);
		}
	}
	return resultList;
}
