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
	var tailNull = null;

	function rec (obj) {
		if (obj.tail == null) return obj;
		return arguments.callee(obj.tail);
	}
	tailNull = rec(A);
	tailNull.tail = B;
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
	var arr = [],
		res = [],
		arrLength = 0;

	var arr = L.toString().match(/\d+/g);
	arrLength = arr.length;
	if (start >= arrLength)	{
		return null;
	}
	if (start + len > arrLength) {
		len = arrLength - start;
	}
	for (var n = start; n < start + len;  n++)	 {
		res.push(arr[n]);
	}

	return L.__proto__.constructor.list(res);

}
