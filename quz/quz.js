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
	for (var key = A; key !== null; key = key.tail) {
		if (key.tail === null) {
			key.tail = B
			return A
		}
	}
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
	let beginFlag = 0;
	let end = start + len;
	let newArr = [];
	for (var key = L; key !== null; key = key.tail, beginFlag++) {
		if (beginFlag >= start && beginFlag < end) {
			newArr.push(key.head);
		}
	}
	 return List.list(newArr);
}
