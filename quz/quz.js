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
	let L = A;
	// let temp = A;
	// while (true) {
	// 	if (!temp.tail) {
	// 		temp.tail = B
	// 		break
	// 	}
	// 	temp = temp.tail
	// }
	// return A
	for (L; 1; L = L.tail) {
		if (!L.tail) {
			L.tail = B;
			break;
		}
	}

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
	var temp = L;
	var tempS;
	var contStart = 0;
	let count = Number(start) + Number(len);
	while (temp.tail && count) {
		count--;
		if (((contStart == start - 1)) && !tempS) {
			tempS = temp.tail
		} else if (!start && !tempS) {
			tempS = temp;
		}
		temp = temp.tail
		if (count === 1) {
			temp.tail = null;
		}
		contStart++;
	}
	return tempS;
}
