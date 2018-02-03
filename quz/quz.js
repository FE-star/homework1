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
	var end = A.tail;
	while(end.tail) {
		end = end.tail
	}
	end.tail = B;
	return A
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
	var count = 0;
	var index = L;
	var list = new List();
	var p=list;
	while(index) {
		if(count >= start && count < start + len) {
			p.tail = new List(index.head)
			p = p.tail
		}
		index  = index.tail;
		count++;
	}
	return list.tail
}
