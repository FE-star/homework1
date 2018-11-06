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
	var sentinel = A;
	var p;
	if(!A) sentinel = new List()
	while(sentinel.tail) {
		sentinel = sentinel.tail
	}
	sentinel.tail = B;
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
	if(!L || isNaN(start) || isNaN(len)) throw('miss args')
	var len = 0;
	var p = L;
	while(start - len > 0) {
		len++;
		p = p.tail;
	}
	var sentinel = new List(p.head)
	var head = sentinel;
	while(len) {
		if((len-- > 0) && p) {
			sentinel.tail = p.tail;
			p = p.tail
			sentinel = sentinel.tail
		}
	}
	return head;
}