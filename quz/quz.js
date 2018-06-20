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
	let l = A;
	for (; l.tail !== null; l = l.tail) ;
	l.tail = B;
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
	var end = start+len;
	var tmpArr = L, tmp = {}, res;
	for (var i = 0; i < end; i++ ){
		if (i === start) {
			tmp = new List(tmpArr.head);
			res = tmp;
		} else if (i > start) {
			tmp.tail = new List(tmpArr.head);
			tmp = tmp.tail;
		}

		tmpArr = tmpArr.tail
	}
	return res
}
