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
    return A.concat(B);
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
	let cursor = L,
        index = 0,
	    result = new List(),
        p = result;
	for (; index<start+len; index++) {
	    if (index < start) {
	        cursor = cursor.tail;
	        continue;
        }
        p.tail = new List(cursor.head);
	    p = p.tail;
	    cursor = cursor.tail
    }
    return result.tail;
}
