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
	let ATail =  A.tail;
	while (ATail.tail) {
		ATail = ATail.tail;
	}
	ATail.tail = B;
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
	/** Fill in here **/
	let startList =  L.tail;
	for (let i = 0; i < start - 1; i++) {
		if (!startList) {
			return new List()
		}
		startList = startList.tail;
	}
	let newL = new List(startList.head);
	let temL = newL;
	for (let i = start + 1; i < start + len ; i++) {
		startList = startList.tail;
		if (!startList) {
			break;
		}
		temL.tail = new List(startList.head);
		temL = temL.tail;
	}
	return newL
}