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
	let child = A.tail
	while (child !== null) {
    if (child.tail === null) {
      break;
    }
    child = child.tail;
  }
	child.tail = B
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
	var header = L, i, j;
	for (i=0; i < start; i ++) {
		header = header.tail
	}
	let temp = res = new List();
	for (j=0; j<len; j++) {
		temp.tail = new List(header.head);
		header = header.tail;
		temp = temp.tail;
	}
	return res.tail;
}
