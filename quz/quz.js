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
	var p = A;
	while(p.tail) {
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
	/** Fill in here **/
	var D = new List();
	var Dp = D;
	var p = L;
	var num = 0;
	start = start >= 0 ? start : 0;
	len = len >= 0 ? len : 0;
	while(p && num < start + len) {
		if (num >= start) {
			var d = new List();
			d.head = p.head;
			Dp.tail = d;
			Dp = Dp.tail;
		}
		num++;
		p = p.tail;
	}
	return D.tail || D;
}
