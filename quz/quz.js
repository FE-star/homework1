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
	let current = A;
	while (current.tail) {
		current = current.tail;
	}
	current.tail = B;
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
	let current = L, count = 0, finalList;
	while (current.tail) {
		if (current.head == start) {
			finalList = current;
			break;
		} else {
			current = current.tail;
		}
	}

	let tmpList = finalList;
	while (tmpList.tail) {
		count++;
		if (count == 2) {
			tmpList.tail = null;
			break;
		} else {
			tmpList = tmpList.tail;
		}
	}

	return finalList;
}
