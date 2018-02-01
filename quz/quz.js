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
	var node = A;
	while(node) {
		if(!node.tail) {
			node.tail = B;
			break;
		}
		node = node.tail;
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
	if(!start) return L;
	var node = L;
	var idx = 0;
	var length = 0;
	var newList = null;
	while(node) {
		if(idx >= start && length < len) {
			var l = new List();
			l.head = node.head;
			if(!newList) newList = l;
			else newList.tail = l;
			length++;
		}
		node = node.tail;
		idx++;
	}
	return newList;
}
