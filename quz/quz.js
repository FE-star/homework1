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
	let current = A.tail;
	while (current.tail !== null) {
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
	let temp = L;
	let _end;
	for (let i = 1; i <= start; i++) {
	  if (temp.tail === null) {
		throw new Error('error start value.');
	  }
	  temp = temp.tail;
	}
	_end = temp;
	while (len > 1) {
	  if (_end.tail === null) {
		return temp;
	  }
	  _end = _end.tail;
	  len--;
	}
	_end.tail = null;
	return temp;
}
